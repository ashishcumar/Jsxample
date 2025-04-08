const retryablePromiseImplementation = {
  title: "Retryable Promise Implementation",
  category: ["JavaScript", "Asynchronous Programming"],
  description:
    "Implementation that automatically retries a failing promise operation",
  requirements: [
    "Retry the operation up to specified maximum attempts",
    "Exponential backoff between retries",
    "Resolve with first successful attempt",
    "Reject if all attempts fail",
    "Cancel retries if non-retryable error occurs",
  ],
  code: {
    "Custom Implementation": `
  function retryablePromise(fn, options = {}) {
    const { retries = 3, delay = 1000 } = options;
    
    return new Promise((resolve, reject) => {
      const attempt = (remainingAttempts) => {
        fn()
          .then(resolve)
          .catch(error => {
            if (remainingAttempts <= 1) {
              return reject(error);
            }
            
            setTimeout(() => {
              attempt(remainingAttempts - 1);
            }, delay * (options.exponential ? 
               Math.pow(2, options.retries - remainingAttempts) : 1));
          });
      };
      
      attempt(retries);
    });
  }
      `,
    "Usage Example": `
  const fetchWithRetry = () => retryablePromise(
    () => fetch('https://api.example.com/data'),
    { retries: 3, delay: 1000, exponential: true }
  );
  
  fetchWithRetry()
    .then(handleSuccess)
    .catch(handleFinalError);
      `,
    "Test Case Example": `
  const flakyOperation = () => new Promise((res, rej) => {
    Math.random() > 0.3 ? res('Success') : rej('Temporary failure');
  });
  
  retryablePromise(flakyOperation, { retries: 3 })
    .then(console.log)
    .catch(console.error);
      `,
  },
  explanation: [
    "### Key Features:\n1. **Configurable Retries**: Set maximum attempt count\n2. **Backoff Strategies**: Linear or exponential delay\n3. **Final Rejection**: Rejects only after all attempts fail",

    "### Use Cases:\n- Network requests with temporary failures\n- Unreliable third-party APIs\n- Operations requiring eventual consistency",
  ],
  tags: ["promises", "retry logic", "error handling", "networking"],
  difficulty: "Advanced",
  benchmarks: {
    "Linear Backoff": "Fixed delay between attempts",
    "Exponential Backoff": "Growing delay between attempts",
  },
  type: "javascript",
};

export default retryablePromiseImplementation;
