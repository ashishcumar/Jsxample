const find = {
    "title": "Array.prototype.find() Polyfill",
    "description": "Implement a polyfill for the Array.prototype.find() method which returns the first element in the array that satisfies the provided testing function.",
    "category": ["JavaScript", "Polyfill"],
    "requirements": [
      "Should work on all arrays",
      "Should accept a predicate function",
      "Should pass current element, index, and array to predicate",
      "Should return the first matching element or undefined"
    ],
    "code": {
      "basic": "Array.prototype.myFind = function(callback) {\n  for (let i = 0; i < this.length; i++) {\n    if (callback(this[i], i, this)) {\n      return this[i];\n    }\n  }\n  return undefined;\n};",
      "with-thisArg": "Array.prototype.myFind = function(callback, thisArg) {\n  for (let i = 0; i < this.length; i++) {\n    if (callback.call(thisArg, this[i], i, this)) {\n      return this[i];\n    }\n  }\n  return undefined;\n};",
      "edge-cases": "Array.prototype.myFind = function(callback, thisArg) {\n  if (this == null) throw new TypeError('this is null or not defined');\n  if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function');\n  \n  const array = Object(this);\n  const len = array.length >>> 0;\n  \n  for (let i = 0; i < len; i++) {\n    if (i in array && callback.call(thisArg, array[i], i, array)) {\n      return array[i];\n    }\n  }\n  \n  return undefined;\n};"
    },
    "explanation": [
      "The find method returns the first element in the array that satisfies the provided testing function.",
      "We implement this by iterating through the array and testing each element with the predicate function.",
      "As soon as we find an element that makes the predicate return true, we return that element.",
      "If no elements satisfy the predicate, we return undefined.",
      "Edge cases include handling null this, non-function callbacks, and sparse arrays."
    ],
    "tags": ["array", "polyfill", "search"],
    "difficulty": "medium",
    "type": "implementation"
  }

export default find