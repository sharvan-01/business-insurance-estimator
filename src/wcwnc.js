var data = {
  do: {
    heading: 'Directors and officers (D&O) insurance',
    headingDesc:
      'A comprehensive solution for safeguarding the directors, officers and employees of your business against personal liabilities. Visit our directors and officers page to learn more.',
    'learn-more': 'https://plumhq.com/directos-and-officers',
    question: 'Who do we recommend directors and officers insurance for?',
    answer:
      'For technology, healthcare and manufacturing companies, directors and officers cover is crucial. Having said that, a D&O cover can safeguard every business, regardless of industry.',
    whatsCovered: [
      {
        one: 'Personal liability of the Directors & Officers',
        two: 'Losses incurred by the insured’s company',
        three:
          'Claims related to buying/selling/ownership of securities. (Only for listed companies)',
        four: 'Losses if sued by past/ present/ prospective employees owing to wrongful termination',
      },
    ],
    whatsNot: [
      {
        one: 'Product Liability',
        two: 'Prior acts / Intellectuak Property Rights',
        three: 'Medical Malpractice',
        four: 'Money Laundering',
      },
    ],
  },
  cgl: {
    heading: 'Commercial General Liability',
    headingDesc:
      'A commercial general liability policy helps protect a business against financial risks due to death, bodily injury or damage to property suffered by employees/ members of the  public/ other businesses.',
    question: 'Who do we recommend the commercial general liability cover for?',
    answer:
      'For companies in the technology, healthcare and professional services industries, Commercial General Liability (CGL) cover is recommended.',
    whatsCovered: [
      {
        one: 'Damage incurred by organizations due to any bodily injury',
        two: 'Damage incurred by organizations due to damage to property',
        three: 'Damage towards advertising related suits',
        four: 'Medical expenses due to accidental bodily injury',
      },
    ],
    whatsNot: [
      {
        one: 'Bodily injury/Property damage/Personal and advertising injury due to criminal acts',
        two: 'Bodily injury/Property damage/Personal and advertising injury due to breach of contract',
        three:
          'Bodily injury/Property damage/Personal and advertising injury due to Contractual/ professional Liability',
        four: 'Bodily injury/Property damage/Personal and advertising injury due to the use of electronic data',
      },
    ],
  },
  ci: {
    heading: 'Cybersecurity insurance',
    headingDesc:
      'A Cyber Liability policy helps protect an organisation from risks arising from information technology & infrastructure. It shields the team from financial repercussions and impact of cyber-attacks/ breaches / Ransomwares.',
    question: 'Who do we recommend the cybersecurity cover for?',
    answer:
      'We recommend cybersecurity insurance for any business that stores and handles sensitive data. It is particularly relevant for industries like technology , software development, healthcare and retail.',
    whatsCovered: [
      {
        one: 'Loss arising out of breach of privacy or security',
        two: 'Expenses incurred to prevent or end a Cyber Extortion Threat',
        three:
          'Expenses incurred to determine data restoration and privacy notifications to impacted individuals',
        four: 'Business interruption losses incurred by the company',
      },
    ],
    whatsNot: [
      {
        one: 'Bodily Injury/ Property Damage',
        two: 'Criminal, Dishonest and Fraudulent Acts',
        three: 'Prior Acts',
        four: 'Insolvency',
      },
    ],
  },
  eo: {
    heading: 'Errors and Omission (E&O) insurance',
    headingDesc:
      'A professional indemnity policy helps protect a business against financial risks arising out of a negligent act, error/ omission, unintentional breach of contract, or failure to render professional services to a party.',
    question: 'Who do we recommend the errors and omission cover for?',
    answer:
      'It is particularly relevant for industries like consulting and advisory, technology and software development and healthcare. However, any business that provides professional services to clients could benefit from E&O insurance.',
    whatsCovered: [
      {
        one: 'Costs arising from failure to fulfil a contract/ product delivery',
        two: 'Damages resulting from unauthorised access to computer systems due to destruction/ deletion/corruption of electronic data',
        three:
          'Negligence regarding the content of any media communication/ misappropriation of trade secret',
        four: 'Instances with regard to the infringement of copyright',
      },
    ],
    whatsNot: [
      {
        one: 'Any intentional, dishonest, fraudulent or criminal act',
        two: 'Bodily Injury',
        three: 'Property Damage',
        four: 'Breach of an express Warranty/ Breach of Guarantee',
      },
    ],
  },
  cd: {
    heading: 'Employee dishonesty insurance',
    headingDesc:
      'A crime and employee dishonesty policy protects a business against financial impairments stemming from any criminal acts committed by an employee/employees like money or securities.',
    question: 'Who do we recommend the employee dishonesty cover for?',
    answer:
      'We recommend employee dishonesty for any industry where employees have access to valuable assets or financial information.',
    whatsCovered: [
      {
        one: 'Legal fees',
        two: 'Court Attendance Costs',
        three: 'Cost of reconstituting data lost by the insured',
        four: 'Extortion Cost',
      },
    ],
    whatsNot: [
      {
        one: 'Prior or subsequent discovery of loss',
        two: 'Consequential loss',
        three: 'Kidnap and Ransom',
        four: 'War',
      },
    ],
  },
};
var modal = $('#bi-modal');
var callback = $('#bi-modal-2');
var close = $('#bi-modal-close');
$("[data-element='learn']").on('click', function () {
  var productCode = $(this).attr('data-product');
  console.log(productCode);
  var modal = $('#bi-modal');
  modal.css('display', 'flex');
  //heading
  var product = data[productCode];
  console.log(product);
  $("[data-modal='heading']")[0].innerHTML = product.heading;
  //headingDesc
  $("[data-modal='headingDesc']")[0].innerHTML = product.headingDesc;
  //question
  $("[data-modal='question']")[0].innerHTML = product.question;
  //answer
  $("[data-modal='answer']")[0].innerHTML = product.answer;
  //what's covered
  $("[data-modal='whatsCovered'] [data-modal-list='one']")[0].innerHTML =
    product.whatsCovered[0].one;
  $("[data-modal='whatsCovered'] [data-modal-list='two']")[0].innerHTML =
    product.whatsCovered[0].two;
  $("[data-modal='whatsCovered'] [data-modal-list='three']")[0].innerHTML =
    product.whatsCovered[0].three;
  $("[data-modal='whatsCovered'] [data-modal-list='four']")[0].innerHTML =
    product.whatsCovered[0].four;

  $("[data-modal='whatsNot'] [data-modal-list='one']")[0].innerHTML = product.whatsNot[0].one;
  $("[data-modal='whatsNot'] [data-modal-list='two']")[0].innerHTML = product.whatsNot[0].two;
  $("[data-modal='whatsNot'] [data-modal-list='three']")[0].innerHTML = product.whatsNot[0].three;
  $("[data-modal='whatsNot'] [data-modal-list='four']")[0].innerHTML = product.whatsNot[0].four;
});

$('#final-submit').on('click', function () {
  callback.css('display', 'flex');
});

$("[data-element='close']").on('click', function () {
  modal.css('display', 'none');
  callback.css('display', 'none');
});
