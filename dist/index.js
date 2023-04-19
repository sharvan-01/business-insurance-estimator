"use strict";
(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // bin/live-reload.js
  var init_live_reload = __esm({
    "bin/live-reload.js"() {
      "use strict";
    }
  });

  // node_modules/.pnpm/axios@1.3.5/node_modules/axios/lib/helpers/bind.js
  function bind(fn, thisArg) {
    return function wrap() {
      return fn.apply(thisArg, arguments);
    };
  }
  var init_bind = __esm({
    "node_modules/.pnpm/axios@1.3.5/node_modules/axios/lib/helpers/bind.js"() {
      "use strict";
      init_live_reload();
    }
  });

  // node_modules/.pnpm/axios@1.3.5/node_modules/axios/lib/utils.js
  function isBuffer(val) {
    return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && isFunction(val.constructor.isBuffer) && val.constructor.isBuffer(val);
  }
  function isArrayBufferView(val) {
    let result;
    if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) {
      result = ArrayBuffer.isView(val);
    } else {
      result = val && val.buffer && isArrayBuffer(val.buffer);
    }
    return result;
  }
  function forEach(obj, fn, { allOwnKeys = false } = {}) {
    if (obj === null || typeof obj === "undefined") {
      return;
    }
    let i;
    let l;
    if (typeof obj !== "object") {
      obj = [obj];
    }
    if (isArray(obj)) {
      for (i = 0, l = obj.length; i < l; i++) {
        fn.call(null, obj[i], i, obj);
      }
    } else {
      const keys = allOwnKeys ? Object.getOwnPropertyNames(obj) : Object.keys(obj);
      const len = keys.length;
      let key;
      for (i = 0; i < len; i++) {
        key = keys[i];
        fn.call(null, obj[key], key, obj);
      }
    }
  }
  function findKey(obj, key) {
    key = key.toLowerCase();
    const keys = Object.keys(obj);
    let i = keys.length;
    let _key;
    while (i-- > 0) {
      _key = keys[i];
      if (key === _key.toLowerCase()) {
        return _key;
      }
    }
    return null;
  }
  function merge() {
    const { caseless } = isContextDefined(this) && this || {};
    const result = {};
    const assignValue = (val, key) => {
      const targetKey = caseless && findKey(result, key) || key;
      if (isPlainObject(result[targetKey]) && isPlainObject(val)) {
        result[targetKey] = merge(result[targetKey], val);
      } else if (isPlainObject(val)) {
        result[targetKey] = merge({}, val);
      } else if (isArray(val)) {
        result[targetKey] = val.slice();
      } else {
        result[targetKey] = val;
      }
    };
    for (let i = 0, l = arguments.length; i < l; i++) {
      arguments[i] && forEach(arguments[i], assignValue);
    }
    return result;
  }
  function isSpecCompliantForm(thing) {
    return !!(thing && isFunction(thing.append) && thing[Symbol.toStringTag] === "FormData" && thing[Symbol.iterator]);
  }
  var toString, getPrototypeOf, kindOf, kindOfTest, typeOfTest, isArray, isUndefined, isArrayBuffer, isString, isFunction, isNumber, isObject, isBoolean, isPlainObject, isDate, isFile, isBlob, isFileList, isStream, isFormData, isURLSearchParams, trim, _global, isContextDefined, extend, stripBOM, inherits, toFlatObject, endsWith, toArray, isTypedArray, forEachEntry, matchAll, isHTMLForm, toCamelCase, hasOwnProperty, isRegExp, reduceDescriptors, freezeMethods, toObjectSet, noop, toFiniteNumber, ALPHA, DIGIT, ALPHABET, generateString, toJSONObject, utils_default;
  var init_utils = __esm({
    "node_modules/.pnpm/axios@1.3.5/node_modules/axios/lib/utils.js"() {
      "use strict";
      init_live_reload();
      init_bind();
      ({ toString } = Object.prototype);
      ({ getPrototypeOf } = Object);
      kindOf = ((cache) => (thing) => {
        const str = toString.call(thing);
        return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
      })(/* @__PURE__ */ Object.create(null));
      kindOfTest = (type) => {
        type = type.toLowerCase();
        return (thing) => kindOf(thing) === type;
      };
      typeOfTest = (type) => (thing) => typeof thing === type;
      ({ isArray } = Array);
      isUndefined = typeOfTest("undefined");
      isArrayBuffer = kindOfTest("ArrayBuffer");
      isString = typeOfTest("string");
      isFunction = typeOfTest("function");
      isNumber = typeOfTest("number");
      isObject = (thing) => thing !== null && typeof thing === "object";
      isBoolean = (thing) => thing === true || thing === false;
      isPlainObject = (val) => {
        if (kindOf(val) !== "object") {
          return false;
        }
        const prototype3 = getPrototypeOf(val);
        return (prototype3 === null || prototype3 === Object.prototype || Object.getPrototypeOf(prototype3) === null) && !(Symbol.toStringTag in val) && !(Symbol.iterator in val);
      };
      isDate = kindOfTest("Date");
      isFile = kindOfTest("File");
      isBlob = kindOfTest("Blob");
      isFileList = kindOfTest("FileList");
      isStream = (val) => isObject(val) && isFunction(val.pipe);
      isFormData = (thing) => {
        const pattern = "[object FormData]";
        return thing && (typeof FormData === "function" && thing instanceof FormData || toString.call(thing) === pattern || isFunction(thing.toString) && thing.toString() === pattern);
      };
      isURLSearchParams = kindOfTest("URLSearchParams");
      trim = (str) => str.trim ? str.trim() : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
      _global = (() => {
        if (typeof globalThis !== "undefined")
          return globalThis;
        return typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : global;
      })();
      isContextDefined = (context) => !isUndefined(context) && context !== _global;
      extend = (a, b, thisArg, { allOwnKeys } = {}) => {
        forEach(b, (val, key) => {
          if (thisArg && isFunction(val)) {
            a[key] = bind(val, thisArg);
          } else {
            a[key] = val;
          }
        }, { allOwnKeys });
        return a;
      };
      stripBOM = (content) => {
        if (content.charCodeAt(0) === 65279) {
          content = content.slice(1);
        }
        return content;
      };
      inherits = (constructor, superConstructor, props, descriptors2) => {
        constructor.prototype = Object.create(superConstructor.prototype, descriptors2);
        constructor.prototype.constructor = constructor;
        Object.defineProperty(constructor, "super", {
          value: superConstructor.prototype
        });
        props && Object.assign(constructor.prototype, props);
      };
      toFlatObject = (sourceObj, destObj, filter2, propFilter) => {
        let props;
        let i;
        let prop;
        const merged = {};
        destObj = destObj || {};
        if (sourceObj == null)
          return destObj;
        do {
          props = Object.getOwnPropertyNames(sourceObj);
          i = props.length;
          while (i-- > 0) {
            prop = props[i];
            if ((!propFilter || propFilter(prop, sourceObj, destObj)) && !merged[prop]) {
              destObj[prop] = sourceObj[prop];
              merged[prop] = true;
            }
          }
          sourceObj = filter2 !== false && getPrototypeOf(sourceObj);
        } while (sourceObj && (!filter2 || filter2(sourceObj, destObj)) && sourceObj !== Object.prototype);
        return destObj;
      };
      endsWith = (str, searchString, position) => {
        str = String(str);
        if (position === void 0 || position > str.length) {
          position = str.length;
        }
        position -= searchString.length;
        const lastIndex = str.indexOf(searchString, position);
        return lastIndex !== -1 && lastIndex === position;
      };
      toArray = (thing) => {
        if (!thing)
          return null;
        if (isArray(thing))
          return thing;
        let i = thing.length;
        if (!isNumber(i))
          return null;
        const arr = new Array(i);
        while (i-- > 0) {
          arr[i] = thing[i];
        }
        return arr;
      };
      isTypedArray = ((TypedArray) => {
        return (thing) => {
          return TypedArray && thing instanceof TypedArray;
        };
      })(typeof Uint8Array !== "undefined" && getPrototypeOf(Uint8Array));
      forEachEntry = (obj, fn) => {
        const generator = obj && obj[Symbol.iterator];
        const iterator = generator.call(obj);
        let result;
        while ((result = iterator.next()) && !result.done) {
          const pair = result.value;
          fn.call(obj, pair[0], pair[1]);
        }
      };
      matchAll = (regExp, str) => {
        let matches;
        const arr = [];
        while ((matches = regExp.exec(str)) !== null) {
          arr.push(matches);
        }
        return arr;
      };
      isHTMLForm = kindOfTest("HTMLFormElement");
      toCamelCase = (str) => {
        return str.toLowerCase().replace(
          /[-_\s]([a-z\d])(\w*)/g,
          function replacer(m, p1, p2) {
            return p1.toUpperCase() + p2;
          }
        );
      };
      hasOwnProperty = (({ hasOwnProperty: hasOwnProperty2 }) => (obj, prop) => hasOwnProperty2.call(obj, prop))(Object.prototype);
      isRegExp = kindOfTest("RegExp");
      reduceDescriptors = (obj, reducer) => {
        const descriptors2 = Object.getOwnPropertyDescriptors(obj);
        const reducedDescriptors = {};
        forEach(descriptors2, (descriptor, name) => {
          if (reducer(descriptor, name, obj) !== false) {
            reducedDescriptors[name] = descriptor;
          }
        });
        Object.defineProperties(obj, reducedDescriptors);
      };
      freezeMethods = (obj) => {
        reduceDescriptors(obj, (descriptor, name) => {
          if (isFunction(obj) && ["arguments", "caller", "callee"].indexOf(name) !== -1) {
            return false;
          }
          const value = obj[name];
          if (!isFunction(value))
            return;
          descriptor.enumerable = false;
          if ("writable" in descriptor) {
            descriptor.writable = false;
            return;
          }
          if (!descriptor.set) {
            descriptor.set = () => {
              throw Error("Can not rewrite read-only method '" + name + "'");
            };
          }
        });
      };
      toObjectSet = (arrayOrString, delimiter) => {
        const obj = {};
        const define = (arr) => {
          arr.forEach((value) => {
            obj[value] = true;
          });
        };
        isArray(arrayOrString) ? define(arrayOrString) : define(String(arrayOrString).split(delimiter));
        return obj;
      };
      noop = () => {
      };
      toFiniteNumber = (value, defaultValue) => {
        value = +value;
        return Number.isFinite(value) ? value : defaultValue;
      };
      ALPHA = "abcdefghijklmnopqrstuvwxyz";
      DIGIT = "0123456789";
      ALPHABET = {
        DIGIT,
        ALPHA,
        ALPHA_DIGIT: ALPHA + ALPHA.toUpperCase() + DIGIT
      };
      generateString = (size = 16, alphabet = ALPHABET.ALPHA_DIGIT) => {
        let str = "";
        const { length } = alphabet;
        while (size--) {
          str += alphabet[Math.random() * length | 0];
        }
        return str;
      };
      toJSONObject = (obj) => {
        const stack = new Array(10);
        const visit = (source, i) => {
          if (isObject(source)) {
            if (stack.indexOf(source) >= 0) {
              return;
            }
            if (!("toJSON" in source)) {
              stack[i] = source;
              const target = isArray(source) ? [] : {};
              forEach(source, (value, key) => {
                const reducedValue = visit(value, i + 1);
                !isUndefined(reducedValue) && (target[key] = reducedValue);
              });
              stack[i] = void 0;
              return target;
            }
          }
          return source;
        };
        return visit(obj, 0);
      };
      utils_default = {
        isArray,
        isArrayBuffer,
        isBuffer,
        isFormData,
        isArrayBufferView,
        isString,
        isNumber,
        isBoolean,
        isObject,
        isPlainObject,
        isUndefined,
        isDate,
        isFile,
        isBlob,
        isRegExp,
        isFunction,
        isStream,
        isURLSearchParams,
        isTypedArray,
        isFileList,
        forEach,
        merge,
        extend,
        trim,
        stripBOM,
        inherits,
        toFlatObject,
        kindOf,
        kindOfTest,
        endsWith,
        toArray,
        forEachEntry,
        matchAll,
        isHTMLForm,
        hasOwnProperty,
        hasOwnProp: hasOwnProperty,
        // an alias to avoid ESLint no-prototype-builtins detection
        reduceDescriptors,
        freezeMethods,
        toObjectSet,
        toCamelCase,
        noop,
        toFiniteNumber,
        findKey,
        global: _global,
        isContextDefined,
        ALPHABET,
        generateString,
        isSpecCompliantForm,
        toJSONObject
      };
    }
  });

  // node_modules/.pnpm/axios@1.3.5/node_modules/axios/lib/core/AxiosError.js
  function AxiosError(message, code, config, request, response) {
    Error.call(this);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    } else {
      this.stack = new Error().stack;
    }
    this.message = message;
    this.name = "AxiosError";
    code && (this.code = code);
    config && (this.config = config);
    request && (this.request = request);
    response && (this.response = response);
  }
  var prototype, descriptors, AxiosError_default;
  var init_AxiosError = __esm({
    "node_modules/.pnpm/axios@1.3.5/node_modules/axios/lib/core/AxiosError.js"() {
      "use strict";
      init_live_reload();
      init_utils();
      utils_default.inherits(AxiosError, Error, {
        toJSON: function toJSON() {
          return {
            // Standard
            message: this.message,
            name: this.name,
            // Microsoft
            description: this.description,
            number: this.number,
            // Mozilla
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            // Axios
            config: utils_default.toJSONObject(this.config),
            code: this.code,
            status: this.response && this.response.status ? this.response.status : null
          };
        }
      });
      prototype = AxiosError.prototype;
      descriptors = {};
      [
        "ERR_BAD_OPTION_VALUE",
        "ERR_BAD_OPTION",
        "ECONNABORTED",
        "ETIMEDOUT",
        "ERR_NETWORK",
        "ERR_FR_TOO_MANY_REDIRECTS",
        "ERR_DEPRECATED",
        "ERR_BAD_RESPONSE",
        "ERR_BAD_REQUEST",
        "ERR_CANCELED",
        "ERR_NOT_SUPPORT",
        "ERR_INVALID_URL"
        // eslint-disable-next-line func-names
      ].forEach((code) => {
        descriptors[code] = { value: code };
      });
      Object.defineProperties(AxiosError, descriptors);
      Object.defineProperty(prototype, "isAxiosError", { value: true });
      AxiosError.from = (error, code, config, request, response, customProps) => {
        const axiosError = Object.create(prototype);
        utils_default.toFlatObject(error, axiosError, function filter2(obj) {
          return obj !== Error.prototype;
        }, (prop) => {
          return prop !== "isAxiosError";
        });
        AxiosError.call(axiosError, error.message, code, config, request, response);
        axiosError.cause = error;
        axiosError.name = error.name;
        customProps && Object.assign(axiosError, customProps);
        return axiosError;
      };
      AxiosError_default = AxiosError;
    }
  });

  // node_modules/.pnpm/axios@1.3.5/node_modules/axios/lib/helpers/null.js
  var null_default;
  var init_null = __esm({
    "node_modules/.pnpm/axios@1.3.5/node_modules/axios/lib/helpers/null.js"() {
      init_live_reload();
      null_default = null;
    }
  });

  // node_modules/.pnpm/axios@1.3.5/node_modules/axios/lib/helpers/toFormData.js
  function isVisitable(thing) {
    return utils_default.isPlainObject(thing) || utils_default.isArray(thing);
  }
  function removeBrackets(key) {
    return utils_default.endsWith(key, "[]") ? key.slice(0, -2) : key;
  }
  function renderKey(path, key, dots) {
    if (!path)
      return key;
    return path.concat(key).map(function each(token, i) {
      token = removeBrackets(token);
      return !dots && i ? "[" + token + "]" : token;
    }).join(dots ? "." : "");
  }
  function isFlatArray(arr) {
    return utils_default.isArray(arr) && !arr.some(isVisitable);
  }
  function toFormData(obj, formData, options) {
    if (!utils_default.isObject(obj)) {
      throw new TypeError("target must be an object");
    }
    formData = formData || new (null_default || FormData)();
    options = utils_default.toFlatObject(options, {
      metaTokens: true,
      dots: false,
      indexes: false
    }, false, function defined(option, source) {
      return !utils_default.isUndefined(source[option]);
    });
    const metaTokens = options.metaTokens;
    const visitor = options.visitor || defaultVisitor;
    const dots = options.dots;
    const indexes = options.indexes;
    const _Blob = options.Blob || typeof Blob !== "undefined" && Blob;
    const useBlob = _Blob && utils_default.isSpecCompliantForm(formData);
    if (!utils_default.isFunction(visitor)) {
      throw new TypeError("visitor must be a function");
    }
    function convertValue(value) {
      if (value === null)
        return "";
      if (utils_default.isDate(value)) {
        return value.toISOString();
      }
      if (!useBlob && utils_default.isBlob(value)) {
        throw new AxiosError_default("Blob is not supported. Use a Buffer instead.");
      }
      if (utils_default.isArrayBuffer(value) || utils_default.isTypedArray(value)) {
        return useBlob && typeof Blob === "function" ? new Blob([value]) : Buffer.from(value);
      }
      return value;
    }
    function defaultVisitor(value, key, path) {
      let arr = value;
      if (value && !path && typeof value === "object") {
        if (utils_default.endsWith(key, "{}")) {
          key = metaTokens ? key : key.slice(0, -2);
          value = JSON.stringify(value);
        } else if (utils_default.isArray(value) && isFlatArray(value) || (utils_default.isFileList(value) || utils_default.endsWith(key, "[]")) && (arr = utils_default.toArray(value))) {
          key = removeBrackets(key);
          arr.forEach(function each(el, index) {
            !(utils_default.isUndefined(el) || el === null) && formData.append(
              // eslint-disable-next-line no-nested-ternary
              indexes === true ? renderKey([key], index, dots) : indexes === null ? key : key + "[]",
              convertValue(el)
            );
          });
          return false;
        }
      }
      if (isVisitable(value)) {
        return true;
      }
      formData.append(renderKey(path, key, dots), convertValue(value));
      return false;
    }
    const stack = [];
    const exposedHelpers = Object.assign(predicates, {
      defaultVisitor,
      convertValue,
      isVisitable
    });
    function build(value, path) {
      if (utils_default.isUndefined(value))
        return;
      if (stack.indexOf(value) !== -1) {
        throw Error("Circular reference detected in " + path.join("."));
      }
      stack.push(value);
      utils_default.forEach(value, function each(el, key) {
        const result = !(utils_default.isUndefined(el) || el === null) && visitor.call(
          formData,
          el,
          utils_default.isString(key) ? key.trim() : key,
          path,
          exposedHelpers
        );
        if (result === true) {
          build(el, path ? path.concat(key) : [key]);
        }
      });
      stack.pop();
    }
    if (!utils_default.isObject(obj)) {
      throw new TypeError("data must be an object");
    }
    build(obj);
    return formData;
  }
  var predicates, toFormData_default;
  var init_toFormData = __esm({
    "node_modules/.pnpm/axios@1.3.5/node_modules/axios/lib/helpers/toFormData.js"() {
      "use strict";
      init_live_reload();
      init_utils();
      init_AxiosError();
      init_null();
      predicates = utils_default.toFlatObject(utils_default, {}, null, function filter(prop) {
        return /^is[A-Z]/.test(prop);
      });
      toFormData_default = toFormData;
    }
  });

  // node_modules/.pnpm/axios@1.3.5/node_modules/axios/lib/helpers/AxiosURLSearchParams.js
  function encode(str) {
    const charMap = {
      "!": "%21",
      "'": "%27",
      "(": "%28",
      ")": "%29",
      "~": "%7E",
      "%20": "+",
      "%00": "\0"
    };
    return encodeURIComponent(str).replace(/[!'()~]|%20|%00/g, function replacer(match) {
      return charMap[match];
    });
  }
  function AxiosURLSearchParams(params, options) {
    this._pairs = [];
    params && toFormData_default(params, this, options);
  }
  var prototype2, AxiosURLSearchParams_default;
  var init_AxiosURLSearchParams = __esm({
    "node_modules/.pnpm/axios@1.3.5/node_modules/axios/lib/helpers/AxiosURLSearchParams.js"() {
      "use strict";
      init_live_reload();
      init_toFormData();
      prototype2 = AxiosURLSearchParams.prototype;
      prototype2.append = function append(name, value) {
        this._pairs.push([name, value]);
      };
      prototype2.toString = function toString2(encoder) {
        const _encode = encoder ? function(value) {
          return encoder.call(this, value, encode);
        } : encode;
        return this._pairs.map(function each(pair) {
          return _encode(pair[0]) + "=" + _encode(pair[1]);
        }, "").join("&");
      };
      AxiosURLSearchParams_default = AxiosURLSearchParams;
    }
  });

  // node_modules/.pnpm/axios@1.3.5/node_modules/axios/lib/helpers/buildURL.js
  function encode2(val) {
    return encodeURIComponent(val).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
  }
  function buildURL(url, params, options) {
    if (!params) {
      return url;
    }
    const _encode = options && options.encode || encode2;
    const serializeFn = options && options.serialize;
    let serializedParams;
    if (serializeFn) {
      serializedParams = serializeFn(params, options);
    } else {
      serializedParams = utils_default.isURLSearchParams(params) ? params.toString() : new AxiosURLSearchParams_default(params, options).toString(_encode);
    }
    if (serializedParams) {
      const hashmarkIndex = url.indexOf("#");
      if (hashmarkIndex !== -1) {
        url = url.slice(0, hashmarkIndex);
      }
      url += (url.indexOf("?") === -1 ? "?" : "&") + serializedParams;
    }
    return url;
  }
  var init_buildURL = __esm({
    "node_modules/.pnpm/axios@1.3.5/node_modules/axios/lib/helpers/buildURL.js"() {
      "use strict";
      init_live_reload();
      init_utils();
      init_AxiosURLSearchParams();
    }
  });

  // node_modules/.pnpm/axios@1.3.5/node_modules/axios/lib/core/InterceptorManager.js
  var InterceptorManager, InterceptorManager_default;
  var init_InterceptorManager = __esm({
    "node_modules/.pnpm/axios@1.3.5/node_modules/axios/lib/core/InterceptorManager.js"() {
      "use strict";
      init_live_reload();
      init_utils();
      InterceptorManager = class {
        constructor() {
          this.handlers = [];
        }
        /**
         * Add a new interceptor to the stack
         *
         * @param {Function} fulfilled The function to handle `then` for a `Promise`
         * @param {Function} rejected The function to handle `reject` for a `Promise`
         *
         * @return {Number} An ID used to remove interceptor later
         */
        use(fulfilled, rejected, options) {
          this.handlers.push({
            fulfilled,
            rejected,
            synchronous: options ? options.synchronous : false,
            runWhen: options ? options.runWhen : null
          });
          return this.handlers.length - 1;
        }
        /**
         * Remove an interceptor from the stack
         *
         * @param {Number} id The ID that was returned by `use`
         *
         * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
         */
        eject(id) {
          if (this.handlers[id]) {
            this.handlers[id] = null;
          }
        }
        /**
         * Clear all interceptors from the stack
         *
         * @returns {void}
         */
        clear() {
          if (this.handlers) {
            this.handlers = [];
          }
        }
        /**
         * Iterate over all the registered interceptors
         *
         * This method is particularly useful for skipping over any
         * interceptors that may have become `null` calling `eject`.
         *
         * @param {Function} fn The function to call for each interceptor
         *
         * @returns {void}
         */
        forEach(fn) {
          utils_default.forEach(this.handlers, function forEachHandler(h) {
            if (h !== null) {
              fn(h);
            }
          });
        }
      };
      InterceptorManager_default = InterceptorManager;
    }
  });

  // node_modules/.pnpm/axios@1.3.5/node_modules/axios/lib/defaults/transitional.js
  var transitional_default;
  var init_transitional = __esm({
    "node_modules/.pnpm/axios@1.3.5/node_modules/axios/lib/defaults/transitional.js"() {
      "use strict";
      init_live_reload();
      transitional_default = {
        silentJSONParsing: true,
        forcedJSONParsing: true,
        clarifyTimeoutError: false
      };
    }
  });

  // node_modules/.pnpm/axios@1.3.5/node_modules/axios/lib/platform/browser/classes/URLSearchParams.js
  var URLSearchParams_default;
  var init_URLSearchParams = __esm({
    "node_modules/.pnpm/axios@1.3.5/node_modules/axios/lib/platform/browser/classes/URLSearchParams.js"() {
      "use strict";
      init_live_reload();
      init_AxiosURLSearchParams();
      URLSearchParams_default = typeof URLSearchParams !== "undefined" ? URLSearchParams : AxiosURLSearchParams_default;
    }
  });

  // node_modules/.pnpm/axios@1.3.5/node_modules/axios/lib/platform/browser/classes/FormData.js
  var FormData_default;
  var init_FormData = __esm({
    "node_modules/.pnpm/axios@1.3.5/node_modules/axios/lib/platform/browser/classes/FormData.js"() {
      "use strict";
      init_live_reload();
      FormData_default = typeof FormData !== "undefined" ? FormData : null;
    }
  });

  // node_modules/.pnpm/axios@1.3.5/node_modules/axios/lib/platform/browser/classes/Blob.js
  var Blob_default;
  var init_Blob = __esm({
    "node_modules/.pnpm/axios@1.3.5/node_modules/axios/lib/platform/browser/classes/Blob.js"() {
      "use strict";
      init_live_reload();
      Blob_default = typeof Blob !== "undefined" ? Blob : null;
    }
  });

  // node_modules/.pnpm/axios@1.3.5/node_modules/axios/lib/platform/browser/index.js
  var isStandardBrowserEnv, isStandardBrowserWebWorkerEnv, browser_default;
  var init_browser = __esm({
    "node_modules/.pnpm/axios@1.3.5/node_modules/axios/lib/platform/browser/index.js"() {
      init_live_reload();
      init_URLSearchParams();
      init_FormData();
      init_Blob();
      isStandardBrowserEnv = (() => {
        let product;
        if (typeof navigator !== "undefined" && ((product = navigator.product) === "ReactNative" || product === "NativeScript" || product === "NS")) {
          return false;
        }
        return typeof window !== "undefined" && typeof document !== "undefined";
      })();
      isStandardBrowserWebWorkerEnv = (() => {
        return typeof WorkerGlobalScope !== "undefined" && // eslint-disable-next-line no-undef
        self instanceof WorkerGlobalScope && typeof self.importScripts === "function";
      })();
      browser_default = {
        isBrowser: true,
        classes: {
          URLSearchParams: URLSearchParams_default,
          FormData: FormData_default,
          Blob: Blob_default
        },
        isStandardBrowserEnv,
        isStandardBrowserWebWorkerEnv,
        protocols: ["http", "https", "file", "blob", "url", "data"]
      };
    }
  });

  // node_modules/.pnpm/axios@1.3.5/node_modules/axios/lib/platform/index.js
  var init_platform = __esm({
    "node_modules/.pnpm/axios@1.3.5/node_modules/axios/lib/platform/index.js"() {
      init_live_reload();
      init_browser();
    }
  });

  // node_modules/.pnpm/axios@1.3.5/node_modules/axios/lib/helpers/toURLEncodedForm.js
  function toURLEncodedForm(data2, options) {
    return toFormData_default(data2, new browser_default.classes.URLSearchParams(), Object.assign({
      visitor: function(value, key, path, helpers) {
        if (browser_default.isNode && utils_default.isBuffer(value)) {
          this.append(key, value.toString("base64"));
          return false;
        }
        return helpers.defaultVisitor.apply(this, arguments);
      }
    }, options));
  }
  var init_toURLEncodedForm = __esm({
    "node_modules/.pnpm/axios@1.3.5/node_modules/axios/lib/helpers/toURLEncodedForm.js"() {
      "use strict";
      init_live_reload();
      init_utils();
      init_toFormData();
      init_platform();
    }
  });

  // node_modules/.pnpm/axios@1.3.5/node_modules/axios/lib/helpers/formDataToJSON.js
  function parsePropPath(name) {
    return utils_default.matchAll(/\w+|\[(\w*)]/g, name).map((match) => {
      return match[0] === "[]" ? "" : match[1] || match[0];
    });
  }
  function arrayToObject(arr) {
    const obj = {};
    const keys = Object.keys(arr);
    let i;
    const len = keys.length;
    let key;
    for (i = 0; i < len; i++) {
      key = keys[i];
      obj[key] = arr[key];
    }
    return obj;
  }
  function formDataToJSON(formData) {
    function buildPath(path, value, target, index) {
      let name = path[index++];
      const isNumericKey = Number.isFinite(+name);
      const isLast = index >= path.length;
      name = !name && utils_default.isArray(target) ? target.length : name;
      if (isLast) {
        if (utils_default.hasOwnProp(target, name)) {
          target[name] = [target[name], value];
        } else {
          target[name] = value;
        }
        return !isNumericKey;
      }
      if (!target[name] || !utils_default.isObject(target[name])) {
        target[name] = [];
      }
      const result = buildPath(path, value, target[name], index);
      if (result && utils_default.isArray(target[name])) {
        target[name] = arrayToObject(target[name]);
      }
      return !isNumericKey;
    }
    if (utils_default.isFormData(formData) && utils_default.isFunction(formData.entries)) {
      const obj = {};
      utils_default.forEachEntry(formData, (name, value) => {
        buildPath(parsePropPath(name), value, obj, 0);
      });
      return obj;
    }
    return null;
  }
  var formDataToJSON_default;
  var init_formDataToJSON = __esm({
    "node_modules/.pnpm/axios@1.3.5/node_modules/axios/lib/helpers/formDataToJSON.js"() {
      "use strict";
      init_live_reload();
      init_utils();
      formDataToJSON_default = formDataToJSON;
    }
  });

  // node_modules/.pnpm/axios@1.3.5/node_modules/axios/lib/defaults/index.js
  function stringifySafely(rawValue, parser, encoder) {
    if (utils_default.isString(rawValue)) {
      try {
        (parser || JSON.parse)(rawValue);
        return utils_default.trim(rawValue);
      } catch (e) {
        if (e.name !== "SyntaxError") {
          throw e;
        }
      }
    }
    return (encoder || JSON.stringify)(rawValue);
  }
  var DEFAULT_CONTENT_TYPE, defaults, defaults_default;
  var init_defaults = __esm({
    "node_modules/.pnpm/axios@1.3.5/node_modules/axios/lib/defaults/index.js"() {
      "use strict";
      init_live_reload();
      init_utils();
      init_AxiosError();
      init_transitional();
      init_toFormData();
      init_toURLEncodedForm();
      init_platform();
      init_formDataToJSON();
      DEFAULT_CONTENT_TYPE = {
        "Content-Type": void 0
      };
      defaults = {
        transitional: transitional_default,
        adapter: ["xhr", "http"],
        transformRequest: [function transformRequest(data2, headers) {
          const contentType = headers.getContentType() || "";
          const hasJSONContentType = contentType.indexOf("application/json") > -1;
          const isObjectPayload = utils_default.isObject(data2);
          if (isObjectPayload && utils_default.isHTMLForm(data2)) {
            data2 = new FormData(data2);
          }
          const isFormData2 = utils_default.isFormData(data2);
          if (isFormData2) {
            if (!hasJSONContentType) {
              return data2;
            }
            return hasJSONContentType ? JSON.stringify(formDataToJSON_default(data2)) : data2;
          }
          if (utils_default.isArrayBuffer(data2) || utils_default.isBuffer(data2) || utils_default.isStream(data2) || utils_default.isFile(data2) || utils_default.isBlob(data2)) {
            return data2;
          }
          if (utils_default.isArrayBufferView(data2)) {
            return data2.buffer;
          }
          if (utils_default.isURLSearchParams(data2)) {
            headers.setContentType("application/x-www-form-urlencoded;charset=utf-8", false);
            return data2.toString();
          }
          let isFileList2;
          if (isObjectPayload) {
            if (contentType.indexOf("application/x-www-form-urlencoded") > -1) {
              return toURLEncodedForm(data2, this.formSerializer).toString();
            }
            if ((isFileList2 = utils_default.isFileList(data2)) || contentType.indexOf("multipart/form-data") > -1) {
              const _FormData = this.env && this.env.FormData;
              return toFormData_default(
                isFileList2 ? { "files[]": data2 } : data2,
                _FormData && new _FormData(),
                this.formSerializer
              );
            }
          }
          if (isObjectPayload || hasJSONContentType) {
            headers.setContentType("application/json", false);
            return stringifySafely(data2);
          }
          return data2;
        }],
        transformResponse: [function transformResponse(data2) {
          const transitional2 = this.transitional || defaults.transitional;
          const forcedJSONParsing = transitional2 && transitional2.forcedJSONParsing;
          const JSONRequested = this.responseType === "json";
          if (data2 && utils_default.isString(data2) && (forcedJSONParsing && !this.responseType || JSONRequested)) {
            const silentJSONParsing = transitional2 && transitional2.silentJSONParsing;
            const strictJSONParsing = !silentJSONParsing && JSONRequested;
            try {
              return JSON.parse(data2);
            } catch (e) {
              if (strictJSONParsing) {
                if (e.name === "SyntaxError") {
                  throw AxiosError_default.from(e, AxiosError_default.ERR_BAD_RESPONSE, this, null, this.response);
                }
                throw e;
              }
            }
          }
          return data2;
        }],
        /**
         * A timeout in milliseconds to abort a request. If set to 0 (default) a
         * timeout is not created.
         */
        timeout: 0,
        xsrfCookieName: "XSRF-TOKEN",
        xsrfHeaderName: "X-XSRF-TOKEN",
        maxContentLength: -1,
        maxBodyLength: -1,
        env: {
          FormData: browser_default.classes.FormData,
          Blob: browser_default.classes.Blob
        },
        validateStatus: function validateStatus(status) {
          return status >= 200 && status < 300;
        },
        headers: {
          common: {
            "Accept": "application/json, text/plain, */*"
          }
        }
      };
      utils_default.forEach(["delete", "get", "head"], function forEachMethodNoData(method) {
        defaults.headers[method] = {};
      });
      utils_default.forEach(["post", "put", "patch"], function forEachMethodWithData(method) {
        defaults.headers[method] = utils_default.merge(DEFAULT_CONTENT_TYPE);
      });
      defaults_default = defaults;
    }
  });

  // node_modules/.pnpm/axios@1.3.5/node_modules/axios/lib/helpers/parseHeaders.js
  var ignoreDuplicateOf, parseHeaders_default;
  var init_parseHeaders = __esm({
    "node_modules/.pnpm/axios@1.3.5/node_modules/axios/lib/helpers/parseHeaders.js"() {
      "use strict";
      init_live_reload();
      init_utils();
      ignoreDuplicateOf = utils_default.toObjectSet([
        "age",
        "authorization",
        "content-length",
        "content-type",
        "etag",
        "expires",
        "from",
        "host",
        "if-modified-since",
        "if-unmodified-since",
        "last-modified",
        "location",
        "max-forwards",
        "proxy-authorization",
        "referer",
        "retry-after",
        "user-agent"
      ]);
      parseHeaders_default = (rawHeaders) => {
        const parsed = {};
        let key;
        let val;
        let i;
        rawHeaders && rawHeaders.split("\n").forEach(function parser(line) {
          i = line.indexOf(":");
          key = line.substring(0, i).trim().toLowerCase();
          val = line.substring(i + 1).trim();
          if (!key || parsed[key] && ignoreDuplicateOf[key]) {
            return;
          }
          if (key === "set-cookie") {
            if (parsed[key]) {
              parsed[key].push(val);
            } else {
              parsed[key] = [val];
            }
          } else {
            parsed[key] = parsed[key] ? parsed[key] + ", " + val : val;
          }
        });
        return parsed;
      };
    }
  });

  // node_modules/.pnpm/axios@1.3.5/node_modules/axios/lib/core/AxiosHeaders.js
  function normalizeHeader(header) {
    return header && String(header).trim().toLowerCase();
  }
  function normalizeValue(value) {
    if (value === false || value == null) {
      return value;
    }
    return utils_default.isArray(value) ? value.map(normalizeValue) : String(value);
  }
  function parseTokens(str) {
    const tokens = /* @__PURE__ */ Object.create(null);
    const tokensRE = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let match;
    while (match = tokensRE.exec(str)) {
      tokens[match[1]] = match[2];
    }
    return tokens;
  }
  function matchHeaderValue(context, value, header, filter2, isHeaderNameFilter) {
    if (utils_default.isFunction(filter2)) {
      return filter2.call(this, value, header);
    }
    if (isHeaderNameFilter) {
      value = header;
    }
    if (!utils_default.isString(value))
      return;
    if (utils_default.isString(filter2)) {
      return value.indexOf(filter2) !== -1;
    }
    if (utils_default.isRegExp(filter2)) {
      return filter2.test(value);
    }
  }
  function formatHeader(header) {
    return header.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (w, char, str) => {
      return char.toUpperCase() + str;
    });
  }
  function buildAccessors(obj, header) {
    const accessorName = utils_default.toCamelCase(" " + header);
    ["get", "set", "has"].forEach((methodName) => {
      Object.defineProperty(obj, methodName + accessorName, {
        value: function(arg1, arg2, arg3) {
          return this[methodName].call(this, header, arg1, arg2, arg3);
        },
        configurable: true
      });
    });
  }
  var $internals, isValidHeaderName, AxiosHeaders, AxiosHeaders_default;
  var init_AxiosHeaders = __esm({
    "node_modules/.pnpm/axios@1.3.5/node_modules/axios/lib/core/AxiosHeaders.js"() {
      "use strict";
      init_live_reload();
      init_utils();
      init_parseHeaders();
      $internals = Symbol("internals");
      isValidHeaderName = (str) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(str.trim());
      AxiosHeaders = class {
        constructor(headers) {
          headers && this.set(headers);
        }
        set(header, valueOrRewrite, rewrite) {
          const self2 = this;
          function setHeader(_value, _header, _rewrite) {
            const lHeader = normalizeHeader(_header);
            if (!lHeader) {
              throw new Error("header name must be a non-empty string");
            }
            const key = utils_default.findKey(self2, lHeader);
            if (!key || self2[key] === void 0 || _rewrite === true || _rewrite === void 0 && self2[key] !== false) {
              self2[key || _header] = normalizeValue(_value);
            }
          }
          const setHeaders = (headers, _rewrite) => utils_default.forEach(headers, (_value, _header) => setHeader(_value, _header, _rewrite));
          if (utils_default.isPlainObject(header) || header instanceof this.constructor) {
            setHeaders(header, valueOrRewrite);
          } else if (utils_default.isString(header) && (header = header.trim()) && !isValidHeaderName(header)) {
            setHeaders(parseHeaders_default(header), valueOrRewrite);
          } else {
            header != null && setHeader(valueOrRewrite, header, rewrite);
          }
          return this;
        }
        get(header, parser) {
          header = normalizeHeader(header);
          if (header) {
            const key = utils_default.findKey(this, header);
            if (key) {
              const value = this[key];
              if (!parser) {
                return value;
              }
              if (parser === true) {
                return parseTokens(value);
              }
              if (utils_default.isFunction(parser)) {
                return parser.call(this, value, key);
              }
              if (utils_default.isRegExp(parser)) {
                return parser.exec(value);
              }
              throw new TypeError("parser must be boolean|regexp|function");
            }
          }
        }
        has(header, matcher) {
          header = normalizeHeader(header);
          if (header) {
            const key = utils_default.findKey(this, header);
            return !!(key && this[key] !== void 0 && (!matcher || matchHeaderValue(this, this[key], key, matcher)));
          }
          return false;
        }
        delete(header, matcher) {
          const self2 = this;
          let deleted = false;
          function deleteHeader(_header) {
            _header = normalizeHeader(_header);
            if (_header) {
              const key = utils_default.findKey(self2, _header);
              if (key && (!matcher || matchHeaderValue(self2, self2[key], key, matcher))) {
                delete self2[key];
                deleted = true;
              }
            }
          }
          if (utils_default.isArray(header)) {
            header.forEach(deleteHeader);
          } else {
            deleteHeader(header);
          }
          return deleted;
        }
        clear(matcher) {
          const keys = Object.keys(this);
          let i = keys.length;
          let deleted = false;
          while (i--) {
            const key = keys[i];
            if (!matcher || matchHeaderValue(this, this[key], key, matcher, true)) {
              delete this[key];
              deleted = true;
            }
          }
          return deleted;
        }
        normalize(format) {
          const self2 = this;
          const headers = {};
          utils_default.forEach(this, (value, header) => {
            const key = utils_default.findKey(headers, header);
            if (key) {
              self2[key] = normalizeValue(value);
              delete self2[header];
              return;
            }
            const normalized = format ? formatHeader(header) : String(header).trim();
            if (normalized !== header) {
              delete self2[header];
            }
            self2[normalized] = normalizeValue(value);
            headers[normalized] = true;
          });
          return this;
        }
        concat(...targets) {
          return this.constructor.concat(this, ...targets);
        }
        toJSON(asStrings) {
          const obj = /* @__PURE__ */ Object.create(null);
          utils_default.forEach(this, (value, header) => {
            value != null && value !== false && (obj[header] = asStrings && utils_default.isArray(value) ? value.join(", ") : value);
          });
          return obj;
        }
        [Symbol.iterator]() {
          return Object.entries(this.toJSON())[Symbol.iterator]();
        }
        toString() {
          return Object.entries(this.toJSON()).map(([header, value]) => header + ": " + value).join("\n");
        }
        get [Symbol.toStringTag]() {
          return "AxiosHeaders";
        }
        static from(thing) {
          return thing instanceof this ? thing : new this(thing);
        }
        static concat(first, ...targets) {
          const computed = new this(first);
          targets.forEach((target) => computed.set(target));
          return computed;
        }
        static accessor(header) {
          const internals = this[$internals] = this[$internals] = {
            accessors: {}
          };
          const accessors = internals.accessors;
          const prototype3 = this.prototype;
          function defineAccessor(_header) {
            const lHeader = normalizeHeader(_header);
            if (!accessors[lHeader]) {
              buildAccessors(prototype3, _header);
              accessors[lHeader] = true;
            }
          }
          utils_default.isArray(header) ? header.forEach(defineAccessor) : defineAccessor(header);
          return this;
        }
      };
      AxiosHeaders.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
      utils_default.freezeMethods(AxiosHeaders.prototype);
      utils_default.freezeMethods(AxiosHeaders);
      AxiosHeaders_default = AxiosHeaders;
    }
  });

  // node_modules/.pnpm/axios@1.3.5/node_modules/axios/lib/core/transformData.js
  function transformData(fns, response) {
    const config = this || defaults_default;
    const context = response || config;
    const headers = AxiosHeaders_default.from(context.headers);
    let data2 = context.data;
    utils_default.forEach(fns, function transform(fn) {
      data2 = fn.call(config, data2, headers.normalize(), response ? response.status : void 0);
    });
    headers.normalize();
    return data2;
  }
  var init_transformData = __esm({
    "node_modules/.pnpm/axios@1.3.5/node_modules/axios/lib/core/transformData.js"() {
      "use strict";
      init_live_reload();
      init_utils();
      init_defaults();
      init_AxiosHeaders();
    }
  });

  // node_modules/.pnpm/axios@1.3.5/node_modules/axios/lib/cancel/isCancel.js
  function isCancel(value) {
    return !!(value && value.__CANCEL__);
  }
  var init_isCancel = __esm({
    "node_modules/.pnpm/axios@1.3.5/node_modules/axios/lib/cancel/isCancel.js"() {
      "use strict";
      init_live_reload();
    }
  });

  // node_modules/.pnpm/axios@1.3.5/node_modules/axios/lib/cancel/CanceledError.js
  function CanceledError(message, config, request) {
    AxiosError_default.call(this, message == null ? "canceled" : message, AxiosError_default.ERR_CANCELED, config, request);
    this.name = "CanceledError";
  }
  var CanceledError_default;
  var init_CanceledError = __esm({
    "node_modules/.pnpm/axios@1.3.5/node_modules/axios/lib/cancel/CanceledError.js"() {
      "use strict";
      init_live_reload();
      init_AxiosError();
      init_utils();
      utils_default.inherits(CanceledError, AxiosError_default, {
        __CANCEL__: true
      });
      CanceledError_default = CanceledError;
    }
  });

  // node_modules/.pnpm/axios@1.3.5/node_modules/axios/lib/core/settle.js
  function settle(resolve, reject, response) {
    const validateStatus2 = response.config.validateStatus;
    if (!response.status || !validateStatus2 || validateStatus2(response.status)) {
      resolve(response);
    } else {
      reject(new AxiosError_default(
        "Request failed with status code " + response.status,
        [AxiosError_default.ERR_BAD_REQUEST, AxiosError_default.ERR_BAD_RESPONSE][Math.floor(response.status / 100) - 4],
        response.config,
        response.request,
        response
      ));
    }
  }
  var init_settle = __esm({
    "node_modules/.pnpm/axios@1.3.5/node_modules/axios/lib/core/settle.js"() {
      "use strict";
      init_live_reload();
      init_AxiosError();
    }
  });

  // node_modules/.pnpm/axios@1.3.5/node_modules/axios/lib/helpers/cookies.js
  var cookies_default;
  var init_cookies = __esm({
    "node_modules/.pnpm/axios@1.3.5/node_modules/axios/lib/helpers/cookies.js"() {
      "use strict";
      init_live_reload();
      init_utils();
      init_platform();
      cookies_default = browser_default.isStandardBrowserEnv ? (
        // Standard browser envs support document.cookie
        function standardBrowserEnv() {
          return {
            write: function write(name, value, expires, path, domain, secure) {
              const cookie = [];
              cookie.push(name + "=" + encodeURIComponent(value));
              if (utils_default.isNumber(expires)) {
                cookie.push("expires=" + new Date(expires).toGMTString());
              }
              if (utils_default.isString(path)) {
                cookie.push("path=" + path);
              }
              if (utils_default.isString(domain)) {
                cookie.push("domain=" + domain);
              }
              if (secure === true) {
                cookie.push("secure");
              }
              document.cookie = cookie.join("; ");
            },
            read: function read(name) {
              const match = document.cookie.match(new RegExp("(^|;\\s*)(" + name + ")=([^;]*)"));
              return match ? decodeURIComponent(match[3]) : null;
            },
            remove: function remove(name) {
              this.write(name, "", Date.now() - 864e5);
            }
          };
        }()
      ) : (
        // Non standard browser env (web workers, react-native) lack needed support.
        function nonStandardBrowserEnv() {
          return {
            write: function write() {
            },
            read: function read() {
              return null;
            },
            remove: function remove() {
            }
          };
        }()
      );
    }
  });

  // node_modules/.pnpm/axios@1.3.5/node_modules/axios/lib/helpers/isAbsoluteURL.js
  function isAbsoluteURL(url) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
  }
  var init_isAbsoluteURL = __esm({
    "node_modules/.pnpm/axios@1.3.5/node_modules/axios/lib/helpers/isAbsoluteURL.js"() {
      "use strict";
      init_live_reload();
    }
  });

  // node_modules/.pnpm/axios@1.3.5/node_modules/axios/lib/helpers/combineURLs.js
  function combineURLs(baseURL, relativeURL) {
    return relativeURL ? baseURL.replace(/\/+$/, "") + "/" + relativeURL.replace(/^\/+/, "") : baseURL;
  }
  var init_combineURLs = __esm({
    "node_modules/.pnpm/axios@1.3.5/node_modules/axios/lib/helpers/combineURLs.js"() {
      "use strict";
      init_live_reload();
    }
  });

  // node_modules/.pnpm/axios@1.3.5/node_modules/axios/lib/core/buildFullPath.js
  function buildFullPath(baseURL, requestedURL) {
    if (baseURL && !isAbsoluteURL(requestedURL)) {
      return combineURLs(baseURL, requestedURL);
    }
    return requestedURL;
  }
  var init_buildFullPath = __esm({
    "node_modules/.pnpm/axios@1.3.5/node_modules/axios/lib/core/buildFullPath.js"() {
      "use strict";
      init_live_reload();
      init_isAbsoluteURL();
      init_combineURLs();
    }
  });

  // node_modules/.pnpm/axios@1.3.5/node_modules/axios/lib/helpers/isURLSameOrigin.js
  var isURLSameOrigin_default;
  var init_isURLSameOrigin = __esm({
    "node_modules/.pnpm/axios@1.3.5/node_modules/axios/lib/helpers/isURLSameOrigin.js"() {
      "use strict";
      init_live_reload();
      init_utils();
      init_platform();
      isURLSameOrigin_default = browser_default.isStandardBrowserEnv ? (
        // Standard browser envs have full support of the APIs needed to test
        // whether the request URL is of the same origin as current location.
        function standardBrowserEnv2() {
          const msie = /(msie|trident)/i.test(navigator.userAgent);
          const urlParsingNode = document.createElement("a");
          let originURL;
          function resolveURL(url) {
            let href = url;
            if (msie) {
              urlParsingNode.setAttribute("href", href);
              href = urlParsingNode.href;
            }
            urlParsingNode.setAttribute("href", href);
            return {
              href: urlParsingNode.href,
              protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, "") : "",
              host: urlParsingNode.host,
              search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, "") : "",
              hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, "") : "",
              hostname: urlParsingNode.hostname,
              port: urlParsingNode.port,
              pathname: urlParsingNode.pathname.charAt(0) === "/" ? urlParsingNode.pathname : "/" + urlParsingNode.pathname
            };
          }
          originURL = resolveURL(window.location.href);
          return function isURLSameOrigin(requestURL) {
            const parsed = utils_default.isString(requestURL) ? resolveURL(requestURL) : requestURL;
            return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
          };
        }()
      ) : (
        // Non standard browser envs (web workers, react-native) lack needed support.
        function nonStandardBrowserEnv2() {
          return function isURLSameOrigin() {
            return true;
          };
        }()
      );
    }
  });

  // node_modules/.pnpm/axios@1.3.5/node_modules/axios/lib/helpers/parseProtocol.js
  function parseProtocol(url) {
    const match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
    return match && match[1] || "";
  }
  var init_parseProtocol = __esm({
    "node_modules/.pnpm/axios@1.3.5/node_modules/axios/lib/helpers/parseProtocol.js"() {
      "use strict";
      init_live_reload();
    }
  });

  // node_modules/.pnpm/axios@1.3.5/node_modules/axios/lib/helpers/speedometer.js
  function speedometer(samplesCount, min) {
    samplesCount = samplesCount || 10;
    const bytes = new Array(samplesCount);
    const timestamps = new Array(samplesCount);
    let head = 0;
    let tail = 0;
    let firstSampleTS;
    min = min !== void 0 ? min : 1e3;
    return function push(chunkLength) {
      const now = Date.now();
      const startedAt = timestamps[tail];
      if (!firstSampleTS) {
        firstSampleTS = now;
      }
      bytes[head] = chunkLength;
      timestamps[head] = now;
      let i = tail;
      let bytesCount = 0;
      while (i !== head) {
        bytesCount += bytes[i++];
        i = i % samplesCount;
      }
      head = (head + 1) % samplesCount;
      if (head === tail) {
        tail = (tail + 1) % samplesCount;
      }
      if (now - firstSampleTS < min) {
        return;
      }
      const passed = startedAt && now - startedAt;
      return passed ? Math.round(bytesCount * 1e3 / passed) : void 0;
    };
  }
  var speedometer_default;
  var init_speedometer = __esm({
    "node_modules/.pnpm/axios@1.3.5/node_modules/axios/lib/helpers/speedometer.js"() {
      "use strict";
      init_live_reload();
      speedometer_default = speedometer;
    }
  });

  // node_modules/.pnpm/axios@1.3.5/node_modules/axios/lib/adapters/xhr.js
  function progressEventReducer(listener, isDownloadStream) {
    let bytesNotified = 0;
    const _speedometer = speedometer_default(50, 250);
    return (e) => {
      const loaded = e.loaded;
      const total = e.lengthComputable ? e.total : void 0;
      const progressBytes = loaded - bytesNotified;
      const rate = _speedometer(progressBytes);
      const inRange = loaded <= total;
      bytesNotified = loaded;
      const data2 = {
        loaded,
        total,
        progress: total ? loaded / total : void 0,
        bytes: progressBytes,
        rate: rate ? rate : void 0,
        estimated: rate && total && inRange ? (total - loaded) / rate : void 0,
        event: e
      };
      data2[isDownloadStream ? "download" : "upload"] = true;
      listener(data2);
    };
  }
  var isXHRAdapterSupported, xhr_default;
  var init_xhr = __esm({
    "node_modules/.pnpm/axios@1.3.5/node_modules/axios/lib/adapters/xhr.js"() {
      "use strict";
      init_live_reload();
      init_utils();
      init_settle();
      init_cookies();
      init_buildURL();
      init_buildFullPath();
      init_isURLSameOrigin();
      init_transitional();
      init_AxiosError();
      init_CanceledError();
      init_parseProtocol();
      init_platform();
      init_AxiosHeaders();
      init_speedometer();
      isXHRAdapterSupported = typeof XMLHttpRequest !== "undefined";
      xhr_default = isXHRAdapterSupported && function(config) {
        return new Promise(function dispatchXhrRequest(resolve, reject) {
          let requestData = config.data;
          const requestHeaders = AxiosHeaders_default.from(config.headers).normalize();
          const responseType = config.responseType;
          let onCanceled;
          function done() {
            if (config.cancelToken) {
              config.cancelToken.unsubscribe(onCanceled);
            }
            if (config.signal) {
              config.signal.removeEventListener("abort", onCanceled);
            }
          }
          if (utils_default.isFormData(requestData) && (browser_default.isStandardBrowserEnv || browser_default.isStandardBrowserWebWorkerEnv)) {
            requestHeaders.setContentType(false);
          }
          let request = new XMLHttpRequest();
          if (config.auth) {
            const username = config.auth.username || "";
            const password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : "";
            requestHeaders.set("Authorization", "Basic " + btoa(username + ":" + password));
          }
          const fullPath = buildFullPath(config.baseURL, config.url);
          request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);
          request.timeout = config.timeout;
          function onloadend() {
            if (!request) {
              return;
            }
            const responseHeaders = AxiosHeaders_default.from(
              "getAllResponseHeaders" in request && request.getAllResponseHeaders()
            );
            const responseData = !responseType || responseType === "text" || responseType === "json" ? request.responseText : request.response;
            const response = {
              data: responseData,
              status: request.status,
              statusText: request.statusText,
              headers: responseHeaders,
              config,
              request
            };
            settle(function _resolve(value) {
              resolve(value);
              done();
            }, function _reject(err) {
              reject(err);
              done();
            }, response);
            request = null;
          }
          if ("onloadend" in request) {
            request.onloadend = onloadend;
          } else {
            request.onreadystatechange = function handleLoad() {
              if (!request || request.readyState !== 4) {
                return;
              }
              if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf("file:") === 0)) {
                return;
              }
              setTimeout(onloadend);
            };
          }
          request.onabort = function handleAbort() {
            if (!request) {
              return;
            }
            reject(new AxiosError_default("Request aborted", AxiosError_default.ECONNABORTED, config, request));
            request = null;
          };
          request.onerror = function handleError() {
            reject(new AxiosError_default("Network Error", AxiosError_default.ERR_NETWORK, config, request));
            request = null;
          };
          request.ontimeout = function handleTimeout() {
            let timeoutErrorMessage = config.timeout ? "timeout of " + config.timeout + "ms exceeded" : "timeout exceeded";
            const transitional2 = config.transitional || transitional_default;
            if (config.timeoutErrorMessage) {
              timeoutErrorMessage = config.timeoutErrorMessage;
            }
            reject(new AxiosError_default(
              timeoutErrorMessage,
              transitional2.clarifyTimeoutError ? AxiosError_default.ETIMEDOUT : AxiosError_default.ECONNABORTED,
              config,
              request
            ));
            request = null;
          };
          if (browser_default.isStandardBrowserEnv) {
            const xsrfValue = (config.withCredentials || isURLSameOrigin_default(fullPath)) && config.xsrfCookieName && cookies_default.read(config.xsrfCookieName);
            if (xsrfValue) {
              requestHeaders.set(config.xsrfHeaderName, xsrfValue);
            }
          }
          requestData === void 0 && requestHeaders.setContentType(null);
          if ("setRequestHeader" in request) {
            utils_default.forEach(requestHeaders.toJSON(), function setRequestHeader(val, key) {
              request.setRequestHeader(key, val);
            });
          }
          if (!utils_default.isUndefined(config.withCredentials)) {
            request.withCredentials = !!config.withCredentials;
          }
          if (responseType && responseType !== "json") {
            request.responseType = config.responseType;
          }
          if (typeof config.onDownloadProgress === "function") {
            request.addEventListener("progress", progressEventReducer(config.onDownloadProgress, true));
          }
          if (typeof config.onUploadProgress === "function" && request.upload) {
            request.upload.addEventListener("progress", progressEventReducer(config.onUploadProgress));
          }
          if (config.cancelToken || config.signal) {
            onCanceled = (cancel) => {
              if (!request) {
                return;
              }
              reject(!cancel || cancel.type ? new CanceledError_default(null, config, request) : cancel);
              request.abort();
              request = null;
            };
            config.cancelToken && config.cancelToken.subscribe(onCanceled);
            if (config.signal) {
              config.signal.aborted ? onCanceled() : config.signal.addEventListener("abort", onCanceled);
            }
          }
          const protocol = parseProtocol(fullPath);
          if (protocol && browser_default.protocols.indexOf(protocol) === -1) {
            reject(new AxiosError_default("Unsupported protocol " + protocol + ":", AxiosError_default.ERR_BAD_REQUEST, config));
            return;
          }
          request.send(requestData || null);
        });
      };
    }
  });

  // node_modules/.pnpm/axios@1.3.5/node_modules/axios/lib/adapters/adapters.js
  var knownAdapters, adapters_default;
  var init_adapters = __esm({
    "node_modules/.pnpm/axios@1.3.5/node_modules/axios/lib/adapters/adapters.js"() {
      init_live_reload();
      init_utils();
      init_null();
      init_xhr();
      init_AxiosError();
      knownAdapters = {
        http: null_default,
        xhr: xhr_default
      };
      utils_default.forEach(knownAdapters, (fn, value) => {
        if (fn) {
          try {
            Object.defineProperty(fn, "name", { value });
          } catch (e) {
          }
          Object.defineProperty(fn, "adapterName", { value });
        }
      });
      adapters_default = {
        getAdapter: (adapters) => {
          adapters = utils_default.isArray(adapters) ? adapters : [adapters];
          const { length } = adapters;
          let nameOrAdapter;
          let adapter;
          for (let i = 0; i < length; i++) {
            nameOrAdapter = adapters[i];
            if (adapter = utils_default.isString(nameOrAdapter) ? knownAdapters[nameOrAdapter.toLowerCase()] : nameOrAdapter) {
              break;
            }
          }
          if (!adapter) {
            if (adapter === false) {
              throw new AxiosError_default(
                `Adapter ${nameOrAdapter} is not supported by the environment`,
                "ERR_NOT_SUPPORT"
              );
            }
            throw new Error(
              utils_default.hasOwnProp(knownAdapters, nameOrAdapter) ? `Adapter '${nameOrAdapter}' is not available in the build` : `Unknown adapter '${nameOrAdapter}'`
            );
          }
          if (!utils_default.isFunction(adapter)) {
            throw new TypeError("adapter is not a function");
          }
          return adapter;
        },
        adapters: knownAdapters
      };
    }
  });

  // node_modules/.pnpm/axios@1.3.5/node_modules/axios/lib/core/dispatchRequest.js
  function throwIfCancellationRequested(config) {
    if (config.cancelToken) {
      config.cancelToken.throwIfRequested();
    }
    if (config.signal && config.signal.aborted) {
      throw new CanceledError_default(null, config);
    }
  }
  function dispatchRequest(config) {
    throwIfCancellationRequested(config);
    config.headers = AxiosHeaders_default.from(config.headers);
    config.data = transformData.call(
      config,
      config.transformRequest
    );
    if (["post", "put", "patch"].indexOf(config.method) !== -1) {
      config.headers.setContentType("application/x-www-form-urlencoded", false);
    }
    const adapter = adapters_default.getAdapter(config.adapter || defaults_default.adapter);
    return adapter(config).then(function onAdapterResolution(response) {
      throwIfCancellationRequested(config);
      response.data = transformData.call(
        config,
        config.transformResponse,
        response
      );
      response.headers = AxiosHeaders_default.from(response.headers);
      return response;
    }, function onAdapterRejection(reason) {
      if (!isCancel(reason)) {
        throwIfCancellationRequested(config);
        if (reason && reason.response) {
          reason.response.data = transformData.call(
            config,
            config.transformResponse,
            reason.response
          );
          reason.response.headers = AxiosHeaders_default.from(reason.response.headers);
        }
      }
      return Promise.reject(reason);
    });
  }
  var init_dispatchRequest = __esm({
    "node_modules/.pnpm/axios@1.3.5/node_modules/axios/lib/core/dispatchRequest.js"() {
      "use strict";
      init_live_reload();
      init_transformData();
      init_isCancel();
      init_defaults();
      init_CanceledError();
      init_AxiosHeaders();
      init_adapters();
    }
  });

  // node_modules/.pnpm/axios@1.3.5/node_modules/axios/lib/core/mergeConfig.js
  function mergeConfig(config1, config2) {
    config2 = config2 || {};
    const config = {};
    function getMergedValue(target, source, caseless) {
      if (utils_default.isPlainObject(target) && utils_default.isPlainObject(source)) {
        return utils_default.merge.call({ caseless }, target, source);
      } else if (utils_default.isPlainObject(source)) {
        return utils_default.merge({}, source);
      } else if (utils_default.isArray(source)) {
        return source.slice();
      }
      return source;
    }
    function mergeDeepProperties(a, b, caseless) {
      if (!utils_default.isUndefined(b)) {
        return getMergedValue(a, b, caseless);
      } else if (!utils_default.isUndefined(a)) {
        return getMergedValue(void 0, a, caseless);
      }
    }
    function valueFromConfig2(a, b) {
      if (!utils_default.isUndefined(b)) {
        return getMergedValue(void 0, b);
      }
    }
    function defaultToConfig2(a, b) {
      if (!utils_default.isUndefined(b)) {
        return getMergedValue(void 0, b);
      } else if (!utils_default.isUndefined(a)) {
        return getMergedValue(void 0, a);
      }
    }
    function mergeDirectKeys(a, b, prop) {
      if (prop in config2) {
        return getMergedValue(a, b);
      } else if (prop in config1) {
        return getMergedValue(void 0, a);
      }
    }
    const mergeMap = {
      url: valueFromConfig2,
      method: valueFromConfig2,
      data: valueFromConfig2,
      baseURL: defaultToConfig2,
      transformRequest: defaultToConfig2,
      transformResponse: defaultToConfig2,
      paramsSerializer: defaultToConfig2,
      timeout: defaultToConfig2,
      timeoutMessage: defaultToConfig2,
      withCredentials: defaultToConfig2,
      adapter: defaultToConfig2,
      responseType: defaultToConfig2,
      xsrfCookieName: defaultToConfig2,
      xsrfHeaderName: defaultToConfig2,
      onUploadProgress: defaultToConfig2,
      onDownloadProgress: defaultToConfig2,
      decompress: defaultToConfig2,
      maxContentLength: defaultToConfig2,
      maxBodyLength: defaultToConfig2,
      beforeRedirect: defaultToConfig2,
      transport: defaultToConfig2,
      httpAgent: defaultToConfig2,
      httpsAgent: defaultToConfig2,
      cancelToken: defaultToConfig2,
      socketPath: defaultToConfig2,
      responseEncoding: defaultToConfig2,
      validateStatus: mergeDirectKeys,
      headers: (a, b) => mergeDeepProperties(headersToObject(a), headersToObject(b), true)
    };
    utils_default.forEach(Object.keys(config1).concat(Object.keys(config2)), function computeConfigValue(prop) {
      const merge2 = mergeMap[prop] || mergeDeepProperties;
      const configValue = merge2(config1[prop], config2[prop], prop);
      utils_default.isUndefined(configValue) && merge2 !== mergeDirectKeys || (config[prop] = configValue);
    });
    return config;
  }
  var headersToObject;
  var init_mergeConfig = __esm({
    "node_modules/.pnpm/axios@1.3.5/node_modules/axios/lib/core/mergeConfig.js"() {
      "use strict";
      init_live_reload();
      init_utils();
      init_AxiosHeaders();
      headersToObject = (thing) => thing instanceof AxiosHeaders_default ? thing.toJSON() : thing;
    }
  });

  // node_modules/.pnpm/axios@1.3.5/node_modules/axios/lib/env/data.js
  var VERSION;
  var init_data = __esm({
    "node_modules/.pnpm/axios@1.3.5/node_modules/axios/lib/env/data.js"() {
      init_live_reload();
      VERSION = "1.3.5";
    }
  });

  // node_modules/.pnpm/axios@1.3.5/node_modules/axios/lib/helpers/validator.js
  function assertOptions(options, schema, allowUnknown) {
    if (typeof options !== "object") {
      throw new AxiosError_default("options must be an object", AxiosError_default.ERR_BAD_OPTION_VALUE);
    }
    const keys = Object.keys(options);
    let i = keys.length;
    while (i-- > 0) {
      const opt = keys[i];
      const validator = schema[opt];
      if (validator) {
        const value = options[opt];
        const result = value === void 0 || validator(value, opt, options);
        if (result !== true) {
          throw new AxiosError_default("option " + opt + " must be " + result, AxiosError_default.ERR_BAD_OPTION_VALUE);
        }
        continue;
      }
      if (allowUnknown !== true) {
        throw new AxiosError_default("Unknown option " + opt, AxiosError_default.ERR_BAD_OPTION);
      }
    }
  }
  var validators, deprecatedWarnings, validator_default;
  var init_validator = __esm({
    "node_modules/.pnpm/axios@1.3.5/node_modules/axios/lib/helpers/validator.js"() {
      "use strict";
      init_live_reload();
      init_data();
      init_AxiosError();
      validators = {};
      ["object", "boolean", "number", "function", "string", "symbol"].forEach((type, i) => {
        validators[type] = function validator(thing) {
          return typeof thing === type || "a" + (i < 1 ? "n " : " ") + type;
        };
      });
      deprecatedWarnings = {};
      validators.transitional = function transitional(validator, version, message) {
        function formatMessage(opt, desc) {
          return "[Axios v" + VERSION + "] Transitional option '" + opt + "'" + desc + (message ? ". " + message : "");
        }
        return (value, opt, opts) => {
          if (validator === false) {
            throw new AxiosError_default(
              formatMessage(opt, " has been removed" + (version ? " in " + version : "")),
              AxiosError_default.ERR_DEPRECATED
            );
          }
          if (version && !deprecatedWarnings[opt]) {
            deprecatedWarnings[opt] = true;
            console.warn(
              formatMessage(
                opt,
                " has been deprecated since v" + version + " and will be removed in the near future"
              )
            );
          }
          return validator ? validator(value, opt, opts) : true;
        };
      };
      validator_default = {
        assertOptions,
        validators
      };
    }
  });

  // node_modules/.pnpm/axios@1.3.5/node_modules/axios/lib/core/Axios.js
  var validators2, Axios, Axios_default;
  var init_Axios = __esm({
    "node_modules/.pnpm/axios@1.3.5/node_modules/axios/lib/core/Axios.js"() {
      "use strict";
      init_live_reload();
      init_utils();
      init_buildURL();
      init_InterceptorManager();
      init_dispatchRequest();
      init_mergeConfig();
      init_buildFullPath();
      init_validator();
      init_AxiosHeaders();
      validators2 = validator_default.validators;
      Axios = class {
        constructor(instanceConfig) {
          this.defaults = instanceConfig;
          this.interceptors = {
            request: new InterceptorManager_default(),
            response: new InterceptorManager_default()
          };
        }
        /**
         * Dispatch a request
         *
         * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
         * @param {?Object} config
         *
         * @returns {Promise} The Promise to be fulfilled
         */
        request(configOrUrl, config) {
          if (typeof configOrUrl === "string") {
            config = config || {};
            config.url = configOrUrl;
          } else {
            config = configOrUrl || {};
          }
          config = mergeConfig(this.defaults, config);
          const { transitional: transitional2, paramsSerializer, headers } = config;
          if (transitional2 !== void 0) {
            validator_default.assertOptions(transitional2, {
              silentJSONParsing: validators2.transitional(validators2.boolean),
              forcedJSONParsing: validators2.transitional(validators2.boolean),
              clarifyTimeoutError: validators2.transitional(validators2.boolean)
            }, false);
          }
          if (paramsSerializer != null) {
            if (utils_default.isFunction(paramsSerializer)) {
              config.paramsSerializer = {
                serialize: paramsSerializer
              };
            } else {
              validator_default.assertOptions(paramsSerializer, {
                encode: validators2.function,
                serialize: validators2.function
              }, true);
            }
          }
          config.method = (config.method || this.defaults.method || "get").toLowerCase();
          let contextHeaders;
          contextHeaders = headers && utils_default.merge(
            headers.common,
            headers[config.method]
          );
          contextHeaders && utils_default.forEach(
            ["delete", "get", "head", "post", "put", "patch", "common"],
            (method) => {
              delete headers[method];
            }
          );
          config.headers = AxiosHeaders_default.concat(contextHeaders, headers);
          const requestInterceptorChain = [];
          let synchronousRequestInterceptors = true;
          this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
            if (typeof interceptor.runWhen === "function" && interceptor.runWhen(config) === false) {
              return;
            }
            synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
            requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
          });
          const responseInterceptorChain = [];
          this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
            responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
          });
          let promise;
          let i = 0;
          let len;
          if (!synchronousRequestInterceptors) {
            const chain = [dispatchRequest.bind(this), void 0];
            chain.unshift.apply(chain, requestInterceptorChain);
            chain.push.apply(chain, responseInterceptorChain);
            len = chain.length;
            promise = Promise.resolve(config);
            while (i < len) {
              promise = promise.then(chain[i++], chain[i++]);
            }
            return promise;
          }
          len = requestInterceptorChain.length;
          let newConfig = config;
          i = 0;
          while (i < len) {
            const onFulfilled = requestInterceptorChain[i++];
            const onRejected = requestInterceptorChain[i++];
            try {
              newConfig = onFulfilled(newConfig);
            } catch (error) {
              onRejected.call(this, error);
              break;
            }
          }
          try {
            promise = dispatchRequest.call(this, newConfig);
          } catch (error) {
            return Promise.reject(error);
          }
          i = 0;
          len = responseInterceptorChain.length;
          while (i < len) {
            promise = promise.then(responseInterceptorChain[i++], responseInterceptorChain[i++]);
          }
          return promise;
        }
        getUri(config) {
          config = mergeConfig(this.defaults, config);
          const fullPath = buildFullPath(config.baseURL, config.url);
          return buildURL(fullPath, config.params, config.paramsSerializer);
        }
      };
      utils_default.forEach(["delete", "get", "head", "options"], function forEachMethodNoData2(method) {
        Axios.prototype[method] = function(url, config) {
          return this.request(mergeConfig(config || {}, {
            method,
            url,
            data: (config || {}).data
          }));
        };
      });
      utils_default.forEach(["post", "put", "patch"], function forEachMethodWithData2(method) {
        function generateHTTPMethod(isForm) {
          return function httpMethod(url, data2, config) {
            return this.request(mergeConfig(config || {}, {
              method,
              headers: isForm ? {
                "Content-Type": "multipart/form-data"
              } : {},
              url,
              data: data2
            }));
          };
        }
        Axios.prototype[method] = generateHTTPMethod();
        Axios.prototype[method + "Form"] = generateHTTPMethod(true);
      });
      Axios_default = Axios;
    }
  });

  // node_modules/.pnpm/axios@1.3.5/node_modules/axios/lib/cancel/CancelToken.js
  var CancelToken, CancelToken_default;
  var init_CancelToken = __esm({
    "node_modules/.pnpm/axios@1.3.5/node_modules/axios/lib/cancel/CancelToken.js"() {
      "use strict";
      init_live_reload();
      init_CanceledError();
      CancelToken = class {
        constructor(executor) {
          if (typeof executor !== "function") {
            throw new TypeError("executor must be a function.");
          }
          let resolvePromise;
          this.promise = new Promise(function promiseExecutor(resolve) {
            resolvePromise = resolve;
          });
          const token = this;
          this.promise.then((cancel) => {
            if (!token._listeners)
              return;
            let i = token._listeners.length;
            while (i-- > 0) {
              token._listeners[i](cancel);
            }
            token._listeners = null;
          });
          this.promise.then = (onfulfilled) => {
            let _resolve;
            const promise = new Promise((resolve) => {
              token.subscribe(resolve);
              _resolve = resolve;
            }).then(onfulfilled);
            promise.cancel = function reject() {
              token.unsubscribe(_resolve);
            };
            return promise;
          };
          executor(function cancel(message, config, request) {
            if (token.reason) {
              return;
            }
            token.reason = new CanceledError_default(message, config, request);
            resolvePromise(token.reason);
          });
        }
        /**
         * Throws a `CanceledError` if cancellation has been requested.
         */
        throwIfRequested() {
          if (this.reason) {
            throw this.reason;
          }
        }
        /**
         * Subscribe to the cancel signal
         */
        subscribe(listener) {
          if (this.reason) {
            listener(this.reason);
            return;
          }
          if (this._listeners) {
            this._listeners.push(listener);
          } else {
            this._listeners = [listener];
          }
        }
        /**
         * Unsubscribe from the cancel signal
         */
        unsubscribe(listener) {
          if (!this._listeners) {
            return;
          }
          const index = this._listeners.indexOf(listener);
          if (index !== -1) {
            this._listeners.splice(index, 1);
          }
        }
        /**
         * Returns an object that contains a new `CancelToken` and a function that, when called,
         * cancels the `CancelToken`.
         */
        static source() {
          let cancel;
          const token = new CancelToken(function executor(c) {
            cancel = c;
          });
          return {
            token,
            cancel
          };
        }
      };
      CancelToken_default = CancelToken;
    }
  });

  // node_modules/.pnpm/axios@1.3.5/node_modules/axios/lib/helpers/spread.js
  function spread(callback) {
    return function wrap(arr) {
      return callback.apply(null, arr);
    };
  }
  var init_spread = __esm({
    "node_modules/.pnpm/axios@1.3.5/node_modules/axios/lib/helpers/spread.js"() {
      "use strict";
      init_live_reload();
    }
  });

  // node_modules/.pnpm/axios@1.3.5/node_modules/axios/lib/helpers/isAxiosError.js
  function isAxiosError(payload) {
    return utils_default.isObject(payload) && payload.isAxiosError === true;
  }
  var init_isAxiosError = __esm({
    "node_modules/.pnpm/axios@1.3.5/node_modules/axios/lib/helpers/isAxiosError.js"() {
      "use strict";
      init_live_reload();
      init_utils();
    }
  });

  // node_modules/.pnpm/axios@1.3.5/node_modules/axios/lib/helpers/HttpStatusCode.js
  var HttpStatusCode, HttpStatusCode_default;
  var init_HttpStatusCode = __esm({
    "node_modules/.pnpm/axios@1.3.5/node_modules/axios/lib/helpers/HttpStatusCode.js"() {
      init_live_reload();
      HttpStatusCode = {
        Continue: 100,
        SwitchingProtocols: 101,
        Processing: 102,
        EarlyHints: 103,
        Ok: 200,
        Created: 201,
        Accepted: 202,
        NonAuthoritativeInformation: 203,
        NoContent: 204,
        ResetContent: 205,
        PartialContent: 206,
        MultiStatus: 207,
        AlreadyReported: 208,
        ImUsed: 226,
        MultipleChoices: 300,
        MovedPermanently: 301,
        Found: 302,
        SeeOther: 303,
        NotModified: 304,
        UseProxy: 305,
        Unused: 306,
        TemporaryRedirect: 307,
        PermanentRedirect: 308,
        BadRequest: 400,
        Unauthorized: 401,
        PaymentRequired: 402,
        Forbidden: 403,
        NotFound: 404,
        MethodNotAllowed: 405,
        NotAcceptable: 406,
        ProxyAuthenticationRequired: 407,
        RequestTimeout: 408,
        Conflict: 409,
        Gone: 410,
        LengthRequired: 411,
        PreconditionFailed: 412,
        PayloadTooLarge: 413,
        UriTooLong: 414,
        UnsupportedMediaType: 415,
        RangeNotSatisfiable: 416,
        ExpectationFailed: 417,
        ImATeapot: 418,
        MisdirectedRequest: 421,
        UnprocessableEntity: 422,
        Locked: 423,
        FailedDependency: 424,
        TooEarly: 425,
        UpgradeRequired: 426,
        PreconditionRequired: 428,
        TooManyRequests: 429,
        RequestHeaderFieldsTooLarge: 431,
        UnavailableForLegalReasons: 451,
        InternalServerError: 500,
        NotImplemented: 501,
        BadGateway: 502,
        ServiceUnavailable: 503,
        GatewayTimeout: 504,
        HttpVersionNotSupported: 505,
        VariantAlsoNegotiates: 506,
        InsufficientStorage: 507,
        LoopDetected: 508,
        NotExtended: 510,
        NetworkAuthenticationRequired: 511
      };
      Object.entries(HttpStatusCode).forEach(([key, value]) => {
        HttpStatusCode[value] = key;
      });
      HttpStatusCode_default = HttpStatusCode;
    }
  });

  // node_modules/.pnpm/axios@1.3.5/node_modules/axios/lib/axios.js
  function createInstance(defaultConfig) {
    const context = new Axios_default(defaultConfig);
    const instance = bind(Axios_default.prototype.request, context);
    utils_default.extend(instance, Axios_default.prototype, context, { allOwnKeys: true });
    utils_default.extend(instance, context, null, { allOwnKeys: true });
    instance.create = function create(instanceConfig) {
      return createInstance(mergeConfig(defaultConfig, instanceConfig));
    };
    return instance;
  }
  var axios, axios_default;
  var init_axios = __esm({
    "node_modules/.pnpm/axios@1.3.5/node_modules/axios/lib/axios.js"() {
      "use strict";
      init_live_reload();
      init_utils();
      init_bind();
      init_Axios();
      init_mergeConfig();
      init_defaults();
      init_formDataToJSON();
      init_CanceledError();
      init_CancelToken();
      init_isCancel();
      init_data();
      init_toFormData();
      init_AxiosError();
      init_spread();
      init_isAxiosError();
      init_AxiosHeaders();
      init_HttpStatusCode();
      axios = createInstance(defaults_default);
      axios.Axios = Axios_default;
      axios.CanceledError = CanceledError_default;
      axios.CancelToken = CancelToken_default;
      axios.isCancel = isCancel;
      axios.VERSION = VERSION;
      axios.toFormData = toFormData_default;
      axios.AxiosError = AxiosError_default;
      axios.Cancel = axios.CanceledError;
      axios.all = function all(promises) {
        return Promise.all(promises);
      };
      axios.spread = spread;
      axios.isAxiosError = isAxiosError;
      axios.mergeConfig = mergeConfig;
      axios.AxiosHeaders = AxiosHeaders_default;
      axios.formToJSON = (thing) => formDataToJSON_default(utils_default.isHTMLForm(thing) ? new FormData(thing) : thing);
      axios.HttpStatusCode = HttpStatusCode_default;
      axios.default = axios;
      axios_default = axios;
    }
  });

  // node_modules/.pnpm/axios@1.3.5/node_modules/axios/index.js
  var Axios2, AxiosError2, CanceledError2, isCancel2, CancelToken2, VERSION2, all2, Cancel, isAxiosError2, spread2, toFormData2, AxiosHeaders2, HttpStatusCode2, formToJSON, mergeConfig2;
  var init_axios2 = __esm({
    "node_modules/.pnpm/axios@1.3.5/node_modules/axios/index.js"() {
      init_live_reload();
      init_axios();
      ({
        Axios: Axios2,
        AxiosError: AxiosError2,
        CanceledError: CanceledError2,
        isCancel: isCancel2,
        CancelToken: CancelToken2,
        VERSION: VERSION2,
        all: all2,
        Cancel,
        isAxiosError: isAxiosError2,
        spread: spread2,
        toFormData: toFormData2,
        AxiosHeaders: AxiosHeaders2,
        HttpStatusCode: HttpStatusCode2,
        formToJSON,
        mergeConfig: mergeConfig2
      } = axios_default);
    }
  });

  // src/sharableURL.cjs
  var require_sharableURL = __commonJS({
    "src/sharableURL.cjs"(exports, module) {
      "use strict";
      init_live_reload();
      init_src();
      var estimate;
      var getAPI = "https://x8ki-letl-twmt.n7.xano.io/api:MR0gzHqf/estimates?identifier=";
      var id;
      var industryID2;
      var estimateExists2 = false;
      returningUser();
      function returningUser() {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        id = urlParams.get("id");
        console.log("printing the ID of the record" + id);
        if (id) {
          console.log("id exists");
          retriveValuesFromDB(id);
          estimateExists2 = true;
        } else
          console.log("id does not exist");
        module.exports = estimateExists2;
      }
      async function retriveValuesFromDB(id2) {
        getAPI = getAPI + id2;
        await fetch(getAPI).then((response) => response.json()).then((data3) => {
          estimate = data3;
          fillInValues(estimate);
        });
      }
      async function fillInValues(estimate2) {
        console.log(estimate2);
        var form = $("#wf-form-Business-insurance-form")[0];
        form[0].value = estimate2.Name;
        form[1].value = estimate2.Email;
        form[2].value = estimate2.Phone;
        form[3].value = estimate2.Company_name;
        console.log(estimate2.Industry);
        form[4].value = estimate2.Industry;
        industryID2 = estimate2.Industry;
        form[6].value = estimate2.Year_of_incorporation;
        form[7].value = estimate2.Number_of_employees;
        form[8].value = estimate2.Capital_raised;
        form[9].value = estimate2.Last_financial_year_revenue;
        $("#first-continue-button").click();
        $("#second-continue").click();
        var industryInput = $("#bi-industry");
        $("#otp-continue-button").click();
        $("#fourth-continue-button").click();
        $(".loader-screen").css("display", "none");
      }
    }
  });

  // src/index.cjs
  function listIndustries(data2) {
    const industryOption = Object.entries(data2);
    industryOption.forEach((element) => {
      $("#bi-industry").append(
        `<option value="` + element[1].id + `">` + element[1].Industry_name + `</option>`
      );
    });
    disableFirstOption();
  }
  function createDatabaseRecord() {
    var inputElements = document.querySelectorAll(".bi-form-input");
    inputElements.forEach((element) => {
      values.push(element.value);
      count += 1;
    });
    values.splice(5, 1);
    console.log(values);
    data = {
      Name: values[0],
      Email: values[1],
      Phone: values[2],
      Company_name: values[3],
      Industry: values[4],
      Year_of_incorporation: values[5],
      Number_of_employees: values[6],
      Capital_raised: values[7],
      Last_financial_year_revenue: values[8],
      Identifier: ""
    };
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://x8ki-letl-twmt.n7.xano.io/api:MR0gzHqf/estimates",
      headers: {
        "Content-Type": "application/json"
      },
      data
    };
    axios_default.request(config).then((response) => {
      console.log("the response");
      console.log(JSON.stringify(response.data));
      identifier = response.data;
      console.log(identifier);
      createURL(identifier);
    }).catch((error) => {
      console.log(error);
    });
  }
  function createDataTwo() {
    var properties = {};
    var inputFields = document.querySelectorAll('input[data-screen="two"]');
    var selectFields = document.querySelectorAll('select[data-screen="two"]');
    const elements = [...inputFields, ...selectFields];
    console.log(elements);
    elements.forEach((input) => {
      const internalName = input.dataset.internalname;
      const value = input.value;
      properties[internalName] = value;
    });
    properties["business_industry"] = $("#bi-industry :selected").text();
    values["property"] = properties;
    console.log("second continue button data");
    console.log(values.property);
  }
  async function createDataThree() {
    var properties = {};
    var inputFields = document.querySelectorAll('input[data-screen="three"]');
    var selectFields = document.querySelectorAll('select[data-screen="three"]');
    const elements = [...inputFields, ...selectFields];
    console.log(elements);
    elements.forEach((input) => {
      const internalName = input.dataset.internalname;
      const value = input.value;
      properties[internalName] = value;
    });
    values["id"] = hubspotID;
    values["properties"] = properties;
    console.log("third continue button data");
    console.log(values);
  }
  function resetAllValues() {
    products.forEach((element) => {
      setSumInsuredFieldStatus(element[0], true);
      const radioButton = $(`[data-checkbox=${element[0]}]`);
      if (radioButton[0].childNodes[2].checked)
        checkTheCheckbox(radioButton, element[0]);
    });
    recommendedPlans = [];
    chosenProductsMap.clear();
    totalPrice = 0;
    grandTotal = 0;
  }
  function setSumInsuredFieldStatus(selectedProduct, selectStatus2) {
    if (selectStatus2)
      $(`[data-si='${selectedProduct}']`).prop("disabled", false);
    else
      $(`[data-si='${selectedProduct}']`).prop("disabled", true);
  }
  function assetInsuranceFieldStatus(aiSelectStatus2) {
    var elements = $("[data-si ='ai']");
    if (!aiSelectStatus2) {
      elements[0].disabled = true;
      elements[1].disabled = true;
    } else {
      elements[0].disabled = false;
      elements[1].disabled = false;
    }
  }
  function assetInsurance(aiSelectStatus2) {
    assetInsuranceFieldStatus(aiSelectStatus2);
    if (aiSelectStatus2) {
      if (document.querySelector(`[data-price='ai']`)) {
        const dataPrice = $("[data-price='ai']");
        dataPrice[0].style.display = "flex";
      }
      if (!document.querySelector(`[data-price='ai']`)) {
        const newElement = $(".pricing-holder")[0].cloneNode(true);
        newElement.setAttribute("data-price", "ai");
        newElement.style.display = "flex";
        newElement.childNodes[0].innerHTML = productNamesMap.get("ai");
        newElement.childNodes[1].innerHTML = parseInt(assetCost).toLocaleString("en-IN", {
          maximumFractionDigits: 0,
          style: "currency",
          currency: "INR"
        });
        $(".final-pricing-wrapper").append(newElement);
      }
    } else {
      chosenProductsMap.delete("ai");
      const dataPrice = $("[data-price='ai']");
      dataPrice[0].style.display = "none";
    }
    return;
  }
  function crimeInsurance(selectStatus2) {
    if (selectStatus2) {
      if (document.querySelector("[data-price='cd']")) {
        document.querySelector("[data-price='cd']").style.display = "flex";
      }
      chosenProductsMap.set("cd", "contact sales");
      if (!document.querySelector("[data-price='cd']")) {
        const newElement = $(".pricing-holder")[0].cloneNode(true);
        newElement.setAttribute("data-price", "cd");
        newElement.style.display = "flex";
        newElement.childNodes[0].innerHTML = productNamesMap.get("cd");
        newElement.childNodes[1].innerHTML = "Schedule a call";
        $(".final-pricing-wrapper").append(newElement);
      }
    } else {
      chosenProductsMap.delete("cd");
      document.querySelector("[data-price='cd']").style.display = "none";
    }
  }
  function calculation(productCode, selectStatus2) {
    const total = $("[data-element='total']")[0];
    const gst = $("[data-element='gst']")[0];
    const grandTotalElement = $("[data-element='grandTotal']")[0];
    const mGT = $("#grandTotal-mobile")[0];
    const mT = $("#total-mobile")[0];
    const mGST = $("#gst-mobile")[0];
    const mGTT = $("#grand-total-mobile")[0];
    const prodDeets = chosenProductsMap.get(productCode);
    const price = prodDeets.get("price");
    if (selectStatus2) {
      if (document.querySelector(`[data-price='${productCode}']`)) {
        document.querySelector(`[data-price='${productCode}']`).style.display = "flex";
      }
      if (!document.querySelector(`[data-price='${productCode}']`)) {
        var newElement = $(".pricing-holder")[0].cloneNode(true);
        newElement.setAttribute("data-price", productCode);
        newElement.style.display = "flex";
        newElement.childNodes[0].innerHTML = productNamesMap.get(productCode);
        newElement.childNodes[1].innerHTML = parseInt(price).toLocaleString("en-IN", {
          maximumFractionDigits: 0,
          style: "currency",
          currency: "INR"
        });
      }
      totalPrice = parseInt(totalPrice) + parseInt(price);
      grandTotal = parseInt(totalPrice) * 0.18 + parseInt(totalPrice);
      gstPrice = parseInt(totalPrice) * 0.18;
      total.innerHTML = totalPrice.toLocaleString("en-IN", {
        maximumFractionDigits: 0,
        style: "currency",
        currency: "INR"
      });
      grandTotalElement.innerHTML = grandTotal.toLocaleString("en-IN", {
        maximumFractionDigits: 0,
        style: "currency",
        currency: "INR"
      });
      mGT.innerHTML = grandTotal.toLocaleString("en-IN", {
        maximumFractionDigits: 0,
        style: "currency",
        currency: "INR"
      });
      gst.innerHTML = gstPrice.toLocaleString("en-IN", {
        maximumFractionDigits: 0,
        style: "currency",
        currency: "INR"
      });
      mT.innerHTML = totalPrice.toLocaleString("en-IN", {
        maximumFractionDigits: 0,
        style: "currency",
        currency: "INR"
      });
      mGTT.innerHTML = grandTotal.toLocaleString("en-IN", {
        maximumFractionDigits: 0,
        style: "currency",
        currency: "INR"
      });
      mGST.innerHTML = gstPrice.toLocaleString("en-IN", {
        maximumFractionDigits: 0,
        style: "currency",
        currency: "INR"
      });
      $(".final-pricing-wrapper").append(newElement);
    } else {
      const dataPrice = $(`[data-price='${productCode}']`);
      console.log("the price holder element");
      console.log(dataPrice);
      dataPrice[0].style.display = "none";
      chosenProductsMap.delete(productCode);
      totalPrice = parseInt(totalPrice) - parseInt(price);
      gstPrice = parseInt(totalPrice) * 0.18;
      grandTotal = parseInt(totalPrice) * 0.18 + parseInt(totalPrice);
      total.innerHTML = totalPrice.toLocaleString("en-IN", {
        maximumFractionDigits: 0,
        style: "currency",
        currency: "INR"
      });
      gst.innerHTML = gstPrice.toLocaleString("en-IN", {
        maximumFractionDigits: 0,
        style: "currency",
        currency: "INR"
      });
      grandTotalElement.innerHTML = grandTotal.toLocaleString("en-IN", {
        maximumFractionDigits: 0,
        style: "currency",
        currency: "INR"
      });
      mGT.innerHTML = grandTotal.toLocaleString("en-IN", {
        maximumFractionDigits: 0,
        style: "currency",
        currency: "INR"
      });
      mT.innerHTML = totalPrice.toLocaleString("en-IN", {
        maximumFractionDigits: 0,
        style: "currency",
        currency: "INR"
      });
      mGTT.innerHTML = grandTotal.toLocaleString("en-IN", {
        maximumFractionDigits: 0,
        style: "currency",
        currency: "INR"
      });
      mGST.innerHTML = gstPrice.toLocaleString("en-IN", {
        maximumFractionDigits: 0,
        style: "currency",
        currency: "INR"
      });
    }
  }
  function changeSumInsured(product, largestSI) {
    const siField = $(`[data-si='${product}']`);
    siField[0].value = largestSI;
  }
  function checkTheCheckbox(radioButton, productName) {
    if (radioButton[0].childNodes[2].checked) {
      radioButton[0].childNodes[0].style.display = "none";
      radioButton[0].childNodes[2].checked = false;
      radioButton[0].childNodes[1].classList.remove("w--redirected-checked");
      if (radioButton[1]) {
        radioButton[1].childNodes[0].style.display = "none";
        radioButton[1].childNodes[2].checked = false;
        radioButton[1].childNodes[1].classList.remove("w--redirected-checked");
      }
      var tempProd = $(`[data-product='${productName}']`);
      tempProd.removeClass("selected");
    } else {
      radioButton[0].childNodes[0].style.display = "block";
      radioButton[0].childNodes[2].checked = true;
      radioButton[0].childNodes[1].classList.add("w--redirected-checked");
      if (radioButton[1]) {
        radioButton[1].childNodes[0].style.display = "block";
        radioButton[1].childNodes[2].checked = true;
        radioButton[1].childNodes[1].classList.add("w--redirected-checked");
      }
      var tempProd = $(`[data-product='${productName}']`);
      tempProd.addClass("selected");
    }
  }
  async function apiFetch(api) {
    await fetch(api).then((response) => response.json()).then((data2) => {
      console.log(api);
      saveProductData(data2);
    });
  }
  function saveProductData(data2) {
    products = Object.entries(data2);
  }
  function findRecommendedProducts(products2) {
    products2.forEach((element) => {
      if (element[1].Recommendation === "must_have") {
        const goodPill = $(`[data-product='${element[0]}'] [data-pill='good']`);
        goodPill.css("display", "none");
        recommendedPlans.push(element[0]);
        const radioButton = $(`[data-checkbox=${element[0]}]`);
        checkTheCheckbox(radioButton, element[0]);
        const largestSI = findTheLargestSumInsured(
          element[0],
          element[1],
          fundingRound,
          revenueAmount
        );
        assetInsuranceFieldStatus(aiSelectStatus);
        setSumInsuredFieldStatus(element[0], true);
        changeSumInsured(element[0], largestSI);
        calculation(element[0], radioButton[0].childNodes[2].checked);
      } else {
        console.log("this product is not recommende" + element[0]);
        const recPill = $(`[data-product='${element[0]}'] [data-pill='rec']`);
        recPill.css("display", "none");
      }
    });
  }
  function findTheLargestSumInsured(productCode, product, fundingRound2, revenueAmount2) {
    const fundingSI = product.fundingJSON.find(({ category }) => category === fundingRound2);
    console.log("the funding SI:");
    console.log(fundingSI);
    const revenueSI = product.revenueJSON.find(
      ({ category }) => category === revenueAmount2
      //you will have to receive which revenue category they chose over here
    );
    const estimate = fundingSI.sumInsured > revenueSI.sumInsured ? fundingSI : revenueSI;
    console.log("the sum insured is: " + estimate.sumInsured);
    console.log("the price is: " + estimate.price);
    chosenProductsMap = chosenProductsMap.set(
      productCode,
      /* @__PURE__ */ new Map([
        ["price", estimate.price],
        ["si", estimate.sumInsured]
      ])
    );
    return estimate.sumInsured;
  }
  async function getAllIndustries() {
    await fetch(industryAPI).then((response) => response.json()).then((data2) => {
      listIndustries(data2);
    });
  }
  function disableFirstOption() {
    const selectElements = document.querySelectorAll("[data-question='select']");
    selectElements.forEach((element) => {
      const { options } = element;
      options[0].disabled = true;
    });
  }
  var import_sharableURL, myHeaders, bookAMeeting, industryID, fundingRound, revenueAmount, products, specificProductElement, selectStatus, companyName, totalPrice, gstPrice, noOfAssets, valueOfAssets, assetCost, nameOfPerson, aiSelectStatus, grandTotal, hubspotID, values, productsAPI, chosenProductsMap, productNamesMap, industryAPI, recommendedPlans;
  var init_src = __esm({
    "src/index.cjs"() {
      init_live_reload();
      init_axios2();
      import_sharableURL = __toESM(require_sharableURL());
      console.log("does the estimate exist? " + import_sharableURL.default);
      $("#first-continue-button").on("click", function() {
        nameOfPerson = $("#bi-name").val();
        $("#insert-name")[0].innerHTML = nameOfPerson;
      });
      $("#second-continue").on("click", async function() {
        console.log("second continue button clicked");
        industryID = $("#bi-industry").val();
        console.log(industryID);
        productsAPI.search = "?id=" + industryID;
        await apiFetch(productsAPI);
        companyName = $("#bi-company").val();
        $("#insert-company-name")[0].innerHTML = companyName;
        $("#insert-company-2")[0].innerHTML = companyName;
        if (!import_sharableURL.default)
          createDataTwo(true);
      });
      myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      $("#bi-industry").change(function() {
        console.log("change event triggered");
        industryID = $("#bi-industry").val();
        console.log(industryID);
        productsAPI.search = "?id=" + industryID;
        apiFetch(productsAPI);
      });
      $("#funding-round").change(function() {
        fundingRound = "seed";
        fundingRound = $("#funding-round").val();
      });
      $("#last-financial-year-revenue").change(function() {
        revenueAmount = "seed";
        revenueAmount = $("#last-financial-year-revenue").val();
      });
      $("#fourth-continue-button").on("click", async function() {
        console.log("industry ID");
        console.log(industryID);
        console.log("Does the estimate exist?");
        console.log(import_sharableURL.default);
        resetAllValues();
        products.forEach((element) => {
          if (element[1].Recommendation === "No") {
            const temps = $(`[data-product='${element[0]}']`);
            console.log(temps[0]);
            temps[0].style.display = "none";
          }
        });
        if (!import_sharableURL.default)
          createDatabaseRecord();
        findRecommendedProducts(products);
        await createDataThree();
      });
      $("#final-submit").on("click", function() {
      });
      $(".bi-plan").on("click", function(e) {
        console.log("this is the target");
        console.log(e.target);
        if (e.target.nodeName === "SELECT") {
          console.log("click on select ");
          return;
        }
        if (e.target.nodeName === "INPUT") {
          console.log("click on input ");
          return;
        }
        const productCode = $(this).attr("data-product");
        console.log("the product code");
        console.log(productCode);
        if (e.target.attributes[1] && e.target.attributes[1].value === "learn") {
          console.log("click on learn ");
          return;
        }
        if (productCode === "ai") {
          console.log("asset insurance is working");
          const assetRadioButton = $(`[data-checkbox=${productCode}]`);
          checkTheCheckbox(assetRadioButton, productCode);
          aiSelectStatus = assetRadioButton[0].childNodes[2].checked;
          assetInsurance(aiSelectStatus);
          return;
        }
        if (productCode === "cd") {
          const RadioButton = $("[data-checkbox='cd']");
          checkTheCheckbox(RadioButton, productCode);
          selectStatus = RadioButton[0].childNodes[2].checked;
          crimeInsurance(selectStatus);
          return;
        }
        products.forEach((element) => {
          console.log("the element[0]");
          console.log(element[0]);
          if (element[0] === productCode) {
            console.log("the element[1]");
            console.log(element[1]);
            specificProductElement = element[1];
            return;
          }
        });
        console.log("the selected prod: " + productCode);
        const radioButton = $(`[data-checkbox=${productCode}]`);
        checkTheCheckbox(radioButton, productCode);
        selectStatus = radioButton[0].childNodes[2].checked;
        setSumInsuredFieldStatus(productCode, selectStatus);
        if (selectStatus) {
          findTheLargestSumInsured(productCode, specificProductElement, fundingRound, revenueAmount);
        }
        calculation(productCode, selectStatus);
      });
      $("[data-input='si']").change(function() {
        let newSI = $(this);
        newSI = newSI[0].value;
        let selectedProduct = $(this);
        selectedProduct = selectedProduct.attr("data-si");
        let pricingElement = $(`[data-price=${selectedProduct}]`);
        pricingElement = pricingElement[0];
        let newSumInsured;
        products.forEach((element) => {
          if (element[0] === selectedProduct) {
            newSumInsured = element[1].fundingJSON.find(({ sumInsured }) => sumInsured === newSI);
          }
        });
        if (newSumInsured === void 0 && newSI === "1") {
          newSI = "3";
          products.forEach((element) => {
            if (element[0] === selectedProduct) {
              newSumInsured = element[1].fundingJSON.find(({ sumInsured }) => sumInsured === newSI);
            }
          });
        }
        if (newSumInsured === void 0) {
          newSI = "3";
          products.forEach((element) => {
            if (element[0] === selectedProduct) {
              newSumInsured = element[1].fundingJSON[0];
            }
          });
        }
        const newPrice = newSumInsured.price;
        pricingElement.childNodes[1].innerHTML = parseInt(newPrice).toLocaleString("en-IN", {
          maximumFractionDigits: 0,
          style: "currency",
          currency: "INR"
        });
        const tempProd = chosenProductsMap.get(selectedProduct);
        console.log("the products current price is: " + tempProd.get("price"));
        totalPrice = parseInt(totalPrice) - parseInt(tempProd.get("price"));
        tempProd.set("price", newPrice);
        tempProd.set("si", newSI);
        console.log(chosenProductsMap);
        calculation(selectedProduct, true);
      });
      $("#no-of-assets").change(function() {
        noOfAssets = $("#no-of-assets").val();
        $("#avg-cost").trigger("change");
      });
      $("#avg-cost").change(function() {
        valueOfAssets = $("#avg-cost").val();
        if (valueOfAssets) {
          assetCost = parseInt(noOfAssets) * parseInt(valueOfAssets) * 0.0125;
          totalPrice = parseInt(assetCost) + parseInt(totalPrice);
          chosenProductsMap.set("ai", /* @__PURE__ */ new Map([["price", assetCost]]));
          $("[data-si='ai']").val = assetCost;
          const total = $("[data-element='total']")[0];
          const gst = $("[data-element='gst']")[0];
          const grandTotalElement = $("[data-element='grandTotal']")[0];
          const mGT = $("#grandTotal-mobile")[0];
          const mT = $("#total-mobile")[0];
          const mGST = $("#gst-mobile")[0];
          const mGTT = $("#grand-total-mobile")[0];
          total.innerHTML = totalPrice.toLocaleString("en-IN", {
            maximumFractionDigits: 0,
            style: "currency",
            currency: "INR"
          });
          mT.innerHTML = totalPrice.toLocaleString("en-IN", {
            maximumFractionDigits: 0,
            style: "currency",
            currency: "INR"
          });
          mGTT.innerHTML = grandTotal.toLocaleString("en-IN", {
            maximumFractionDigits: 0,
            style: "currency",
            currency: "INR"
          });
          mGST.innerHTML = gstPrice.toLocaleString("en-IN", {
            maximumFractionDigits: 0,
            style: "currency",
            currency: "INR"
          });
          grandTotalElement.innerHTML = grandTotal.toLocaleString("en-IN", {
            maximumFractionDigits: 0,
            style: "currency",
            currency: "INR"
          });
          mGTT.innerHTML = grandTotal.toLocaleString("en-IN", {
            maximumFractionDigits: 0,
            style: "currency",
            currency: "INR"
          });
          mGT.innerHTML = grandTotal.toLocaleString("en-IN", {
            maximumFractionDigits: 0,
            style: "currency",
            currency: "INR"
          });
          gst.innerHTML = gstPrice.toLocaleString("en-IN", {
            maximumFractionDigits: 0,
            style: "currency",
            currency: "INR"
          });
          mGST.innerHTML = gstPrice.toLocaleString("en-IN", {
            maximumFractionDigits: 0,
            style: "currency",
            currency: "INR"
          });
          let pricingElement = $("[data-price='ai']");
          pricingElement = pricingElement[0];
          pricingElement.childNodes[1].innerHTML = parseInt(assetCost).toLocaleString("en-IN", {
            maximumFractionDigits: 0,
            style: "currency",
            currency: "INR"
          });
        }
      });
      $("[data-element='radio']").click(function(e) {
        console.log("yay");
        e.preventDefault();
      });
      bookAMeeting = $("#book-a-call");
      $("#bookMeeting").on("click", function() {
        console.log("book meetin");
        bookAMeeting.css("display", "flex");
        $(".business-body").css("overflow", "hidden");
      });
      $("[data-element='close']").on("click", function() {
        bookAMeeting.css("display", "none");
        $(".business-body").css("overflow", "visible");
      });
      industryID = 2;
      fundingRound = "seed";
      revenueAmount = "100cr";
      products = 0;
      totalPrice = 0;
      gstPrice = 0;
      noOfAssets = 0;
      valueOfAssets = 0;
      assetCost = 0;
      aiSelectStatus = false;
      grandTotal = 0;
      hubspotID = "42120551";
      values = {};
      productsAPI = new URL(
        `https://x8ki-letl-twmt.n7.xano.io/api:MR0gzHqf/industry?id=${industryID}`
      );
      chosenProductsMap = /* @__PURE__ */ new Map();
      productNamesMap = /* @__PURE__ */ new Map([
        ["do", "Directors and officers"],
        ["cgl", "Commercial General Liability"],
        ["pi", "Errors and omissions"],
        ["ci", "Cyber Insurance"],
        ["ai", "Asset insurance"],
        ["cd", "Crime and Dishonesty"]
      ]);
      industryAPI = "https://x8ki-letl-twmt.n7.xano.io/api:MR0gzHqf/get-all-industries";
      recommendedPlans = [];
      document.addEventListener("DOMContentLoaded", getAllIndustries());
    }
  });
  init_src();
})();
//# sourceMappingURL=index.js.map
