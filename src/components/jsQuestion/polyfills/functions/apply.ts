const apply = {
  title: "Function.prototype.apply() Polyfill",
  category: ["JavaScript", "Polyfill", "Function Methods"],
  description:
    "Implement a polyfill for Function.prototype.apply() which calls a function with a given this value and arguments provided as an array.",
  requirements: [
    "Should set the this context",
    "Should pass arguments as array",
    "Should handle null/undefined context",
    "Should work with any function",
  ],
  code: {
    basic:
      "Function.prototype.myApply = function(context, argsArray) {\n  context = context || window;\n  const fnSymbol = Symbol('fn');\n  context[fnSymbol] = this;\n  const result = context[fnSymbol](...(argsArray || []));\n  delete context[fnSymbol];\n  return result;\n};",
    "spec-compliant":
      "Function.prototype.myApply = function(thisArg, argArray) {\n  if (typeof this !== 'function') {\n    throw new TypeError('Function.prototype.apply called on incompatible ' + this);\n  }\n  \n  thisArg = thisArg != null ? Object(thisArg) : window;\n  \n  const fn = Symbol('fn');\n  thisArg[fn] = this;\n  \n  let result;\n  if (!argArray) {\n    result = thisArg[fn]();\n  } else {\n    if (!Array.isArray(argArray) && !isArrayLike(argArray)) {\n      throw new TypeError('CreateListFromArrayLike called on non-object');\n    }\n    \n    const args = [];\n    const len = argArray.length >>> 0;\n    for (let i = 0; i < len; i++) {\n      args.push(argArray[i]);\n    }\n    \n    result = thisArg[fn](...args);\n  }\n  \n  delete thisArg[fn];\n  return result;\n};",
  },
  explanation: [
    "Calls function with specified this context",
    "Passes arguments as array (or array-like object)",
    "Handles null/undefined context by defaulting to global object",
    "Uses Symbol to avoid property conflicts",
    "Cleans up temporary property after call",
  ],
  tags: ["function", "polyfill", "context"],
  difficulty: "medium",
  type: "method-polyfill",
};

export default apply;
