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

function modifySelectOptions(products) {
  products.forEach((element) => {
    var selectSIField = document.querySelector(`[data-si='${element[0]}']`);
    var tempProducts = element[1].fundingJSON;
    tempProducts.forEach((ele) => {
      //if the option does not exists add, else do nothing
      var optionExists = $(`[data-si='${element[0]}'] option[value=${ele.sumInsured}]`).length > 0;
      if (!optionExists) {
        let newOption = new Option(`₹${ele.sumInsured}cr`, `${ele.sumInsured}`);
        selectSIField.add(newOption);
      }
    });
  });
}

$('#first-continue-button').on('click', function () {
  nameOfPerson = $('#bi-name').val();
  $('#insert-name')[0].innerHTML = nameOfPerson;
});

$('#second-continue').on('click', async function () {
  //console.log('second continue button clicked');
  industryID = $('#bi-industry').val();
  //console.log(industryID);
  productsAPI.search = '?id=' + industryID;
  await apiFetch(productsAPI);
  companyName = $('#bi-company').val();
  $('#insert-company-name')[0].innerHTML = companyName;
  $('#insert-company-2')[0].innerHTML = companyName;
  createDataTwo(true);
  modifySelectOptions(products);
});

var myHeaders = new Headers();
myHeaders.append('Content-Type', 'application/json');

async function createContact(properties) {
  try {
    const response = await fetch(
      'https://business-insurance-estimator-sharvan-01.vercel.app/api/handler',
      {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify({ properties }),
        mode: 'cors',
      }
    );
    const data = await response.json();
    hubspotID = data.id;
    //console.log('the identifier is: ' + hubspotID);
  } catch (error) {
    console.error(error);
  }
}

async function updateContact(properties) {
  try {
    console.log('the update properties object');
    console.log(properties);
    const response = await fetch(
      'https://business-insurance-estimator-sharvan-01.vercel.app/api/handler',
      {
        method: 'PATCH',
        headers: myHeaders,
        body: JSON.stringify(properties),
        mode: 'cors',
      }
    );
    if (response.ok) {
      const data = await response.json();
      console.log('the data sent to update is:');
      console.log(data);
      //Handle success
    } else {
      const errorData = await response.json();
      console.log(errorData);
      // Handle error
    }
  } catch (error) {
    console.log(error);
  }
}

//when industry is selected call the products API
$('#bi-industry').change(function () {
  //console.log('change event triggered');
  industryID = $('#bi-industry').val();
  //console.log(industryID);
  productsAPI.search = '?id=' + industryID;
  apiFetch(productsAPI);
  //call the SELECT field updation function send the products variable and iterate through the SIs
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
  //console.log('industry ID');
  //console.log(industryID);
  //console.log('Does the estimate exist?');
  //console.log(estimateExists);
  if (!estimateExists) resetAllValues();
  products.forEach((element) => {
    // finding all elements that have a recommendation of no and disabling them
    if (element[1].Recommendation === 'No') {
      const temps = $(`[data-product='${element[0]}']`);
      //console.log(temps[0]);
      temps[0].style.display = 'none';
    }
  });
  if (!estimateExists) createDatabaseRecord();
  findRecommendedProducts(products);
  await createDataThree();

  //getting all the input values and sending them to the HS file
  // { firstname: "John", lastname: "Doe" }
});

function createDatabaseRecord() {
  var inputElements = document.querySelectorAll('.bi-form-input');
  inputElements.forEach((element) => {
    values.push(element.value);
    count += 1;
  });
  values.splice(5, 1);
  //console.log(values);

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
      //console.log('the response');
      //console.log(JSON.stringify(response.data));
      identifier = response.data;
      //console.log(identifier);
      createURL(identifier);
    })
    .catch((error) => {
      console.log(error);
    });
}

function createDataTwo() {
  var properties = {};
  var inputFields = document.querySelectorAll('input[data-screen="two"]');
  var selectFields = document.querySelectorAll('select[data-screen="two"]');
  const elements = [...inputFields, ...selectFields];
  //console.log(elements);
  elements.forEach((input) => {
    const internalName = input.dataset.internalname;
    const value = input.value;
    properties[internalName] = value;
  });
  properties['business_industry'] = $('#bi-industry :selected').text();
  values['property'] = properties;
  //console.log('second continue button data');
  //console.log(values.property);
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
    //console.log(e);
  }
}
//on final-submit we're showing a pop-up to book a call and submitting a record to HS

$('#final-submit').on('click', function () {
  finalDataSubmit();
});

function finalDataSubmit() {
  //console.log('final submit data');
  var products = Object.keys(Object.fromEntries(chosenProductsMap)).join(';');
  var properties = {};
  values['id'] = hubspotID; //the ID
  properties['bi_products'] = products; //the properties object
  properties['bi_grand_total'] = grandTotal;
  values['properties'] = properties;
  updateContact(values);
}

function resetAllValues() {
  products.forEach((element) => {
    setSumInsuredFieldStatus(element[0], false);
    const radioButton = $(`[data-checkbox=${element[0]}]`);
    if (radioButton[0].childNodes[2].checked) checkTheCheckbox(radioButton, element[0]);
  });
  recommendedPlans = [];
  chosenProductsMap.clear();
  totalPrice = 0;
  grandTotal = 0;
}

$('.bi-plan').on('click', function (e) {
  //console.log('this is the target');
  //console.log(e.target);
  //checking if click is on the SI SELECT
  if (e.target.nodeName === 'SELECT') {
    //console.log('click on select ');
    return;
  }

  if (e.target.nodeName === 'INPUT') {
    //console.log('click on input ');
    return;
  }

  //looping through all the products to find the selected product HTML
  const productCode = $(this).attr('data-product'); //getting product code
  //console.log('the product code');
  //console.log(productCode);

  if (e.target.attributes[1] && e.target.attributes[1].value === 'learn') {
    //console.log('click on learn ');
    return;
  }

  //if asset insurance
  if (productCode === 'ai') {
    chosenProductsMap.set('ai', new Map([['price', assetCost]]));
    //console.log('asset insurance is working');
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
    //console.log('the element[0]');
    //console.log(element[0]);
    if (element[0] === productCode) {
      //console.log('the element[1]');
      //console.log(element[1]);
      // eslint-disable-next-line prefer-destructuring
      specificProductElement = element[1];
      return;
    }
  });
  //console.log('the selected prod: ' + productCode);
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
  //console.log('the products current price is: ' + tempProd.get('price'));
  //subtracting the previous amount from the totalPrice
  totalPrice = parseInt(totalPrice) - parseInt(tempProd.get('price'));
  tempProd.set('price', newPrice);
  tempProd.set('si', newSI);
  //console.log(chosenProductsMap);
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
  if (noOfAssets >= 1) {
    $('#avg-cost').trigger('change');
    $('#no-of-assets').removeClass('error');
  } else {
    $('#no-of-assets').addClass('error');
  }
});
$('#avg-cost').change(function () {
  valueOfAssets = $('#avg-cost').val();
  noOfAssets = $('#no-of-assets').val();
  if (valueOfAssets >= 1) {
    $('#avg-cost').removeClass('error');
    if (valueOfAssets && noOfAssets > 1) {
      calculateAssetInsurance();
    }
  } else {
    $('#avg-cost').addClass('error');
  }
});

function calculateAssetInsurance() {
  assetCost = parseInt(noOfAssets) * parseInt(valueOfAssets) * 0.0125;
  //subtracting the previous asset cost from the total before proceding to add the new cost
  const prevProdDeets = chosenProductsMap.get('ai');
  const prevPrice = prevProdDeets.get('price');
  totalPrice = parseInt(totalPrice) - parseInt(prevPrice);
  //adding the new cost from here below
  totalPrice = parseInt(assetCost) + parseInt(totalPrice);
  grandTotal = parseInt(totalPrice) * 0.18 + parseInt(totalPrice);
  gstPrice = parseInt(totalPrice) * 0.18;
  chosenProductsMap.set('ai', new Map([['price', assetCost]]));
  $("[data-si='ai']").val = assetCost;
  const total = $("[data-element='total']")[0];
  const gst = $("[data-element='gst']")[0];
  const grandTotalElement = $("[data-element='grandTotal']")[0];
  const mGT = $('#grandTotal-mobile')[0];
  const mT = $('#total-mobile')[0];
  const mGST = $('#gst-mobile')[0];
  const mGTT = $('#grand-total-mobile')[0];
  total.innerHTML = totalPrice.toLocaleString('en-IN', {
    maximumFractionDigits: 0,
    style: 'currency',
    currency: 'INR',
  });
  mT.innerHTML = totalPrice.toLocaleString('en-IN', {
    maximumFractionDigits: 0,
    style: 'currency',
    currency: 'INR',
  });
  mGTT.innerHTML = grandTotal.toLocaleString('en-IN', {
    maximumFractionDigits: 0,
    style: 'currency',
    currency: 'INR',
  });
  mGST.innerHTML = gstPrice.toLocaleString('en-IN', {
    maximumFractionDigits: 0,
    style: 'currency',
    currency: 'INR',
  });
  grandTotalElement.innerHTML = grandTotal.toLocaleString('en-IN', {
    maximumFractionDigits: 0,
    style: 'currency',
    currency: 'INR',
  });
  mGTT.innerHTML = grandTotal.toLocaleString('en-IN', {
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
  mGST.innerHTML = gstPrice.toLocaleString('en-IN', {
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
  let pricingElementMobile = $("[data-price='ai']");
  pricingElementMobile = pricingElementMobile[1];
  pricingElementMobile.childNodes[1].innerHTML = parseInt(assetCost).toLocaleString('en-IN', {
    maximumFractionDigits: 0,
    style: 'currency',
    currency: 'INR',
  });
  //console.log(pricingElementMobile.childNodes[1]);
  //console.log(pricingElementMobile.childNodes[1].innerHTML);
}

function assetInsurance(aiSelectStatus) {
  assetInsuranceFieldStatus(aiSelectStatus);
  if (aiSelectStatus) {
    chosenProductsMap.set('ai', new Map([['price', assetCost]]));
    //checking if the pricing element exists
    if (document.querySelector(`[data-price='ai']`)) {
      const dataPrice = $("[data-price='ai']");
      dataPrice[0].style.display = 'flex';
      dataPrice[1].style.display = 'flex';
    }
    //if the pricing element does not exist create one and append it
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
  }
  //if assetInsurance is deselected
  else {
    //subtracting the asset cost from the total
    $('#avg-cost').removeClass('error');
    $('#no-of-assets').removeClass('error');
    const dataPrice = $("[data-price='ai']");
    const priceElement = dataPrice[0].childNodes[1];
    priceElement.innerHTML = '0';
    calculation('ai', false);
    $('#avg-cost')[0].value = '';
    $('#no-of-assets')[0].value = '';

    assetCost = 0;
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
  const mT = $('#total-mobile')[0];
  const mGST = $('#gst-mobile')[0];
  const mGTT = $('#grand-total-mobile')[0];
  const prodDeets = chosenProductsMap.get(productCode);
  const price = prodDeets.get('price');

  if (selectStatus) {
    if (document.querySelector(`[data-price='${productCode}']`)) {
      const dataPrice = $(`[data-price='${productCode}']`);
      dataPrice[0].style.display = 'flex';
      dataPrice[1].style.display = 'flex';
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
    mT.innerHTML = totalPrice.toLocaleString('en-IN', {
      maximumFractionDigits: 0,
      style: 'currency',
      currency: 'INR',
    });
    mGTT.innerHTML = grandTotal.toLocaleString('en-IN', {
      maximumFractionDigits: 0,
      style: 'currency',
      currency: 'INR',
    });
    mGST.innerHTML = gstPrice.toLocaleString('en-IN', {
      maximumFractionDigits: 0,
      style: 'currency',
      currency: 'INR',
    });
    $('.final-pricing-wrapper').append(newElement);
  } else {
    const dataPrice = $(`[data-price='${productCode}']`);
    //console.log('the price holder element');
    //console.log(dataPrice);
    dataPrice[0].style.display = 'none';
    dataPrice[1].style.display = 'none';
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
    mT.innerHTML = totalPrice.toLocaleString('en-IN', {
      maximumFractionDigits: 0,
      style: 'currency',
      currency: 'INR',
    });
    mGTT.innerHTML = grandTotal.toLocaleString('en-IN', {
      maximumFractionDigits: 0,
      style: 'currency',
      currency: 'INR',
    });
    mGST.innerHTML = gstPrice.toLocaleString('en-IN', {
      maximumFractionDigits: 0,
      style: 'currency',
      currency: 'INR',
    });
  }
}

//when user clicks the radio button prevent default
$("[data-element='radio']").click(function (e) {
  //console.log('yay');
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
      //console.log(api);
      saveProductData(data);
    });
}
// export { apiFetch };

function saveProductData(data) {
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
      //console.log('this product is not recommende' + element[0]);
      const recPill = $(`[data-product='${element[0]}'] [data-pill='rec']`);
      recPill.css('display', 'none');
    }
  });
}

function findTheLargestSumInsured(productCode, product, fundingRound, revenueAmount) {
  const fundingSI = product.fundingJSON.find(({ category }) => category === fundingRound); //you will have to receive which funding category they chose over here
  //console.log('the funding SI:');
  //console.log(fundingSI);
  const revenueSI = product.revenueJSON.find(
    ({ category }) => category === revenueAmount //you will have to receive which revenue category they chose over here
  );
  const estimate = fundingSI.sumInsured > revenueSI.sumInsured ? fundingSI : revenueSI; //finding the largest SI for this particular product
  //console.log('the sum insured is: ' + estimate.sumInsured);
  //console.log('the price is: ' + estimate.price);
  chosenProductsMap = chosenProductsMap.set(
    productCode,
    new Map([
      ['price', estimate.price],
      ['si', estimate.sumInsured],
    ])
  );
  return estimate.sumInsured;
}

//when user clicks on meeting text
var bookAMeeting = $('#book-a-call');

$('#bookMeeting').on('click', function () {
  //console.log('book meetin');
  bookAMeeting.css('display', 'flex');
  $('.business-body').css('overflow', 'hidden');
});

$("[data-element='close']").on('click', function () {
  bookAMeeting.css('display', 'none');
  $('.business-body').css('overflow', 'visible');
});

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
