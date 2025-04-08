const promiseFinallyImplementation = {
    "title": "Promise.finally() Polyfill",
    "category": ["JavaScript", "Asynchronous Programming"],
    "description": "Implementations that execute a callback regardless of promise settlement",
    "requirements": [
      "Execute callback on both fulfillment and rejection",
      "Preserve original promise chain value/error",
      "Handle chained finally calls correctly",
      "Maintain native finally() behavior"
    ],
    "code": {
      "Approach 1 - Then/Catch Mirroring": `
  Promise.prototype.customFinally = function(onFinally) {
    return this.then(
      value => Promise.resolve(onFinally()).then(() => value),
      reason => Promise.resolve(onFinally()).then(() => { throw reason; })
    );
  };
      `,
      "Approach 2 - Async/Await Wrapper": `
  Promise.prototype.asyncFinally = async function(onFinally) {
    try {
      const val = await this;
      await onFinally();
      return val;
    } catch (err) {
      await onFinally();
      throw err;
    }
  };
      `,
      "Approach 3 - Constructor-Based": `
  Promise.prototype.constructorFinally = function(onFinally) {
    const Constructor = this.constructor;
    return new Constructor((resolve, reject) => {
      this.then(
        value => Constructor.resolve(onFinally()).then(() => resolve(value)),
        reason => Constructor.resolve(onFinally()).then(() => reject(reason))
      );
    });
  };
      `,
      "Approach 4 - State Inspection": `
  Promise.prototype.stateAwareFinally = function(onFinally) {
    let state = 'pending';
    let value, reason;
    
    const promise = this.then(
      val => (state = 'fulfilled', value = val),
      err => (state = 'rejected', reason = err)
    );
    
    return Promise.resolve(promise).then(() => {
      return Promise.resolve(onFinally()).then(() => {
        return state === 'fulfilled' ? value : Promise.reject(reason);
      });
    });
  };
      `
    },
    "explanation": [
      "### Approach Comparison:\n- **Then/Catch**: Native-spec compliant (ES2018)\n- **Async/Await**: Readable but creates microtasks\n- **Constructor**: Preserves subclass behavior\n- **State Inspection**: Explicit state tracking (overkill for most cases)",
      "### Key Behaviors:\n1. Callback executes after settlement\n2. Original value/error propagates\n3. Returns new promise for chaining\n4. If callback throws, that error propagates"
    ],
    "tags": ["promises", "cleanup", "error-handling", "ES2018"],
    "difficulty": "Medium",
    "benchmarks": {
      "Then/Catch": "Most efficient (native-like)",
      "Async/Await": "Adds 1 extra microtask",
      "Constructor": "Best for Promise subclasses"
    },
    "type": "javascript",
    "testCases": {
      "Value Preservation": `
  Promise.resolve(42)
    .customFinally(() => console.log('Cleanup'))
    .then(v => console.log(v)); // 42 (after 'Cleanup')
      `,
      "Error Propagation": `
  Promise.reject('Error')
    .customFinally(() => {})
    .catch(e => console.log(e)); // 'Error'
      `,
      "Callback Throws": `
  Promise.resolve(42)
    .customFinally(() => { throw 'FinallyError'; })
    .catch(e => console.log(e)); // 'FinallyError'
      `
    }
  }

export default promiseFinallyImplementation;
