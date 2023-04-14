"use strict";
(() => {
  // src/mobileVersion.js
  $("#showMoreImage").on("click", function() {
    $("#showMoreImage").css("display", "none");
    $("#showLessImage").css("display", "block");
    $("#showMoreContent").css("display", "flex");
    $("#stickyContent").css("display", "none");
  });
  $("#showLessImage").on("click", function() {
    $("#showMoreImage").css("display", "block");
    $("#showLessImage").css("display", "none");
    $("#showMoreContent").css("display", "none");
    $("#stickyContent").css("display", "flex");
  });
})();
//# sourceMappingURL=mobileVersion.js.map
