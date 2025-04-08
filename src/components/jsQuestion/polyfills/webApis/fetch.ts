const fetch = {
    "title": "fetch() API Polyfill",
    "description": "Basic polyfill for fetch API using XMLHttpRequest as fallback.",
    "category": ["JavaScript", "Polyfill", "Web API"],
    "requirements": [
      "Should support basic GET/POST requests",
      "Should return Promise",
      "Should support headers",
      "Should handle response types"
    ],
    "code": {
      "basic": "window.fetch = window.fetch || function(input, init) {\n  return new Promise((resolve, reject) => {\n    const xhr = new XMLHttpRequest();\n    \n    xhr.onload = function() {\n      const options = {\n        status: xhr.status,\n        statusText: xhr.statusText,\n        headers: new Headers(xhr.getAllResponseHeaders())\n      };\n      \n      options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL');\n      \n      const body = 'response' in xhr ? xhr.response : xhr.responseText;\n      resolve(new Response(body, options));\n    };\n    \n    xhr.onerror = function() {\n      reject(new TypeError('Network request failed'));\n    };\n    \n    xhr.ontimeout = function() {\n      reject(new TypeError('Network request timed out'));\n    };\n    \n    xhr.open(init.method || 'GET', input, true);\n    \n    if (init.headers) {\n      Object.keys(init.headers).forEach(key => {\n        xhr.setRequestHeader(key, init.headers[key]);\n      });\n    }\n    \n    if (init.credentials === 'include') {\n      xhr.withCredentials = true;\n    }\n    \n    xhr.send(init.body || null);\n  });\n};\n\nfunction Response(body, options) {\n  this.body = body;\n  this.status = options.status;\n  this.ok = this.status >= 200 && this.status < 300;\n  this.statusText = options.statusText;\n  this.headers = options.headers;\n  this.url = options.url || '';\n}\n\nResponse.prototype.json = function() {\n  return Promise.resolve(JSON.parse(this.body));\n};\n\nResponse.prototype.text = function() {\n  return Promise.resolve(this.body);\n};"
    },
    "explanation": [
      "Basic fetch polyfill using XMLHttpRequest",
      "Returns a Promise like native fetch",
      "Supports basic request methods and headers",
      "Handles response types (json, text)",
      "Creates Response object with similar API",
      "Note: This is a simplified version - full polyfill would handle more edge cases"
    ],
    "tags": ["polyfill", "web-api", "ajax"],
    "difficulty": "hard",
    "type": "api-polyfill"
  }
export default fetch