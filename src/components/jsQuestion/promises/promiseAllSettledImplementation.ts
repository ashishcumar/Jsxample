const promiseAllSettledImplementation = {
  title: "Promise.allSettled() Implementation",
  category: ["JavaScript", "Asynchronous Programming"],
  description:
    "Complete implementations to wait for all promises to complete, never rejecting",
  requirements: [
    "Never reject the aggregate promise",
    "Record all fulfillment values and rejection reasons",
    "Preserve original order of results",
    "Handle non-promise values",
  ],
  code: {
    "Approach 1 - Basic Counter": `
  function allSettledBasic(promises) {
    const results = new Array(promises.length);
    let completed = 0;
    
    return new Promise(resolve => {
      promises.forEach((promise, i) => {
        Promise.resolve(promise)
          .then(value => results[i] = { status: 'fulfilled', value })
          .catch(reason => results[i] = { status: 'rejected', reason })
          .finally(() => ++completed === promises.length && resolve(results));
      });
    });
  }
      `,
    "Approach 2 - Promise.all Wrapper": `
  function allSettledWrapper(promises) {
    return Promise.all(promises.map(p => 
      Promise.resolve(p)
        .then(value => ({ status: 'fulfilled', value }))
        .catch(reason => ({ status: 'rejected', reason }))
    );
  }
      `,
    "Approach 3 - Async/Await": `
  async function allSettledAsync(promises) {
    const results = [];
    for (const [i, promise] of promises.entries()) {
      try {
        results[i] = { 
          status: 'fulfilled', 
          value: await Promise.resolve(promise) 
        };
      } catch (err) {
        results[i] = { 
          status: 'rejected', 
          reason: err 
        };
      }
    }
    return results;
  }
      `,

  },
  explanation: [
    "### Approach Comparison:\n- **Basic Counter**: Explicit completion tracking\n- **Promise.all Wrapper**: Most concise (ES2019 spec-aligned)\n- **Async/Await**: Sequential-looking but parallel execution",
    "### Edge Cases:\n- Empty array → Resolves with []\n- Non-promise values → Wrapped as fulfilled\n- Mixed sync/async → Preserves order",
  ],
  tags: ["promises", "error-handling", "state-tracking"],
  difficulty: "Medium",
  benchmarks: {
    "Basic Counter": "Fastest for most cases",
    "Promise.all Wrapper": "Native-optimized path",
  },
  type: "javascript",
};

export default promiseAllSettledImplementation;
