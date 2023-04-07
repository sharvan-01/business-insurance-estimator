/* eslint-disable prefer-destructuring */
//generate OTP
var phone;

//when the button before the OTP screen is clicked, send the OTP

$('#second-continue').on('click', function () {
  sendData();

  $('#resend-otp-button').prop('disabled', true);
  // $("#otp-continue-button").prop("disabled", true);
  phone = $('#phone').val();
  email = $;
  phone = parseInt(phone);
  phone = '+91' + phone;
  getOTP(phone); //get the OTP for this phone number
  startTimer(); //start timer for resend OTP function
});

function startTimer() {
  let remainingTimeElement = document.querySelector('#remainingTime'),
    secondsLeft = 5;

  const downloadTimer = setInterval(() => {
    if (secondsLeft <= 0) {
      clearInterval(downloadTimer);
      $('#resend-otp-button').prop('disabled', false);
    }
    remainingTimeElement.value = secondsLeft;
    remainingTimeElement.textContent = '(' + secondsLeft + ')';
    secondsLeft -= 1;
  }, 1000);
}

// function sendData() {
//   const axios = require('axios');

//   const object = {
//     email: 'example@asfgev.com',
//     firstName: 'John',
//   };

//   axios
//     .post('http://localhost:3000/contact', object)
//     .then((response) => {
//       console.log('Contact created successfully!');
//     })
//     .catch((error) => {
//       console.error('Failed to create contact:', error);
//     });
// }

//common headers between get and verify OTP.
var myHeaders = new Headers();
myHeaders.append('Content-Type', 'application/json');
myHeaders.append('Access-Control-Allow-Origin', 'https://plumhq.com');
myHeaders.append('Access-Control-Allow-Credentials', 'true');

//get OTP from API
async function getOTP(phone) {
  var raw = JSON.stringify({
    phone: phone,
    channel: 'SMS',
    key: 'businessOTC',
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow',
  };

  fetch(
    'https://api-prod.plumhq.com/api/v2/authentication/phoneVerfication/otp/generate',
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => saveID(result))
    .catch((error) => console.log('error'));
}

//convert response to JSON and saving the ID to a variable
function saveID(result) {
  id = Object.entries(result);
  id = id[0][1];
  console.log(id);
}

//call verify OTP function on button click
$('#verify-otp').on('click', function () {
  verifyOTP();
});

//verify OTP
async function verifyOTP() {
  var otp = $('#otp-field').val();

  var raw = JSON.stringify({
    code: otp,
    requestId: id,
    channel: 'SMS',
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow',
  };

  fetch(
    'https://api-prod.plumhq.com/api/v2/authentication/phoneVerfication/otp/verify',
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => verify(result))
    .catch((error) => errorMessage());

  function verify(result) {
    var verify = Object.entries(result);
    verify = verify[0];
    if (verify[1]) {
      console.log('this is pressed');
      $('#otp-continue-button').click();
    } else incorrectOTP();
  }

  function incorrectOTP() {
    errorMessage.innerHTML = 'Incorrect OTP';
    errorMessage.style.display('block');
    setTimeout(() => {
      errorMessage.style.display('hide');
    }, '3000');
  }

  function errorMessage() {
    errorMessage.innerHTML = 'An error occured.';
  }
}

$('#resend-otp-button').on('click', function () {
  getOTP();
});

var id;
var errorMessage = $('#incorrect-otp');
