const findIndex = {
    "title": "Array.prototype.findIndex() Polyfill",
    "description": "Implement a polyfill for the Array.prototype.findIndex() method which returns the index of the first element in the array that satisfies the provided testing function.",
    "category": ["JavaScript", "Polyfill"],
    "requirements": [
      "Should work on all arrays",
      "Should accept a predicate function",
      "Should pass current element, index, and array to predicate",
      "Should return the index of first match or -1"
    ],
    "code": {
      "basic": "Array.prototype.myFindIndex = function(callback) {\n  for (let i = 0; i < this.length; i++) {\n    if (callback(this[i], i, this)) {\n      return i;\n    }\n  }\n  return -1;\n};",
      "with-thisArg": "Array.prototype.myFindIndex = function(callback, thisArg) {\n  for (let i = 0; i < this.length; i++) {\n    if (callback.call(thisArg, this[i], i, this)) {\n      return i;\n    }\n  }\n  return -1;\n};",
      "edge-cases": "Array.prototype.myFindIndex = function(callback, thisArg) {\n  if (this == null) throw new TypeError('this is null or not defined');\n  if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function');\n  \n  const array = Object(this);\n  const len = array.length >>> 0;\n  \n  for (let i = 0; i < len; i++) {\n    if (i in array && callback.call(thisArg, array[i], i, array)) {\n      return i;\n    }\n  }\n  \n  return -1;\n};"
    },
    "explanation": [
      "The findIndex method returns the index of the first element in the array that satisfies the provided testing function.",
      "We implement this similarly to find(), but return the index instead of the element itself.",
      "If no elements satisfy the predicate, we return -1 (not undefined like find()).",
      "This is useful when you need the position of an element rather than the element itself.",
      "Edge cases include handling null this, non-function callbacks, and sparse arrays."
    ],
    "tags": ["array", "polyfill", "search"],
    "difficulty": "medium",
    "type": "implementation"
  }
export default findIndex