// //DURING FIRST ESTIMATE CREATION
// //get the data after the last button is clicked and send it all to the db
// //generate a random ID of alpha numeric convention and send it along
// //append the ID to the URL and edit the UI to this URL
// import axios from 'axios';

// import getAllIndustries from './index.cjs';

// var values = [];
// var identifier;
// var count = 0;
// let data;
// var estimate;
// var getAPI = 'https://x8ki-letl-twmt.n7.xano.io/api:MR0gzHqf/estimates?identifier=';
// var id;
// var industryID;
// var estimateExists = false;
// //VIST ON THE URL - on documet load
// returningUser();
// function returningUser() {
//   const queryString = window.location.search;
//   const urlParams = new URLSearchParams(queryString);
//   id = urlParams.get('id');
//   console.log('printing the ID of the record' + id);
//   if (id) {
//     console.log('id exists');
//     //$('.loader-screen').css('display', 'flex');
//     retriveValuesFromDB(id);
//     estimateExists = true; //do not create a new record on the dB
//   } else console.log('id does not exist');
//   module.exports = estimateExists;
// }

// //fetching estimate values from the dB API
// async function retriveValuesFromDB(id) {
//   getAPI = getAPI + id;
//   await fetch(getAPI)
//     .then((response) => response.json())
//     .then((data) => {
//       estimate = data;
//       fillInValues(estimate);
//     });
// }

// //filling in the form values from the estimate retrived from the dB
// async function fillInValues(estimate) {
//   // await getAllIndustries();
//   console.log(estimate);
//   var form = $('#wf-form-Business-insurance-form')[0];
//   form[0].value = estimate.Name;
//   form[1].value = estimate.Email;
//   form[2].value = estimate.Phone;
//   form[3].value = estimate.Company_name;
//   console.log(estimate.Industry);
//   form[4].value = estimate.Industry;
//   industryID = estimate.Industry;
//   form[6].value = estimate.Year_of_incorporation;
//   form[7].value = estimate.Number_of_employees;
//   form[8].value = estimate.Capital_raised;
//   form[9].value = estimate.Last_financial_year_revenue;
//   $('#first-continue-button').click();
//   $('#second-continue').click();
//   var industryInput = $('#bi-industry');
//   //industryInput.trigger('change');
//   $('#otp-continue-button').click();
//   $('#fourth-continue-button').click(); //so on click over here we're creating another record
//   $('.loader-screen').css('display', 'none');
// }

// function createURL(data) {
//   identifier = data.id;
//   console.log('the ID: ');
//   console.log(identifier);
//   let url = new URL('https://webdev.plumhq.com/business-insurance-estimator');
//   url.searchParams.set('id', identifier);
//   var linkElement = $("[data-element='estimateUrl']")[0];
//   linkElement.innerHTML = url;
//   var urlElement = $('#bi-sharable-url-link');
//   urlElement.setAttribute('href', url);
// }
