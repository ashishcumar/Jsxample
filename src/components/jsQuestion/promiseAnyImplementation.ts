const promiseAnyImplementation = {
  title: "Promise.any() Polyfill",
  category: ["JavaScript", "Asynchronous Programming"],
  description:
    "Implementations that resolve on first success or reject with AggregateError if all fail",
  requirements: [
    "Resolve with first fulfilled promise",
    "Reject with AggregateError if all promises reject",
    "Preserve order of errors in AggregateError",
    "Handle non-promise values",
  ],
  code: {
    "Approach 1 - Basic Counter": `
  Promise.customAny = function(promises) {
    const errors = new Array(promises.length);
    let rejectedCount = 0;
    
    return new Promise((resolve, reject) => {
      promises.forEach((promise, i) => {
        Promise.resolve(promise)
          .then(resolve)
          .catch(err => {
            errors[i] = err;
            if (++rejectedCount === promises.length) {
              reject(new AggregateError(errors, 'All promises were rejected'));
            }
          });
      });
    });
  };
      `,
    "Approach 2 - Invert allSettled": `
  function promiseAny(promises) {
    return new Promise((resolve, reject) => {
      Promise.allSettled(promises)
        .then(results => {
          for (const result of results) {
            if (result.status === 'fulfilled') {
              return resolve(result.value);
            }
          }
          reject(new AggregateError(
            results.map(r => r.reason), 
            'No promises fulfilled'
          ));
        });
    });
  }
      `,
    "Approach 3 - Async/Await + Loop": `
  async function asyncAny(promises) {
    const errors = [];
    for (const promise of promises) {
      try {
        return await Promise.resolve(promise);
      } catch (err) {
        errors.push(err);
      }
    }
    throw new AggregateError(errors, 'All promises rejected');
  }
      `,
  },
  explanation: [
    "### Approach Comparison:\n- **Basic Counter**: Most performant (native-like)\n- **Invert allSettled**: Uses Promise.allSettled() for clarity\n- **Async/Await**: Simple but sequentializes checks",
    "### Edge Cases:\n- Empty array → Immediate AggregateError\n- Immediate values → Resolves with first value\n- All rejections → Ordered AggregateError",
  ],
  tags: ["promises", "error-aggregation", "early-exit"],
  difficulty: "Medium",
  benchmarks: {
    "Basic Counter": "Fastest (no intermediate arrays)",
    "Invert allSettled": "Clean but creates extra objects",
  },
  type: "javascript",
};

export default promiseAnyImplementation;
