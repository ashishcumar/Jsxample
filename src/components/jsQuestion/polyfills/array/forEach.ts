const forEach = {
  title: "Array.prototype.forEach() Polyfill",
  description:
    "Implement a polyfill for the Array.prototype.forEach() method which executes a provided function once for each array element.",
  category: ["JavaScript", "Polyfill"],
  requirements: [
    "Should work on all arrays",
    "Should accept a callback function",
    "Should pass current element, index, and array to callback",
    "Should return undefined",
  ],
  code: {
    basic:
      "Array.prototype.myForEach = function(callback) {\n  for (let i = 0; i < this.length; i++) {\n    callback(this[i], i, this);\n  }\n};",
    "with-thisArg":
      "Array.prototype.myForEach = function(callback, thisArg) {\n  for (let i = 0; i < this.length; i++) {\n    callback.call(thisArg, this[i], i, this);\n  }\n};",
    "edge-cases":
      "Array.prototype.myForEach = function(callback, thisArg) {\n  if (this == null) throw new TypeError('this is null or not defined');\n  if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function');\n  \n  const array = Object(this);\n  const len = array.length >>> 0;\n  \n  for (let i = 0; i < len; i++) {\n    if (i in array) {\n      callback.call(thisArg, array[i], i, array);\n    }\n  }\n};",
  },
  explanation: [
    "The forEach method executes a provided function once for each array element.",
    "We implement this by iterating through each element of the array and calling the callback for each one.",
    "The callback receives the current element, its index, and the array itself as arguments.",
    "Unlike map(), forEach() always returns undefined and is generally used for side effects.",
    "We handle edge cases like null this, non-function callbacks, and sparse arrays.",
  ],
  tags: ["array", "polyfill", "iteration"],
  difficulty: "medium",
  type: "implementation",
};

export default forEach;
