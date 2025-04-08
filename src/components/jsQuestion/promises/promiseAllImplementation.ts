const promiseAllImplementation = {
  title: "Promise.all() Implementation",
  category: ["JavaScript", "Asynchronous Programming"],
  description:
    "Implement a custom version of Promise.all() that handles both fulfillments and rejections correctly.",
  requirements: [
    "Return a single Promise that resolves when all input promises resolve",
    "Preserve the order of results regardless of completion order",
    "Immediately reject if any input promise rejects",
    "Handle non-Promise values in the input array",
    "Maintain the same behavior as native Promise.all()",
  ],
  code: {
    "Custom Implementation": `
  const customPromiseAll = (promiseArr) => {
    const results = [];
    let completedCount = 0;
    
    return new Promise((resolve, reject) => {
      // Handle empty array case
      if (promiseArr.length === 0) {
        resolve(results);
        return;
      }
      
      promiseArr.forEach((promise, index) => {
        Promise.resolve(promise)
          .then((value) => {
            results[index] = value; // Maintain order by index
            completedCount++;
            
            // Check if all promises are completed
            if (completedCount === promiseArr.length) {
              resolve(results);
            }
          })
          .catch(reject); // Reject immediately on any error
      });
    });
  };
      `,
    "Native Promise.all()": `
  // Native implementation for comparison
  const nativeResults = await Promise.all(promiseArray);
      `,
    "Test Case Example": `
  const getPromise = (n, delay) => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(n), delay);
    });
  };
  
  const testPromiseAll = async () => {
    const promises = [
      getPromise(1, 300),
      getPromise(2, 100),
      Promise.resolve(3), // Immediate resolution
      4, // Non-promise value
    ];
    
    try {
      const results = await customPromiseAll(promises);
      console.log(results); // [1, 2, 3, 4] (in original order)
    } catch (error) {
      console.error("One of the promises rejected:", error);
    }
  };
      `,
  },
  explanation: [
    "### Key Features:\n1. **Order Preservation**: Results appear in the same order as input promises\n2. **Immediate Rejection**: Fails fast if any promise rejects\n3. **Mixed Input Handling**: Works with both Promise and non-Promise values\n4. **Empty Array Handling**: Resolves immediately with empty array for empty input",

    "### Comparison with Native Promise.all():\n- Identical behavior for successful cases\n- Same error handling characteristics\n- Slightly less optimized than native implementation\n- Demonstrates core Promise aggregation logic",

    "### Performance Considerations:\n- O(n) time complexity where n is number of promises\n- O(n) space complexity for results storage\n- No additional overhead beyond native implementation",
  ],
  tags: ["promises", "async/await", "error handling", "ES6"],
  difficulty: "Medium",
  benchmarks: {
    "Custom Implementation":
      "Educational purpose - understand Promise internals",
    "Native Promise.all()":
      "Optimized engine implementation - use in production",
  },
  type: "javascript",
};

export default promiseAllImplementation;
