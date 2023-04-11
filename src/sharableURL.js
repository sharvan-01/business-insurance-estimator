//DURING FIRST ESTIMATE CREATION
//get the data after the last button is clicked and send it all to the db
//generate a random ID of alpha numeric convention and send it along
//append the ID to the URL and edit the UI to this URL
import axios from 'axios';
var values = [];
var identifier;
var count = 0;
let data;
var estimate;
var getAPI = 'https://x8ki-letl-twmt.n7.xano.io/api:MR0gzHqf/estimates?identifier=';
var id;
// eslint-disable-next-line @typescript-eslint/no-var-requires

// import { apiFetch } from './index.js';

//VIST ON THE URL - on documet load
returningUser();
function returningUser() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  id = urlParams.get('id');
  if (id) {
    const id = urlParams.get('id');
    $('.loader-screen').css('display', 'flex');
    retriveValuesFromDB(id);
  }
}

async function retriveValuesFromDB(id) {
  getAPI = getAPI + id;
  await fetch(getAPI)
    .then((response) => response.json())
    .then((data) => {
      estimate = data;
      fillInValues(estimate);
    });
}

function fillInValues(estimate) {
  var form = $('#wf-form-Business-insurance-form')[0];
  form[0].value = estimate.Name;
  form[1].value = estimate.Email;
  form[2].value = estimate.Phone;
  form[3].value = estimate.Company_name;
  console.log(estimate.Industry);
  form[4].value = estimate.Industry;
  form[6].value = estimate.Year_of_incorporation;
  form[7].value = estimate.Number_of_employees;
  form[8].value = estimate.Capital_raised;
  form[9].value = estimate.Last_financial_year_revenue;
  $('#first-continue-button').click();
  $('#second-continue').click();
  $('otp-continue-button').click();
  $('#fourth-continue-button').click();
  $('.loader-screen').css('display', 'none');
}
//filling in all the values
// get all the input elements -> reference the object for the respec value and innerHTML
// click the continue button thrice

//strip the URL, if (id exists)
//show loader screen
//get data variables and update fields
//click on next buttons and show estimate

$('#fourth-continue-button').on('click', function () {
  if (!id) {
    var inputElements = document.querySelectorAll('.bi-form-input');
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
      Identifier: '',
    };

    console.log('the data is: ');
    console.log(data);

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://x8ki-letl-twmt.n7.xano.io/api:MR0gzHqf/estimates',
      headers: {
        'Content-Type': 'application/json',
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        console.log('the response');
        console.log(JSON.stringify(response.data));
        identifier = response.data;
        console.log(identifier);
        createURL(identifier);
      })
      .catch((error) => {
        console.log(error);
      });
  }
});

function createURL(data) {
  identifier = identifier.id;
  console.log('the ID: ');
  console.log(identifier);
  let url = new URL('https://webdev.plumhq.com/business-insurance-estimator');
  url.searchParams.set('id', identifier);
  $('#estimateUrl')[0].innerHTML = url;
  var urlElement = $('#bi-sharable-url-link');
  urlElement.setAttribute('href', url);
}
