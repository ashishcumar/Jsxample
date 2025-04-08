const every = {
  title: "Array.prototype.every() Polyfill",
  description:
    "Implement a polyfill for the Array.prototype.every() method which tests whether all elements in the array pass the test implemented by the provided function.",
  category: ["JavaScript", "Polyfill"],
  requirements: [
    "Should work on all arrays",
    "Should accept a predicate function",
    "Should pass current element, index, and array to predicate",
    "Should return true only if all elements pass, false otherwise",
  ],
  code: {
    basic:
      "Array.prototype.myEvery = function(callback) {\n  for (let i = 0; i < this.length; i++) {\n    if (!callback(this[i], i, this)) {\n      return false;\n    }\n  }\n  return true;\n};",
    "with-thisArg":
      "Array.prototype.myEvery = function(callback, thisArg) {\n  for (let i = 0; i < this.length; i++) {\n    if (!callback.call(thisArg, this[i], i, this)) {\n      return false;\n    }\n  }\n  return true;\n};",
    "edge-cases":
      "Array.prototype.myEvery = function(callback, thisArg) {\n  if (this == null) throw new TypeError('this is null or not defined');\n  if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function');\n  \n  const array = Object(this);\n  const len = array.length >>> 0;\n  \n  for (let i = 0; i < len; i++) {\n    if (i in array && !callback.call(thisArg, array[i], i, array)) {\n      return false;\n    }\n  }\n  \n  return true;\n};",
  },
  explanation: [
    "The every method tests whether all elements in the array pass the test implemented by the provided function.",
    "We implement this by iterating through the array and testing each element with the predicate.",
    "If any element makes the predicate return false, we immediately return false (short-circuiting).",
    "Only if all elements satisfy the predicate do we return true.",
    "Edge cases include handling null this, non-function callbacks, and sparse arrays.",
  ],
  tags: ["array", "polyfill", "test"],
  difficulty: "medium",
  type: "implementation",
};
export default every;
