const at = {
    "title": "Array.prototype.at() Polyfill",
    "description": "Implement a polyfill for the Array.prototype.at() method which takes an integer value and returns the item at that index, allowing for positive and negative integers.",
    "category": ["JavaScript", "Polyfill"],
    "requirements": [
      "Should work on all arrays",
      "Should accept an integer index (positive or negative)",
      "Should return the element at that index or undefined",
      "Should handle sparse arrays correctly"
    ],
    "code": {
      "basic": "Array.prototype.myAt = function(index) {\n  if (index >= 0) {\n    return this[index];\n  } else {\n    return this[this.length + index];\n  }\n};",
      "edge-cases": "Array.prototype.myAt = function(index) {\n  if (this == null) throw new TypeError('this is null or not defined');\n  \n  const array = Object(this);\n  const len = array.length >>> 0;\n  \n  const relativeIndex = Math.trunc(index) || 0;\n  const actualIndex = relativeIndex < 0 ? len + relativeIndex : relativeIndex;\n  \n  if (actualIndex < 0 || actualIndex >= len) return undefined;\n  \n  return array[actualIndex];\n};"
    },
    "explanation": [
      "The at method takes an integer value and returns the item at that index, allowing for positive and negative integers.",
      "Negative integers count back from the last item in the array.",
      "We implement this by calculating the actual index - for positive indices it's the same, for negative we add to length.",
      "If the calculated index is out of bounds, we return undefined.",
      "Edge cases include handling non-integer indices, sparse arrays, and type coercion."
    ],
    "tags": ["array", "polyfill", "accessor"],
    "difficulty": "easy",
    "type": "implementation"
  }

export default at