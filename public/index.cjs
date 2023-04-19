/* eslint-disable prefer-destructuring */
//adding industries to the SELECT field on the UI

import axios from 'axios';

import estimateExists from './sharableURL.cjs';
// import returningUser from './sharableURL.cjs';

function listIndustries(data) {
  const industryOption = Object.entries(data);
  industryOption.forEach((element) => {
    // console.log(element);
    $('#bi-industry').append(
      `<option value="` + element[1].id + `">` + element[1].Industry_name + `</option>`
    );
  });
  disableFirstOption();
}

$('#first-continue-button').on('click', function () {
  nameOfPerson = $('#bi-name').val();
  $('#insert-name')[0].innerHTML = nameOfPerson;
});

$('#second-continue').on('click', function () {
  console.log('second continue button clicked');
  industryID = $('#bi-industry').val();
  console.log(industryID);
  productsAPI.search = '?id=' + industryID;
  apiFetch(productsAPI);
  companyName = $('#bi-company').val();
  $('#insert-company-name')[0].innerHTML = companyName;
  $('#insert-company-2')[0].innerHTML = companyName;
  createDataTwo(true);
});

var myHeaders = new Headers();
myHeaders.append('Content-Type', 'application/json');

async function createContact(properties) {
  try {
    const response = await fetch('/api/handler', {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify({ properties }),
      mode: 'cors',
    });
    const data = await response.json();
    hubspotID = data.id;
    console.log('the identifier is: ' + hubspotID);

    //const data = await response.json();
  } catch (error) {
    console.error(error);
  }
}

async function updateContact(properties) {
  try {
    console.log('the update properties object');
    console.log(properties);
    const response = await fetch('/api/handler', {
      method: 'PATCH',
      headers: myHeaders,
      body: JSON.stringify(properties),
      mode: 'cors',
    });
    if (response.ok) {
      const data = await response.json();
      console.log('the data sent to update is:');
      console.log(data);
      // Handle success
    } else {
      const errorData = await response.json();
      console.log(errorData);
      // Handle error
    }
  } catch (error) {
    console.log(error);
  }
}

// async function updateContact(properties) {
//   try {
//     const response = await fetch(
//       'https://business-insurance-estimator-sharvan-01.vercel.app/api/handler',
//       {
//         method: 'PATCH',
//         headers: myHeaders,
//         body: JSON.stringify({ properties }),
//         mode: 'cors',
//       }
//     );
//     const data = await response.json();
//     hubspotID = data.id;
//     console.log('the identifier is: ' + hubspotID);

//     //const data = await response.json();
//   } catch (error) {
//     console.error(error);
//   }
// }

//when industry is selected call the products API
$('#bi-industry').change(function () {
  console.log('change event triggered');
  industryID = $('#bi-industry').val();
  console.log(industryID);
  productsAPI.search = '?id=' + industryID;
  apiFetch(productsAPI);
});

$('#funding-round').change(function () {
  fundingRound = 'seed';
  fundingRound = $('#funding-round').val();
});

$('#last-financial-year-revenue').change(function () {
  revenueAmount = 'seed';
  revenueAmount = $('#last-financial-year-revenue').val();
});

$('#fourth-continue-button').on('click', async function () {
  console.log('industry ID');
  console.log(industryID);
  console.log('Does the estimate exist?');
  console.log(estimateExists);
  // if (!estimateExists)
  resetAllValues();
  products.forEach((element) => {
    // finding all elements that have a recommendation of no and disabling them
    if (element[1].Recommendation === 'No') {
      const temps = $(`[data-product='${element[0]}']`);
      console.log(temps[0]);
      temps[0].style.display = 'none';
    }
  });
  findRecommendedProducts(products);
  await createDataThree();

  //getting all the input values and sending them to the HS file
  // { firstname: "John", lastname: "Doe" }

  // createContact(values);
});

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
  properties['business_industry'] = $('#bi-industry :selected').text();
  values['properties'] = properties;
  console.log('second continue button data');
  console.log(values.property);
  createContact(values.property);
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
  values['id'] = hubspotID;
  values['properties'] = properties;
  console.log('third continue button data');
  console.log(values);
  try {
    var result = await updateContact(values);
    console.log(result);
  } catch (e) {
    console.log(e);
  }
}

function finalDataSubmit() {
  values['bi_products_chosen'] = Object.keys(Object.fromEntries(chosenProductsMap)).join(';');
}

function resetAllValues() {
  products.forEach((element) => {
    setSumInsuredFieldStatus(element[0], true);
    const radioButton = $(`[data-checkbox=${element[0]}]`);
    if (radioButton[0].childNodes[2].checked) checkTheCheckbox(radioButton, element[0]);
  });
  recommendedPlans = [];
  chosenProductsMap.clear();
  totalPrice = 0;
  grandTotal = 0;
}

$('.bi-plan').on('click', function (e) {
  console.log('this is the target');
  console.log(e.target);
  //checking if click is on the SI SELECT
  if (e.target.nodeName === 'SELECT') {
    console.log('click on select ');
    return;
  }

  if (e.target.nodeName === 'INPUT') {
    console.log('click on input ');
    return;
  }

  //looping through all the products to find the selected product HTML
  const productCode = $(this).attr('data-product'); //getting product code
  console.log('the product code');
  console.log(productCode);

  if (e.target.attributes[1] && e.target.attributes[1].value === 'learn') {
    console.log('click on learn ');
    return;
  }

  //if asset insurance
  if (productCode === 'ai') {
    console.log('asset insurance is working');
    const assetRadioButton = $(`[data-checkbox=${productCode}]`);
    checkTheCheckbox(assetRadioButton, productCode);
    aiSelectStatus = assetRadioButton[0].childNodes[2].checked;
    assetInsurance(aiSelectStatus);
    return;
  }

  if (productCode === 'cd') {
    const RadioButton = $("[data-checkbox='cd']");
    checkTheCheckbox(RadioButton, productCode);
    selectStatus = RadioButton[0].childNodes[2].checked;
    crimeInsurance(selectStatus);
    return;
  }

  products.forEach((element) => {
    console.log('the element[0]');
    console.log(element[0]);
    if (element[0] === productCode) {
      console.log('the element[1]');
      console.log(element[1]);
      // eslint-disable-next-line prefer-destructuring
      specificProductElement = element[1];
      return;
    }
  });
  console.log('the selected prod: ' + productCode);
  const radioButton = $(`[data-checkbox=${productCode}]`);
  checkTheCheckbox(radioButton, productCode);
  selectStatus = radioButton[0].childNodes[2].checked;
  setSumInsuredFieldStatus(productCode, selectStatus);
  if (selectStatus) {
    findTheLargestSumInsured(productCode, specificProductElement, fundingRound, revenueAmount);
  }
  calculation(productCode, selectStatus);
  // }
});

$("[data-input='si']").change(function () {
  let newSI = $(this);
  newSI = newSI[0].value;
  let selectedProduct = $(this);
  selectedProduct = selectedProduct.attr('data-si');
  let pricingElement = $(`[data-price=${selectedProduct}]`);
  pricingElement = pricingElement[0];
  let newSumInsured;
  products.forEach((element) => {
    if (element[0] === selectedProduct) {
      newSumInsured = element[1].fundingJSON.find(({ sumInsured }) => sumInsured === newSI);
    }
  });
  if (newSumInsured === undefined && newSI === '1') {
    newSI = '3';
    products.forEach((element) => {
      if (element[0] === selectedProduct) {
        newSumInsured = element[1].fundingJSON.find(({ sumInsured }) => sumInsured === newSI);
      }
    });
  }

  if (newSumInsured === undefined) {
    newSI = '3';
    products.forEach((element) => {
      if (element[0] === selectedProduct) {
        newSumInsured = element[1].fundingJSON[0];
      }
    });
  }
  const newPrice = newSumInsured.price;
  pricingElement.childNodes[1].innerHTML = parseInt(newPrice).toLocaleString('en-IN', {
    maximumFractionDigits: 0,
    style: 'currency',
    currency: 'INR',
  });
  const tempProd = chosenProductsMap.get(selectedProduct);
  console.log('the products current price is: ' + tempProd.get('price'));
  //subtracting the previous amount from the totalPrice
  totalPrice = parseInt(totalPrice) - parseInt(tempProd.get('price'));
  tempProd.set('price', newPrice);
  tempProd.set('si', newSI);
  console.log(chosenProductsMap);
  calculation(selectedProduct, true);
});

function setSumInsuredFieldStatus(selectedProduct, selectStatus) {
  //if a product is not recommended for a company then they should not be able to add it
  if (selectStatus) $(`[data-si='${selectedProduct}']`).prop('disabled', false);
  else $(`[data-si='${selectedProduct}']`).prop('disabled', true);
}

function assetInsuranceFieldStatus(aiSelectStatus) {
  var elements = $("[data-si ='ai']");
  if (!aiSelectStatus) {
    elements[0].disabled = true;
    elements[1].disabled = true;
  } else {
    elements[0].disabled = false;
    elements[1].disabled = false;
  }
}

//asset insurance
//creating the pricing element
$('#no-of-assets').change(function () {
  noOfAssets = $('#no-of-assets').val();
  $('#avg-cost').trigger('change');
});
$('#avg-cost').change(function () {
  valueOfAssets = $('#avg-cost').val();
  if (valueOfAssets) {
    assetCost = parseInt(noOfAssets) * parseInt(valueOfAssets) * 0.0125;
    totalPrice = parseInt(assetCost) + parseInt(totalPrice);
    chosenProductsMap.set('ai', new Map([['price', assetCost]]));
    $("[data-si='ai']").val = assetCost;
    const total = $("[data-element='total']")[0];
    const gst = $("[data-element='gst']")[0];
    const grandTotalElement = $("[data-element='grandTotal']")[0];
    const mGT = $('#grandTotal-mobile')[0];
    total.innerHTML = totalPrice.toLocaleString('en-IN', {
      maximumFractionDigits: 0,
      style: 'currency',
      currency: 'INR',
    });
    grandTotalElement.innerHTML = grandTotal.toLocaleString('en-IN', {
      maximumFractionDigits: 0,
      style: 'currency',
      currency: 'INR',
    });
    mGT.innerHTML = grandTotal.toLocaleString('en-IN', {
      maximumFractionDigits: 0,
      style: 'currency',
      currency: 'INR',
    });
    gst.innerHTML = gstPrice.toLocaleString('en-IN', {
      maximumFractionDigits: 0,
      style: 'currency',
      currency: 'INR',
    });
    let pricingElement = $("[data-price='ai']");
    pricingElement = pricingElement[0];
    pricingElement.childNodes[1].innerHTML = parseInt(assetCost).toLocaleString('en-IN', {
      maximumFractionDigits: 0,
      style: 'currency',
      currency: 'INR',
    });
  }
});

function assetInsurance(aiSelectStatus) {
  assetInsuranceFieldStatus(aiSelectStatus);
  if (aiSelectStatus) {
    if (document.querySelector(`[data-price='ai']`)) {
      const dataPrice = $("[data-price='ai']");
      dataPrice[0].style.display = 'flex';
    }
    if (!document.querySelector(`[data-price='ai']`)) {
      const newElement = $('.pricing-holder')[0].cloneNode(true);
      newElement.setAttribute('data-price', 'ai');
      newElement.style.display = 'flex';
      newElement.childNodes[0].innerHTML = productNamesMap.get('ai');
      newElement.childNodes[1].innerHTML = parseInt(assetCost).toLocaleString('en-IN', {
        maximumFractionDigits: 0,
        style: 'currency',
        currency: 'INR',
      });
      $('.final-pricing-wrapper').append(newElement);
    }
  } else {
    chosenProductsMap.delete('ai');
    const dataPrice = $("[data-price='ai']");
    dataPrice[0].style.display = 'none';
  }
  return;
}

function crimeInsurance(selectStatus) {
  if (selectStatus) {
    if (document.querySelector("[data-price='cd']")) {
      document.querySelector("[data-price='cd']").style.display = 'flex';
    }

    chosenProductsMap.set('cd', 'contact sales');

    if (!document.querySelector("[data-price='cd']")) {
      const newElement = $('.pricing-holder')[0].cloneNode(true);
      newElement.setAttribute('data-price', 'cd');
      newElement.style.display = 'flex';
      newElement.childNodes[0].innerHTML = productNamesMap.get('cd');
      newElement.childNodes[1].innerHTML = 'Schedule a call';
      $('.final-pricing-wrapper').append(newElement);
    }
  } else {
    chosenProductsMap.delete('cd');
    document.querySelector("[data-price='cd']").style.display = 'none';
  }
}

function calculation(productCode, selectStatus) {
  const total = $("[data-element='total']")[0];
  const gst = $("[data-element='gst']")[0];
  const grandTotalElement = $("[data-element='grandTotal']")[0];
  const mGT = $('#grandTotal-mobile')[0];
  const prodDeets = chosenProductsMap.get(productCode);
  const price = prodDeets.get('price');

  if (selectStatus) {
    if (document.querySelector(`[data-price='${productCode}']`)) {
      document.querySelector(`[data-price='${productCode}']`).style.display = 'flex';
    }

    if (!document.querySelector(`[data-price='${productCode}']`)) {
      //this does not work cause it's not checking if that paticular product's element exists or not, it simply checks for one variable
      var newElement = $('.pricing-holder')[0].cloneNode(true);
      newElement.setAttribute('data-price', productCode);
      newElement.style.display = 'flex';
      newElement.childNodes[0].innerHTML = productNamesMap.get(productCode);
      newElement.childNodes[1].innerHTML = parseInt(price).toLocaleString('en-IN', {
        maximumFractionDigits: 0,
        style: 'currency',
        currency: 'INR',
      });
    }
    totalPrice = parseInt(totalPrice) + parseInt(price);
    grandTotal = parseInt(totalPrice) * 0.18 + parseInt(totalPrice);
    gstPrice = parseInt(totalPrice) * 0.18;
    total.innerHTML = totalPrice.toLocaleString('en-IN', {
      maximumFractionDigits: 0,
      style: 'currency',
      currency: 'INR',
    });
    grandTotalElement.innerHTML = grandTotal.toLocaleString('en-IN', {
      maximumFractionDigits: 0,
      style: 'currency',
      currency: 'INR',
    });
    mGT.innerHTML = grandTotal.toLocaleString('en-IN', {
      maximumFractionDigits: 0,
      style: 'currency',
      currency: 'INR',
    });
    gst.innerHTML = gstPrice.toLocaleString('en-IN', {
      maximumFractionDigits: 0,
      style: 'currency',
      currency: 'INR',
    });
    $('.final-pricing-wrapper').append(newElement);
  } else {
    const dataPrice = $(`[data-price='${productCode}']`);
    console.log('the price holder element');
    console.log(dataPrice);
    dataPrice[0].style.display = 'none';
    chosenProductsMap.delete(productCode);
    totalPrice = parseInt(totalPrice) - parseInt(price);
    gstPrice = parseInt(totalPrice) * 0.18;
    grandTotal = parseInt(totalPrice) * 0.18 + parseInt(totalPrice);
    total.innerHTML = totalPrice.toLocaleString('en-IN', {
      maximumFractionDigits: 0,
      style: 'currency',
      currency: 'INR',
    });
    gst.innerHTML = gstPrice.toLocaleString('en-IN', {
      maximumFractionDigits: 0,
      style: 'currency',
      currency: 'INR',
    });
    grandTotalElement.innerHTML = grandTotal.toLocaleString('en-IN', {
      maximumFractionDigits: 0,
      style: 'currency',
      currency: 'INR',
    });
    mGT.innerHTML = grandTotal.toLocaleString('en-IN', {
      maximumFractionDigits: 0,
      style: 'currency',
      currency: 'INR',
    });
  }
}

//when user clicks the radio button prevent default
$("[data-element='radio']").click(function (e) {
  console.log('yay');
  e.preventDefault();
});

function changeSumInsured(product, largestSI) {
  const siField = $(`[data-si='${product}']`);
  siField[0].value = largestSI; //replace with data-variable
}

function checkTheCheckbox(radioButton, productName) {
  if (radioButton[0].childNodes[2].checked) {
    radioButton[0].childNodes[0].style.display = 'none';
    radioButton[0].childNodes[2].checked = false;
    radioButton[0].childNodes[1].classList.remove('w--redirected-checked');
    if (radioButton[1]) {
      radioButton[1].childNodes[0].style.display = 'none';
      radioButton[1].childNodes[2].checked = false;
      radioButton[1].childNodes[1].classList.remove('w--redirected-checked');
    }
    var tempProd = $(`[data-product='${productName}']`);
    tempProd.removeClass('selected');
  } else {
    radioButton[0].childNodes[0].style.display = 'block';
    radioButton[0].childNodes[2].checked = true;
    radioButton[0].childNodes[1].classList.add('w--redirected-checked');
    if (radioButton[1]) {
      radioButton[1].childNodes[0].style.display = 'block';
      radioButton[1].childNodes[2].checked = true;
      radioButton[1].childNodes[1].classList.add('w--redirected-checked');
    }
    var tempProd = $(`[data-product='${productName}']`);
    tempProd.addClass('selected');
  }
}

async function apiFetch(api) {
  await fetch(api)
    .then((response) => response.json())
    .then((data) => {
      console.log(api);
      saveProductData(data);
    });
}
// export { apiFetch };

async function saveProductData(data) {
  products = Object.entries(data);
}

//iterating through all the products
//function is only called for recommended products
function findRecommendedProducts(products) {
  products.forEach((element) => {
    //finding all elements that have a recommendation of must_have and pushing into an array
    if (element[1].Recommendation === 'must_have') {
      const goodPill = $(`[data-product='${element[0]}'] [data-pill='good']`);
      goodPill.css('display', 'none');
      recommendedPlans.push(element[0]); //[cgl]
      //var recommendedProduct = $(`[data-product=${element[0]}]`);
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
      changeSumInsured(element[0], largestSI); //sending the entire product data to findTheLargestSumInsured()
      calculation(element[0], radioButton[0].childNodes[2].checked);
    } else {
      console.log('this product is not recommende' + element[0]);
      const recPill = $(`[data-product='${element[0]}'] [data-pill='rec']`);
      recPill.css('display', 'none');
    }
  });
}

function findTheLargestSumInsured(productCode, product, fundingRound, revenueAmount) {
  const fundingSI = product.fundingJSON.find(({ category }) => category === fundingRound); //you will have to receive which funding category they chose over here
  console.log('the funding SI:');
  console.log(fundingSI);
  const revenueSI = product.revenueJSON.find(
    ({ category }) => category === revenueAmount //you will have to receive which revenue category they chose over here
  );
  const estimate = fundingSI.sumInsured > revenueSI.sumInsured ? fundingSI : revenueSI; //finding the largest SI for this particular product
  console.log('the sum insured is: ' + estimate.sumInsured);
  console.log('the price is: ' + estimate.price);
  chosenProductsMap = chosenProductsMap.set(
    productCode,
    new Map([
      ['price', estimate.price],
      ['si', estimate.sumInsured],
    ])
  );
  return estimate.sumInsured;
}

//main function
//global variables
var industryID = 2,
  fundingRound = 'seed',
  revenueAmount = '100cr',
  products = 0,
  specificProductElement,
  selectStatus,
  elementExists = false,
  price,
  companyName,
  totalPrice = 0,
  gstPrice = 0,
  noOfAssets = 0,
  valueOfAssets = 0,
  assetCost = 0,
  nameOfPerson,
  aiSelectStatus = false,
  grandTotal = 0,
  hubspotID = '42120551';
var values = {};
const productsAPI = new URL(
  `https://x8ki-letl-twmt.n7.xano.io/api:MR0gzHqf/industry?id=${industryID}`
);
var chosenProductsMap = new Map();
var productNamesMap = new Map([
  ['do', 'Directors and officers'],
  ['cgl', 'Commercial General Liability'],
  ['pi', 'Errors and omissions'],
  ['ci', 'Cyber Insurance'],
  ['ai', 'Asset insurance'],
  ['cd', 'Crime and Dishonesty'],
]);
const industryAPI = 'https://x8ki-letl-twmt.n7.xano.io/api:MR0gzHqf/get-all-industries';

// module.exports = { products };
var recommendedPlans = [];
//apiFetch(productsAPI); //at this point we have all the products related to the users industry

//calling the API to fetch industry details

document.addEventListener('DOMContentLoaded', getAllIndustries());

export default async function getAllIndustries() {
  await fetch(industryAPI)
    .then((response) => response.json())
    .then((data) => {
      listIndustries(data);
    });
}

//disable first option for all select field questions
function disableFirstOption() {
  const selectElements = document.querySelectorAll("[data-question='select']");
  selectElements.forEach((element) => {
    const { options } = element;
    options[0].disabled = true;
  });
}
