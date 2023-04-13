"use strict";
(() => {
  // bin/live-reload.js
  new EventSource(`${"http://localhost:3000"}/esbuild`).addEventListener("change", () => location.reload());

  // src/hs.js
  var properties = values;
})();
//# sourceMappingURL=hs.js.map
