"use strict";
(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // bin/live-reload.js
  var init_live_reload = __esm({
    "bin/live-reload.js"() {
      "use strict";
    }
  });

  // src/sharableURL.cjs
  var require_sharableURL = __commonJS({
    "src/sharableURL.cjs"() {
      init_live_reload();
    }
  });
  require_sharableURL();
})();
//# sourceMappingURL=sharableURL.js.map
