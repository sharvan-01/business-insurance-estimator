"use strict";
(() => {
  // bin/live-reload.js
  new EventSource(`${"http://localhost:3000"}/esbuild`).addEventListener("change", () => location.reload());

  // src/index.js
  function listIndustries(data) {
    const industryOption = Object.entries(data);
    industryOption.forEach((element) => {
      $("#bi-industry").append(
        `<option value="` + element[1].id + `">` + element[1].Industry_name + `</option>`
      );
    });
    disableFirstOption();
  }
  $("#first-continue-button").on("click", function() {
    nameOfPerson = $("#name").val();
    $("#insert-name")[0].innerHTML = nameOfPerson;
  });
  $("#second-continue").on("click", function() {
    console.log("second continue button clicked");
    industryID = $("#bi-industry").val();
    console.log(industryID);
    productsAPI.search = "?id=" + industryID;
    apiFetch(productsAPI);
    companyName = $("#company-name").val();
    $("#insert-company-name")[0].innerHTML = companyName;
    $("#insert-company-2")[0].innerHTML = companyName;
    const inputs = document.querySelectorAll('input[data-place="second"]');
    inputs.forEach((input) => {
      const internalName = input.dataset.internalname;
      const value = input.value;
      values[internalName] = value;
    });
    console.log("priting values of fields");
    console.log(values);
    createContact();
  });
  async function createContact() {
    const properties = {
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com"
    };
    try {
      const response = await fetch(
        "https://business-insurance-estimator-qod7dyl6g-sharvan-01.vercel.app/api/handler",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(properties)
        }
      );
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }
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
  $("#fourth-continue-button").on("click", function() {
    console.log("industry ID");
    console.log(industryID);
    resetAllValues();
    products.forEach((element) => {
      if (element[1].Recommendation === "No") {
        const temps = $(`[data-product='${element[0]}']`);
        console.log(temps[0]);
        temps[0].style.display = "none";
      }
    });
    findRecommendedProducts(products);
  });
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
    if (productCode === "ai" && document.querySelector("[data-price = 'ai']") === null) {
      console.log("asset insurance is working");
      assetInsurance();
      const assetRadioButton = $(`[data-checkbox=${productCode}]`);
      checkTheCheckbox(assetRadioButton, productCode);
      selectStatus = assetRadioButton[0].childNodes[2].checked;
      return;
    }
    if (productCode === "cd") {
      const RadioButton = $(`[data-checkbox=${productCode}]`);
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
    console.log(chosenProductsMap);
    calculation(selectedProduct, true);
  });
  function setSumInsuredFieldStatus(selectedProduct, selectStatus2) {
    if (selectStatus2)
      $(`[data-si='${selectedProduct}']`).prop("disabled", false);
    else
      $(`[data-si='${selectedProduct}']`).prop("disabled", true);
  }
  $("#no-of-assets").change(function() {
    noOfAssets = $("#no-of-assets").val();
  });
  $("#avg-cost").change(function() {
    valueOfAssets = $("#avg-cost").val();
    assetCost = parseInt(noOfAssets) * parseInt(valueOfAssets) * 0.0125;
    totalPrice = parseInt(assetCost) + parseInt(totalPrice);
    chosenProductsMap = chosenProductsMap.set("ai", /* @__PURE__ */ new Map([["price", assetCost]]));
    $("[data-si='ai']").val = assetCost;
    const total = $("[data-element='total']")[0];
    const gst = $("[data-element='gst']")[0];
    const grandTotalElement = $("[data-element='grandTotal']")[0];
    total[0].innerHTML = totalPrice.toLocaleString("en-IN", {
      maximumFractionDigits: 0,
      style: "currency",
      currency: "INR"
    });
    grandTotalElement[0].innerHTML = grandTotal.toLocaleString("en-IN", {
      maximumFractionDigits: 0,
      style: "currency",
      currency: "INR"
    });
    gst[0].innerHTML = gstPrice.toLocaleString("en-IN", {
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
  });
  function assetInsurance() {
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
    return;
  }
  function crimeInsurance(selectStatus2) {
    if (selectStatus2) {
      if (document.querySelector("[data-price='cd']")) {
        document.querySelector("[data-price='cd']").style.display = "flex";
      }
      if (!document.querySelector("[data-price='ci']")) {
        const newElement = $(".pricing-holder")[0].cloneNode(true);
        newElement.setAttribute("data-price", "cd");
        newElement.style.display = "flex";
        newElement.childNodes[0].innerHTML = productNamesMap.get("cd");
        newElement.childNodes[1].innerHTML = "Schedule a call";
        $(".final-pricing-wrapper").append(newElement);
      }
    } else {
      document.querySelector("[data-price='cd']").style.display = "none";
    }
  }
  function calculation(productCode, selectStatus2) {
    const total = $("[data-element='total']")[0];
    const gst = $("[data-element='gst']")[0];
    const grandTotalElement = $("[data-element='grandTotal']")[0];
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
      gst.innerHTML = gstPrice.toLocaleString("en-IN", {
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
    }
  }
  $("[data-element='radio']").click(function(e) {
    console.log("yay");
    e.preventDefault();
  });
  function changeSumInsured(product, largestSI) {
    const siField = $(`[data-si='${product}']`);
    siField[0].value = largestSI;
  }
  function checkTheCheckbox(radioButton, productName) {
    if (radioButton[0].childNodes[2].checked) {
      radioButton[0].childNodes[0].style.display = "none";
      radioButton[0].childNodes[2].checked = false;
      radioButton[0].childNodes[1].classList.remove("w--redirected-checked");
      var tempProd = $(`[data-product='${productName}']`);
      tempProd.removeClass("selected");
    } else {
      radioButton[0].childNodes[0].style.display = "block";
      radioButton[0].childNodes[2].checked = true;
      radioButton[0].childNodes[1].classList.add("w--redirected-checked");
      var tempProd = $(`[data-product='${productName}']`);
      tempProd.addClass("selected");
    }
  }
  async function apiFetch(api) {
    await fetch(api).then((response) => response.json()).then((data) => {
      console.log(api);
      saveProductData(data);
    });
  }
  function saveProductData(data) {
    products = Object.entries(data);
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
  var industryID = 2;
  var fundingRound = "seed";
  var revenueAmount = "100cr";
  var products = 0;
  var specificProductElement;
  var selectStatus;
  var companyName;
  var totalPrice = 0;
  var gstPrice = 0;
  var noOfAssets = 0;
  var valueOfAssets = 0;
  var assetCost = 0;
  var nameOfPerson;
  var grandTotal = 0;
  var values = {};
  var productsAPI = new URL(
    `https://x8ki-letl-twmt.n7.xano.io/api:MR0gzHqf/industry?id=${industryID}`
  );
  var chosenProductsMap = /* @__PURE__ */ new Map();
  var productNamesMap = /* @__PURE__ */ new Map([
    ["do", "Directors and officers"],
    ["cgl", "Commercial General Liability"],
    ["pi", "Errors and omissions"],
    ["ci", "Cyber Insurance"],
    ["ai", "Asset insurance"],
    ["cd", "Crime and Dishonesty"]
  ]);
  var industryAPI = "https://x8ki-letl-twmt.n7.xano.io/api:MR0gzHqf/get-all-industries";
  var recommendedPlans = [];
  document.addEventListener(
    "DOMContentLoaded",
    function() {
      fetch(industryAPI).then((response) => response.json()).then((data) => {
        listIndustries(data);
      });
    },
    false
  );
  function disableFirstOption() {
    const selectElements = document.querySelectorAll("[data-question='select']");
    selectElements.forEach((element) => {
      const { options } = element;
      options[0].disabled = true;
    });
  }
})();
//# sourceMappingURL=index.js.map
