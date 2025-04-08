const entries = {
    "title": "Object.entries() Polyfill",
    "category": ["JavaScript", "Polyfill", "Object Methods"],
    "description": "Implement a polyfill for Object.entries() which returns an array of a given object's own enumerable string-keyed property [key, value] pairs.",
    "requirements": [
      "Should return only own property entries",
      "Should return only enumerable properties",
      "Should return [key, value] pairs",
      "Should handle non-object inputs"
    ],
    "code": {
      "basic": "Object.myEntries = function(obj) {\n  const entries = [];\n  for (const key in obj) {\n    if (obj.hasOwnProperty(key)) {\n      entries.push([key, obj[key]]);\n    }\n  }\n  return entries;\n};",
      "spec-compliant": "Object.myEntries = function(obj) {\n  if (obj == null) throw new TypeError('Cannot convert undefined or null to object');\n  \n  const entries = [];\n  for (const key in Object(obj)) {\n    if (Object.prototype.hasOwnProperty.call(obj, key)) {\n      entries.push([key, obj[key]]);\n    }\n  }\n  return entries;\n};"
    },
    "explanation": [
      "Returns array of [key, value] pairs for object's own properties",
      "Similar to Object.keys() but returns both keys and values",
      "Converts primitive inputs to objects (except null/undefined)",
      "Uses hasOwnProperty check to exclude inherited properties"
    ],
    "tags": ["object", "polyfill", "enumeration"],
    "difficulty": "medium",
    "type": "method-polyfill"
  }

export default entries