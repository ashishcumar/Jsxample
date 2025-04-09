const curringJson = {
  "title": "Currying Implementation",
  "category": ["JavaScript", "Functional Programming"],
  "description":
    "Implement both simple and infinite currying functions to understand function composition and closure concepts.",
  "requirements": [
    "Create a simple curry function that takes two arguments sequentially",
    "Implement an infinite curry function that can handle unlimited nested calls",
    "The infinite curry should return the final sum when called without arguments",
  ],
  "code": {
    "Approach 1 - Simple Curry": `
      function curry(a){
    return function inner(b){
        return a + b
    }
}
      `,
    "Approach 2 - Infinite Curry": `
    function infiniteCurry(a){
    return function inner(b){
        if(!b) return a
        return infiniteCurry(a+b)
    }
}
    `,
  },
  "explanation": [
    "### Simple Curry Breakdown:\n1. Outer function `curry(a)` captures the first argument\n2. Returns an inner function that takes the second argument `b`\n3. When called, sums both captured values (closure in action)",

    "### Infinite Curry Magic:\n1. Similar start with `infiniteCurry(a)` capturing initial value\n2. Inner function checks if `b` is undefined (terminal condition)\n3. If no argument, returns accumulated value\n4. Otherwise, recursively returns new curried function with updated sum\n\n**Key Concept**: Each call returns a new function until termination, creating a chain of closures.",
  ],
  "tags": ["closure", "recursion", "function composition"],
  "difficulty": "Medium",
};

export default curringJson;
