"use strict";
(() => {
  // src/otp.js
  var phone;
  var OTPverified = false;
  console.log("OTP file loaded");
  $("#second-continue").on("click", function() {
    buttonStatus();
    $("#resend-otp-button").css("pointer-events", "none");
    phone = $("#bi-phone").val();
    phone = parseInt(phone);
    phone = "+91" + phone;
    getOTP(phone);
    startTimer();
  });
  function buttonStatus() {
    if (!OTPverified) {
      $("#otp-continue-button").css("pointer-events", "none");
      $("#otp-continue-button").addClass("disabled");
    } else {
      $("#otp-continue-button").css("pointer-events", "auto");
      $("#otp-continue-button").removeClass("disabled");
    }
  }
  function startTimer() {
    let remainingTimeElement = document.querySelector("#remainingTime"), secondsLeft = 5;
    const Timer = setInterval(() => {
      if (secondsLeft <= 0) {
        clearInterval(Timer);
        $("#resend-otp-button").css("pointer-events", "auto");
        $("#resend-otp-button").css("color", "rgba(87, 14, 64, 1)");
        $("#resend-otp-button").css("border-bottom", "2px solid rgba(87, 14, 64, 1)");
      }
      remainingTimeElement.value = secondsLeft;
      remainingTimeElement.textContent = "(" + secondsLeft + ")";
      secondsLeft -= 1;
    }, 1e3);
  }
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Access-Control-Allow-Origin", "https://plumhq.com");
  myHeaders.append("Access-Control-Allow-Credentials", "true");
  async function getOTP(phone2) {
    var raw = JSON.stringify({
      phone: phone2,
      channel: "SMS",
      key: "businessOTC"
    });
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };
    fetch(
      "https://api-prod.plumhq.com/api/v2/authentication/phoneVerfication/otp/generate",
      requestOptions
    ).then((response) => response.json()).then((result) => saveID(result)).catch((error) => console.log("error"));
  }
  function saveID(result) {
    id = Object.entries(result);
    id = id[0][1];
    console.log(id);
  }
  $("#verify-otp").on("click", function() {
    verifyOTP();
  });
  async function verifyOTP() {
    var otp = $("#otp-field").val();
    var raw = JSON.stringify({
      code: otp,
      requestId: id,
      channel: "SMS"
    });
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };
    fetch(
      "https://api-prod.plumhq.com/api/v2/authentication/phoneVerfication/otp/verify",
      requestOptions
    ).then((response) => response.json()).then((result) => verify(result)).catch((error) => errorMessage());
    function verify(result) {
      var verify2 = Object.entries(result);
      verify2 = verify2[0];
      if (verify2[0] === "success") {
        OTPverified = true;
        buttonStatus();
        $("#otp-continue-button").click();
      } else
        incorrectOTP();
    }
  }
  function incorrectOTP() {
    errorMessage.innerHTML = "Incorrect OTP";
    errorMessage.css("display", "block");
    setTimeout(() => {
      errorMessage.css("display", "hide");
    }, "3000");
  }
  function errorMessage() {
    errorMessage.innerHTML = "An error occured.";
  }
  $("#resend-otp-button").on("click", function() {
    getOTP(phone);
  });
  var id;
  var errorMessage = $("#incorrect-otp");
})();
//# sourceMappingURL=otp.js.map
