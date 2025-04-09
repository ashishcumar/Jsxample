const arrayFlatteningJson = {
  "title": "Array Flattening Techniques",
  "category": ["JavaScript", "Algorithms"],
  "description":
    "Implement different approaches to flatten nested arrays, comparing recursive and iterative methods.",
  "requirements": [
    "Create a recursive solution that handles arbitrary nesting depth",
    "Implement an iterative solution using a while loop",
    "Avoid mutating the original array",
    "Handle edge cases (empty arrays, non-array inputs)",
  ],
  "code": {
    "Approach 1 - Recursive": `
  const flattenRecursive = (arr, result = []) => {
    for (const item of arr) {
      if (Array.isArray(item)) {
        flattenRecursive(item, result);
      } else {
        result.push(item);
      }
    }
    return result;
  };
      `,
    "Approach 2 - While Loop": `
  const flattenWhileLoop = (arr) => {
    const stack = [...arr];
    const result = [];
    
    while (stack.length) {
      const item = stack.shift();
      if (Array.isArray(item)) {
        stack.unshift(...item);
      } else {
        result.push(item);
      }
    }
    return result;
  };
      `,
    "Approach 3 - Array.flat()": `
  // Modern JS built-in (ES2019)
  const flattened = arr.flat(Infinity);
      `,
    "Approach 4 - Reduce + Recursion": `
  const flattenReduce = (arr) => 
    arr.reduce((acc, item) => 
      acc.concat(Array.isArray(item) ? flattenReduce(item) : item), 
    []);
      `,
    "Approach 5 - Generator Function": `
  function* flattenGenerator(arr) {
    for (const item of arr) {
      if (Array.isArray(item)) {
        yield* flattenGenerator(item);
      } else {
        yield item;
      }
    }
  }
  // Usage: [...flattenGenerator(nestedArray)]
      `,
  },
  "explanation": [
    "### Recursive Approach:\n1. Uses depth-first traversal\n2. Modifies the result array in-place (mutation)\n3. Time Complexity: O(n)\n4. Space Complexity: O(d) (call stack depth)",

    "### While Loop Approach:\n1. Uses explicit stack instead of call stack\n2. Better for very deep nesting (avoids stack overflow)\n3. Time Complexity: O(n)\n4. Space Complexity: O(n) (auxiliary stack)",

    "### Comparison:\n- **Recursive**: Clean but limited by call stack size\n- **Iterative**: More verbose but handles deeper nesting\n- **Array.flat()**: Simplest but less control\n- **Reduce**: Functional style but creates intermediate arrays\n- **Generator**: Memory-efficient for large datasets",
  ],
  "tags": ["recursion", "iteration", "algorithms", "ES6"],
  "difficulty": "Medium",
  benchmarks: {
    Recursive: "Best for moderately nested arrays",
    "While Loop": "Safest for extremely deep nesting",
    "Array.flat()": "Most performant in modern browsers",
  },
  "type": "javascript",
};

export default arrayFlatteningJson;
