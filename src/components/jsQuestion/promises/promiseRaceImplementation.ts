const promiseRaceImplementation = {
    "title": "Promise.race() Polyfill",
    "category": ["JavaScript", "Asynchronous Programming"],
    "description": "Complete implementations of Promise.race() with different settlement strategies",
    "requirements": [
      "Settle when any promise settles (fulfill/reject)",
      "Preserve first settlement value/reason",
      "Handle non-promise values",
      "Mirror native Promise.race() behavior"
    ],
    "code": {
      "Approach 1 - Basic Loop": `
  Promise.customRace = function(promises) {
    return new Promise((resolve, reject) => {
      promises.forEach(promise => 
        Promise.resolve(promise)
          .then(resolve)
          .catch(reject)
      );
    });
  };
      `,
      "Approach 2 - Promise Constructor (Optimized)": `
  Promise.optimizedRace = function(promises) {
    return new Promise((resolve, reject) => {
      let settled = false;
      const settleOnce = (fn) => (val) => {
        if (!settled) {
          settled = true;
          fn(val);
        }
      };
      
      promises.forEach(promise => {
        Promise.resolve(promise)
          .then(settleOnce(resolve))
          .catch(settleOnce(reject));
      });
    });
  };
      `,
      "Approach 3 - Async/Await + Loop": `
  async function asyncRace(promises) {
    const wrappers = promises.map(p => 
      Promise.resolve(p)
        .then(val => ({ status: 'fulfilled', val }))
        .catch(err => ({ status: 'rejected', err }))
    );
    
    for (const wrapper of wrappers) {
      const result = await wrapper;
      if (result.status === 'fulfilled') return result.val;
      throw result.err;
    }
  }
      `,
      "Approach 4 - Aggregate + First Settlement": `
  function aggregateRace(promises) {
    return new Promise((resolve, reject) => {
      const errors = [];
      let pending = promises.length;
      
      promises.forEach((promise, i) => {
        Promise.resolve(promise)
          .then(resolve)
          .catch(err => {
            errors[i] = err;
            if (--pending === 0) {
              reject(new AggregateError(errors, 'All promises rejected'));
            }
          });
      });
    });
  }
      `
    },
    "explanation": [
      "### Approach Comparison:\n- **Basic Loop**: Simplest but may trigger multiple settlements\n- **Optimized**: Prevents multiple settlements with flag\n- **Async/Await**: Uses wrapper objects for error handling\n- **Aggregate**: Collects errors if all reject (like Promise.any() fallback)",
      "### Edge Cases:\n- Empty input → Hangs indefinitely\n- Immediate values → Settles with first value\n- Mixed reject/fulfill → Mirrors first outcome"
    ],
    "tags": ["promises", "concurrency", "early-exit"],
    "difficulty": "Medium",
    "benchmarks": {
      "Basic Loop": "Fastest but less safe",
      "Optimized": "Safe with minor overhead",
      "Async/Await": "Clean but sequentializes checks"
    },
    "type": "javascript"
  }

export default promiseRaceImplementation