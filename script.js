// var materialize_css = document.createElement('link');
// materialize_css.rel = 'stylesheet';
// materialize_css.href =
//   'https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css';
// document.head.appendChild(materialize_css);

// var mstepper_css = document.createElement('link');
// mstepper_css.rel = 'stylesheet';
// mstepper_css.href =
//   'https://unpkg.com/materialize-stepper@3.1.0/dist/css/mstepper.min.css';
// document.head.appendChild(mstepper_css);

//accessing id
var notary = document.querySelector('.notary-id');
var notary_id = notary.id;
console.log(notary_id);
document.body.removeChild(notary);

//creating a box
var formBox = document.createElement('div');
formBox.className = 'form-box';
document.body.appendChild(formBox);

//svg
var svg = document.createElement('div');
svg.className = 'icon-svg';
formBox.appendChild(svg);

//creating modal
var modal = document.createElement('div');
modal.className = 'form-modal';
modal.id="form_modal";
document.body.appendChild(modal);

//creating a card
var card = document.createElement('div');
card.className = 'card form-style';
modal.appendChild(card);

//creating a header for image
var header = document.createElement('header');
header.className = 'header-inside';
card.appendChild(header);

//creating a img
var img = document.createElement('img');
img.src = notary.attributes.src.value;

img.className = 'dp-image';
img.alt = 'Profile Pic';
header.appendChild(img);

//profileName
var profileName = document.createElement('h5');
profileName.innerHTML = notary.attributes.name.value;
header.appendChild(profileName);

//profileSubtitle
var profileSubtitle = document.createElement('p');
profileSubtitle.innerHTML = notary.attributes.subtitle.value;
header.appendChild(profileSubtitle);

//Title
var title = document.createElement('h6');
title.innerHTML = 'Make an Appointment Today';
header.appendChild(title);

// creating card-content
var cardContent = document.createElement('div');
cardContent.className = 'card-content';
card.appendChild(cardContent);

//creating a form
var form = document.createElement('form');
cardContent.appendChild(form);

//creating ul for form elements
var ul = document.createElement('ul');
ul.className = 'stepper demos';
form.appendChild(ul);

//step1:- creating customer-info
var customerInfo_li = document.createElement('li');
customerInfo_li.className = 'step active';

ul.appendChild(customerInfo_li);

var customerInfo_div = document.createElement('div');
customerInfo_div.className = 'step-title waves-effect waves-dark';
customerInfo_div.innerHTML = ' Customer Info';
customerInfo_li.appendChild(customerInfo_div);

var customerInfo_stepContent = document.createElement('div');
customerInfo_stepContent.className = 'step-content';
customerInfo_li.appendChild(customerInfo_stepContent);

var customerInfo_row = document.createElement('div');
customerInfo_row.className = 'row';
customerInfo_stepContent.appendChild(customerInfo_row);

//first name
var firstName = document.createElement('div');
firstName.className = 'input-field col m5';
customerInfo_row.appendChild(firstName);

var firstName_input = document.createElement('input');
firstName_input.className = 'validate ';
firstName_input.required = '';
firstName_input.id = 'non_linear_firstName';
firstName_input.name = 'non_linear_firstName';
firstName_input.type = 'text';
firstName_input.placeholder = 'First Name';
firstName.appendChild(firstName_input);

// var firstName_label = document.createElement('label');
// firstName_label.setAttribute('for', 'non_linear_firstName');
// firstName_label.innerHTML = 'First Name';
// firstName.appendChild(firstName_label);

//last name
var lastName = document.createElement('div');
lastName.className = 'input-field col m5';
customerInfo_row.appendChild(lastName);

var lastName_input = document.createElement('input');
lastName_input.className = 'validate  ';
lastName_input.required = '';
lastName_input.id = 'non_linear_lastName';
lastName_input.name = 'non_linear_lastName';
lastName_input.type = 'text';
lastName_input.placeholder = 'Last Name';
lastName.appendChild(lastName_input);

// var lastName_label = document.createElement('label');
// lastName_label.setAttribute('for', 'non_linear_lastName');
// lastName_label.innerHTML = 'Last Name*';
// lastName.appendChild(lastName_label);

//Email

var email = document.createElement('div');
email.className = 'input-field col m5';
customerInfo_row.appendChild(email);

var email_input = document.createElement('input');
email_input.className = 'validate  ';
email_input.required = '';
email_input.id = 'non_linear_email';
email_input.name = 'non_linear_email';
email_input.type = 'email';
email_input.placeholder = 'Enter Email';
email.appendChild(email_input);

// var email_label = document.createElement('label');
// email_label.setAttribute('for', 'non_linear_email');
// email_label.innerHTML = 'Email*';
// email.appendChild(email_label);

//Phone
var phone = document.createElement('div');
phone.className = 'input-field col m5';
customerInfo_row.appendChild(phone);

var phone_input = document.createElement('input');
phone_input.className = 'validate  ';
phone_input.required = '';
phone_input.id = 'non_linear_phone';
phone_input.name = 'non_linear_phone';
phone_input.type = 'num';
phone_input.placeholder = 'Phone';
phone.appendChild(phone_input);

// var phone_label = document.createElement('label');
// phone_label.setAttribute('for', 'non_linear_phone');
// phone_label.innerHTML = 'Phone*';
// phone.appendChild(phone_label);

//company_checkbox details
var company_checkbox = document.createElement('div');
company_checkbox.className = 'input-field';
customerInfo_row.appendChild(company_checkbox);

var company_checkbox_input = document.createElement('input');
company_checkbox_input.id = 'non_linear_company_checkbox';
company_checkbox_input.name = 'non_linear_company_checkbox';
company_checkbox_input.type = 'checkbox';
company_checkbox.appendChild(company_checkbox_input);

var company_checkbox_label = document.createElement('label');
company_checkbox_label.setAttribute('for', 'non_linear_company_checkbox');
company_checkbox_label.innerHTML = 'Add Company Details(optional)';
company_checkbox_label.className = 'checkbox_spacing';
company_checkbox.appendChild(company_checkbox_label);

//company details

var company_name = document.createElement('div');
company_name.className = 'input-field col s10 company';
customerInfo_row.appendChild(company_name);

var company_name_input = document.createElement('input');
company_name_input.className = 'validate plugin-full';
company_name_input.id = 'non_linear_company_name';
company_name_input.name = 'non_linear_company_name';
company_name_input.type = 'text';
company_name_input.placeholder = 'Company Name';
company_name.appendChild(company_name_input);


var comp_email = document.createElement('div');
comp_email.className = 'input-field col m5 company';
customerInfo_row.appendChild(comp_email);

var comp_email_input = document.createElement('input');
comp_email_input.className = 'validate  ';
comp_email_input.required = '';
comp_email_input.id = 'non_linear_comp_email';
comp_email_input.name = 'non_linear_comp_email';
comp_email_input.type = 'email';
comp_email_input.placeholder = 'Company Email';
comp_email.appendChild(comp_email_input);


var comp_phone = document.createElement('div');
comp_phone.className = 'input-field col m5 company';
customerInfo_row.appendChild(comp_phone);

var comp_phone_input = document.createElement('input');
comp_phone_input.className = 'validate  ';
comp_phone_input.required = '';
comp_phone_input.id = 'non_linear_comp_phone';
comp_phone_input.name = 'non_linear_comp_phone';
comp_phone_input.type = 'num';
comp_phone_input.placeholder = 'Phone';
comp_phone.appendChild(comp_phone_input);



var company_street = document.createElement('div');
company_street.className = 'input-field col m5 company';
customerInfo_row.appendChild(company_street);

var company_street_input = document.createElement('input');
company_street_input.className = 'validate';
company_street_input.id = 'non_linear_company_street';
company_street_input.name = 'non_linear_company_street';
company_street_input.type = 'text';
company_street_input.placeholder = 'Street';
company_street.appendChild(company_street_input);

// var company_street_label = document.createElement('label');
// company_street_label.setAttribute('for', 'non_linear_company_street');
// company_street_label.innerHTML = 'Street';
// company_street.appendChild(company_street_label);

//company_city
var company_city = document.createElement('div');
company_city.className = 'input-field col m5 company';
customerInfo_row.appendChild(company_city);

var company_city_input = document.createElement('input');
company_city_input.className = 'validate';
company_city_input.id = 'non_linear_company_city';
company_city_input.name = 'non_linear_company_city';
company_city_input.type = 'text';
company_city_input.placeholder = 'City';
company_city.appendChild(company_city_input);

// var company_city_label = document.createElement('label');
// company_city_label.setAttribute('for', 'non_linear_company_city');
// company_city_label.innerHTML = 'City';
// company_city.appendChild(company_city_label);

//company_state
var company_state = document.createElement('div');
company_state.className = 'input-field col m5 company';
customerInfo_row.appendChild(company_state);

var company_state_input = document.createElement('input');
company_state_input.className = 'validate';
company_state_input.id = 'non_linear_company_state';
company_state_input.name = 'non_linear_company_state';
company_state_input.type = 'text';
company_state_input.placeholder = 'State';
company_state.appendChild(company_state_input);

// var company_state_label = document.createElement('label');
// company_state_label.setAttribute('for', 'non_linear_company_state');
// company_state_label.innerHTML = 'State';
// company_state.appendChild(company_state_label);

//company_zipcode
var company_zipcode = document.createElement('div');
company_zipcode.className = 'input-field col m5 company';
customerInfo_row.appendChild(company_zipcode);

var company_zipcode_input = document.createElement('input');
company_zipcode_input.className = 'validate ';
company_zipcode_input.id = 'non_linear_company_zipcode';
company_zipcode_input.name = 'non_linear_company_zipcode';
company_zipcode_input.type = 'number';
company_zipcode_input.placeholder = 'Zipcode';
company_zipcode.appendChild(company_zipcode_input);

// var company_zipcode_label = document.createElement('label');
// company_zipcode_label.setAttribute('for', 'non_linear_company_zipcode');
// company_zipcode_label.innerHTML = 'Zipcode';
// company_zipcode.appendChild(company_zipcode_label);

//checkbox funtion
company_checkbox_input.onchange = (e) => {
  var style = document.getElementsByClassName('company');
  if (e.target.checked) {
    for (let i = 0; i < style.length; i++) {
      style[i].style.display = 'unset';
    }
  } else {
    for (let i = 0; i < style.length; i++) {
      style[i].style.display = 'none  ';
    }
  }
};

//step-actions
var stepActions1 = document.createElement('div');
stepActions1.className = 'step-actions';
customerInfo_stepContent.appendChild(stepActions1);

var btn1 = document.createElement('button');
btn1.className = 'waves-effect waves-dark btn btn-primary blue next-step';
btn1.innerHTML = 'CONTINUE';
btn1.setAttribute('data-validator', 'validateStepOne');
stepActions1.appendChild(btn1);

//step2:- creating signer-info
var signerInfo_li = document.createElement('li');
signerInfo_li.className = 'step';

ul.appendChild(signerInfo_li);

var signerInfo_div = document.createElement('div');
signerInfo_div.className = 'step-title waves-effect waves-dark';
signerInfo_div.innerHTML = ' Signer Info';
signerInfo_li.appendChild(signerInfo_div);

var signerInfo_stepContent = document.createElement('div');
signerInfo_stepContent.className = 'step-content';
signerInfo_li.appendChild(signerInfo_stepContent);

var signerInfo_row = document.createElement('div');
signerInfo_row.className = 'row';
signerInfo_stepContent.appendChild(signerInfo_row);

//first name
var firstNameS = document.createElement('div');
firstNameS.className = 'input-field col m5';
signerInfo_row.appendChild(firstNameS);

var firstNameS_input = document.createElement('input');
firstNameS_input.className = 'validate  ';
firstNameS_input.required = '';
firstNameS_input.id = 'non_linear_firstNameS';
firstNameS_input.name = 'non_linear_firstNameS';
firstNameS_input.type = 'text';
firstNameS_input.placeholder = 'First Name';
firstNameS.appendChild(firstNameS_input);

// var firstNameS_label = document.createElement('label');
// firstNameS_label.setAttribute('for', 'non_linear_firstNameS');
// firstNameS_label.innerHTML = 'First Name*';
// firstNameS.appendChild(firstNameS_label);

//last name
var lastNameS = document.createElement('div');
lastNameS.className = 'input-field col m5';
signerInfo_row.appendChild(lastNameS);

var lastNameS_input = document.createElement('input');
lastNameS_input.className = 'validate  ';
lastNameS_input.required = '';
lastNameS_input.id = 'non_linear_lastNameS';
lastNameS_input.name = 'non_linear_lastNameS';
lastNameS_input.type = 'text';
lastNameS_input.placeholder = 'Last Name';
lastNameS.appendChild(lastNameS_input);

// var lastNameS_label = document.createElement('label');
// lastNameS_label.setAttribute('for', 'non_linear_lastNameS');
// lastNameS_label.innerHTML = 'Last Name*';
// lastNameS.appendChild(lastNameS_label);

//emailS
var emailS = document.createElement('div');
emailS.className = 'input-field col m5';
signerInfo_row.appendChild(emailS);

var emailS_input = document.createElement('input');
emailS_input.className = 'validate  ';
emailS_input.required = '';
emailS_input.id = 'non_linear_emailS';
emailS_input.name = 'non_linear_emailS';
emailS_input.type = 'email';
emailS_input.placeholder = 'Email';
emailS.appendChild(emailS_input);

// var emailS_label = document.createElement('label');
// emailS_label.setAttribute('for', 'non_linear_emailS');
// emailS_label.innerHTML = 'Email*';
// emailS.appendChild(emailS_label);

//phoneS
var phoneS = document.createElement('div');
phoneS.className = 'input-field col m5';
signerInfo_row.appendChild(phoneS);

var phoneS_input = document.createElement('input');
phoneS_input.className = 'validate  ';
phoneS_input.required = '';
phoneS_input.id = 'non_linear_phoneS';
phoneS_input.name = 'non_linear_phoneS';
phoneS_input.type = 'num';
phoneS_input.placeholder = 'Phone';
phoneS.appendChild(phoneS_input);

// var phoneS_label = document.createElement('label');
// phoneS_label.setAttribute('for', 'non_linear_phoneS');
// phoneS_label.innerHTML = 'Phone*';
// phoneS.appendChild(phoneS_label);

//inPerson_checkbox details
var inPerson_checkbox = document.createElement('div');
inPerson_checkbox.className = 'input-field';
signerInfo_row.appendChild(inPerson_checkbox);

var inPerson_checkbox_input = document.createElement('input');
inPerson_checkbox_input.id = 'non_linear_inPerson_checkbox';
inPerson_checkbox_input.name = 'non_linear_inPerson_checkbox';
inPerson_checkbox_input.type = 'checkbox';
inPerson_checkbox.appendChild(inPerson_checkbox_input);

var property_checkbox = document.createElement('label');
property_checkbox.setAttribute('for', 'non_linear_inPerson_checkbox');
property_checkbox.innerHTML = 'This is Real-Estate Related Signing';
property_checkbox.className = 'checkbox_spacing';
inPerson_checkbox.appendChild(property_checkbox);

//escrow
var escrow = document.createElement('div');
escrow.className = 'input-field col m5 inPerson';
signerInfo_row.appendChild(escrow);

var escrow_input = document.createElement('input');
escrow_input.className = 'validate';
escrow_input.required = '';
escrow_input.id = 'non_linear_escrow';
escrow_input.name = 'non_linear_escrow';
escrow_input.type = 'text';
escrow_input.placeholder = 'Escrow Number';
escrow.appendChild(escrow_input);

// var escrow_label = document.createElement('label');
// escrow_label.setAttribute('for', 'non_linear_escrow');
// escrow_label.innerHTML = 'Escrow Number';
// escrow.appendChild(escrow_label);

//property_address
var property_address = document.createElement('div');
property_address.className = 'input-field col m5 inPerson';
signerInfo_row.appendChild(property_address);

var property_address_input = document.createElement('input');
property_address_input.className = 'validate';
property_address_input.required = '';
property_address_input.id = 'non_linear_property_address';
property_address_input.name = 'non_linear_property_address';
property_address_input.type = 'text';
property_address_input.placeholder = 'Property Address';
property_address.appendChild(property_address_input);

// var property_address_label = document.createElement('label');
// property_address_label.setAttribute('for', 'non_linear_property_address');
// property_address_label.innerHTML = 'Property Address';
// property_address.appendChild(property_address_label);

//checkbox funtion
inPerson_checkbox_input.onchange = (e) => {
  var style = document.getElementsByClassName('inPerson');
  if (e.target.checked) {
    for (let i = 0; i < style.length; i++) {
      style[i].style.display = 'unset';
    }
  } else {
    for (let i = 0; i < style.length; i++) {
      style[i].style.display = 'none  ';
    }
  }
};

//step-actions
var stepActions2 = document.createElement('div');
stepActions2.className = 'step-actions';
signerInfo_stepContent.appendChild(stepActions2);

var btn2_2 = document.createElement('button');
btn2_2.className = 'waves-effect waves-dark btn btn-primary previous-step';
btn2_2.innerHTML = 'BACK';
btn2_2.type = 'button';
stepActions2.appendChild(btn2_2);

var btn2_1 = document.createElement('button');
btn2_1.className = 'waves-effect waves-dark btn btn-primary next-step';
btn2_1.innerHTML = 'CONTINUE';
btn2_1.type = 'button';
stepActions2.appendChild(btn2_1);

//step3:- creating appointment-info
var appointmentInfo_li = document.createElement('li');
appointmentInfo_li.className = 'step';

ul.appendChild(appointmentInfo_li);

var appointmentInfo_div = document.createElement('div');
appointmentInfo_div.className = 'step-title waves-effect waves-dark';
appointmentInfo_div.innerHTML = 'Appointement Info';
appointmentInfo_li.appendChild(appointmentInfo_div);

var appointmentInfo_stepContent = document.createElement('div');
appointmentInfo_stepContent.className = 'step-content';
appointmentInfo_li.appendChild(appointmentInfo_stepContent);

var appointmentInfo_row = document.createElement('div');
appointmentInfo_row.className = 'row';
appointmentInfo_stepContent.appendChild(appointmentInfo_row);

//date
var date = document.createElement('div');
date.className = 'input-field col m5';
appointmentInfo_row.appendChild(date);

var date_input = document.createElement('input');
date_input.className = 'validate  ';
date_input.required = '';
date_input.id = 'non_linear_date';
date_input.name = 'non_linear_date';
date_input.type = 'date';
date.appendChild(date_input);

// var date_label = document.createElement('label');
// date_label.setAttribute('for', 'non_linear_date');
// date_label.innerHTML = 'Date*';
// date.appendChild(date_label);

//time
var time = document.createElement('div');
time.className = 'input-field col m5';
appointmentInfo_row.appendChild(time);

var time_input = document.createElement('input');
time_input.className = 'validate  ';
time_input.required = '';
time_input.id = 'non_linear_time';
time_input.name = 'non_linear_time';
time_input.type = 'time';
time.appendChild(time_input);

// var time_label = document.createElement('label');
// time_label.setAttribute('for', 'non_linear_time');
// time_label.innerHTML = 'Time*';
// time.appendChild(time_label);

//inPerson2_checkbox details
var inPerson2_checkbox = document.createElement('div');
inPerson2_checkbox.className = 'input-field';
appointmentInfo_row.appendChild(inPerson2_checkbox);

var inPerson2_checkbox_input = document.createElement('input');
inPerson2_checkbox_input.id = 'non_linear_inPerson2_checkbox';
inPerson2_checkbox_input.name = 'non_linear_inPerson2_checkbox';
inPerson2_checkbox_input.type = 'checkbox';
inPerson2_checkbox.appendChild(inPerson2_checkbox_input);

var inPerson2_checkbox_label = document.createElement('label');
inPerson2_checkbox_label.setAttribute('for', 'non_linear_inPerson2_checkbox');
inPerson2_checkbox_label.innerHTML = 'This is a In-Person Signing';
inPerson2_checkbox_label.className = 'checkbox_spacing';
inPerson2_checkbox.appendChild(inPerson2_checkbox_label);

//signing_location
var signing_location = document.createElement('div');
signing_location.className = 'input-field col m5 inPerson2';
appointmentInfo_row.appendChild(signing_location);

var signing_location_input = document.createElement('input');
signing_location_input.className = 'validate';
signing_location_input.required = '';
signing_location_input.id = 'non_linear_signing_location';
signing_location_input.name = 'non_linear_signing_location';
signing_location_input.type = 'text';
signing_location_input.placeholder = 'Signing Location';
signing_location.appendChild(signing_location_input);

var span_text = document.createElement('span');
span_text.innerText = 'Please enter proper Street / Landmark Address'
span_text.id = 'address_span_text'
span_text.style = 'color:red;margin-left:10px;display: none;'
signing_location.appendChild(span_text);

// var signing_location_label = document.createElement('label');
// signing_location_label.setAttribute('for', 'non_linear_signing_location');
// signing_location_label.innerHTML = 'Signing Location';
// signing_location.appendChild(signing_location_label);

//checkbox funtion
inPerson2_checkbox_input.onchange = (e) => {
  var style2 = document.getElementsByClassName('inPerson2');
  if (e.target.checked) {
    for (let i = 0; i < style2.length; i++) {
      style2[i].style.display = 'unset';
    }
  } else {
    for (let i = 0; i < style2.length; i++) {
      style2[i].style.display = 'none  ';
    }
  }
};

//step-actions
var stepActions3 = document.createElement('div');
stepActions3.className = 'step-actions';
appointmentInfo_stepContent.appendChild(stepActions3);

var btn3_2 = document.createElement('button');
btn3_2.className = 'waves-effect waves-dark btn btn-primary previous-step';
btn3_2.innerHTML = 'BACK';
btn3_2.type = 'button';
stepActions3.appendChild(btn3_2);

var btn3_1 = document.createElement('button');
btn3_1.className = 'waves-effect waves-dark btn btn-success';
btn3_1.innerHTML = 'Finish';
btn3_1.type = 'submit';
btn3_1.id = 'submit';
stepActions3.appendChild(btn3_1);


var placeId = null; // to Track which place was selected
var isOnlineSignig = true;
// open modal
formBox.addEventListener('click', () => {
  if (modal.style.display === 'unset') modal.style.display = 'none';
  else modal.style.display = 'unset';
});

//close modal
modal.addEventListener('click', (e) => {
  if (e.target.className === 'form-modal') modal.style.display = 'none';
});

// To validate date is in past

function isInThePast(date) {
  const today = new Date();
  console.log('date--', date)
  // 👇️ OPTIONAL!
  // This line sets the hour of the current date to midnight
  // so the comparison only returns `true` if the passed in date
  // is at least yesterday
  today.setHours(0, 0, 0, 0);

  console.log(date < today)
  return date < today;
}

//form submit
form.onsubmit = async (e) => {
  e.preventDefault();
  //body
  if (e.target.non_linear_firstName.value && e.target.non_linear_lastName.value && e.target.non_linear_phone.value && e.target.non_linear_firstNameS.value && e.target.non_linear_lastNameS.value && e.target.non_linear_phoneS.value) {
    if (e.target.non_linear_time.value && e.target.non_linear_date.value) {

      if (isInThePast(e.target.non_linear_date.value)) {

        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Appointment Date should always in future.',
        })

      }
      else {

        console.log('location checked--', e.target.non_linear_inPerson2_checkbox.checked)
        if (e.target.non_linear_inPerson2_checkbox.checked) {

          console.log('PlaceID--', e.target.non_linear_signing_location.getAttribute('data'))
          if (e.target.non_linear_signing_location.getAttribute('data')) {
            placeId = e.target.non_linear_signing_location.getAttribute('data');
            isOnlineSignig = false;

          }

          if (placeId === null) {
            // show Swal Error as place needs to be selected 
            Swal.fire({
              icon: 'error',
              title: 'Enter Signing Location',
              text: 'In Person Appointments needs a Signing Location',
            });
            return;

          }
        }
        // 3. Parse Time as Decimal .ie 4.14 o r 04.14 , it is being sent as a string  

        const body = {
          notaryId: notary_id,
          endCustomerInfo: {
            firstName: e.target.non_linear_firstName.value,
            lastName: e.target.non_linear_lastName.value,
            email: e.target.non_linear_email.value,
            phoneNumber: e.target.non_linear_phone.value,
            countryCode: '+1',
            defaultTZ: 'e423rdf',
            company: {
              name: e.target.non_linear_company_name.value,
              email: e.target.non_linear_comp_email.value,
              phone: e.target.non_linear_comp_phone.value,
              streetAddress: e.target.non_linear_company_street.value,
              // area: e.target.non_linear_company_name.value,
              city: e.target.non_linear_company_city.value,
              state: e.target.non_linear_company_state.value,
              country: 'US'
            },
          },
          fromPlugin: true,
          isPropertySigning: e.target.non_linear_inPerson_checkbox.checked,
          isOnlineSigning: isOnlineSignig,
          placeId: placeId, // if isOnlineSignig is false ( placeId needs to be pResent)
          appointmentInfo: {
            date: e.target.non_linear_date.value,
            time: parseFloat(e.target.non_linear_time.value),
            durationofAppointment: 1,
            // this can be keep null on all fields
            // since we will be using placeId in the backend to get latitude and Longtidude

            place: {
              completeAddress: 'ewffverver',
              lat: 234235345,
              lon: 534456345,
              zipcode: 343234,
              area: 'hisar',
              city: 'hisar',
              state: 'haryana',
              streetAddress: 'sgfergerg',
            },
          },
          signingInfo: {
            escrowNumber: e.target.non_linear_escrow.value,
            signerInfo:
            {
              fisrtName: e.target.non_linear_firstNameS.value,
              lastName: e.target.non_linear_lastNameS.value,
              email: e.target.non_linear_emailS.value,
              phoneNumber: e.target.non_linear_phoneS.value,
              countryCode: '+1',
            },
            propertyAddress: e.target.non_linear_property_address.value
          },
        };
        modal.style.display = 'none';
        Swal.fire({
          title: 'Please Wait !',
          html: 'Processing',
          allowOutsideClick: false,
          showConfirmButton: false,
          onBeforeOpen: () => {
            Swal.showLoading();
          },
        });

        console.log("Request body " + JSON.stringify(body));
        const response = await fetch(
          'https://notaryapp-staging.herokuapp.com/appointment/createAppointment',
          // 'http://localhost:5000/appointment/createAppointment',
          {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
          }
        );

        response.json().then((data) => {
          console.log("Data" + JSON.stringify(data));
          if (data.status == 1) {
            Swal.fire('Successful!', 'Appointment!', 'success');
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Something went wrong!',
              footer: 'Call us at 1234567890',
            });
          }
          console.log(data);
        }); 77

        // console.log(e.target.non_linear_inPerson_checkbox_input.checked);

      }
    }
    else {

      // show Swal Error 
      Swal.fire({
        icon: 'warning',
        title: 'Oops...',
        text: 'Appointment Date and time required.',
      });
    }

  }
  else {

    // show Swal Error 
    Swal.fire({
      icon: 'warning',
      title: 'Oops...',
      text: 'Customer and Signer Details required.',
    });
  }
};



// function getMatchingPlaces(text) {
//   let places = []
//   console.log('text--', text)
//   let body = {
//     text: text,
//     notaryId: notary_id
//   }
//   fetch(
//     'https://notaryapi1.herokuapp.com/dashboard/getPlaces',
//     {
//       method: 'POST',
//       headers: {
//         Accept: 'application/json',
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(body),
//     }
//   ).then((response) => {
//     return response.json();
//   })
//     .then((data) => {
//       if (data.status == 1) {
//         data.places.forEach(element => {
//           console.log('element--', element)
//           places.push(element)
//         });
//       }

//     });
// }


// function placeSelected(placeId) {
//   this.placeId = placeId;
// }



function validateStepOne() {
  // Extract the checked checkboxes from the first step
  console.log('hello');
  if ($('.step').first().find('input[type="checkbox"]:checked').length)
    return true;
  return false;
}

function validateStepThree() {
  var validation = true;
  if (
    $('.step:nth-child(3) input[type="text"]').val().indexOf('materialize') ===
    -1
  )
    validation = false;
  if ($('.step:nth-child(3) input[type="checkbox"]:checked').length === 0)
    validation = false;
  return validation;
}

function nextStepThreeHandler() {
  if (validateStepThree()) $('.stepper').nextStep();
  else {
    $('.stepper ').destroyFeedback();
    $('.stepper').getStep($('.stepper').getActiveStep()).addClass('wrong');
  }
}

/* Materializecss Stepper - By Kinark 2016
https://github.com/Kinark/Materialize-stepper
JS v2.1.3
*/

var validation = $.isFunction($.fn.valid) ? 1 : 0;

$.fn.isValid = function () {
  if (validation) {
    return this.valid();
  } else {
    return true;
  }
};

if (validation) {
  $.validator.setDefaults({
    errorClass: 'invalid',
    validClass: 'valid',
    errorPlacement: function (error, element) {
      if (element.is(':radio') || element.is(':checkbox')) {
        error.insertBefore($(element).parent());
      } else {
        error.insertAfter(element); // default error placement.
        // element.closest('label').data('error', error);
        // element.next().attr('data-error', error);
      }
    },
    success: function (element) {
      if (!$(element).closest('li').find('label.invalid:not(:empty)').length) {
        $(element).closest('li').removeClass('wrong');
      }
    },
  });

  // When parallel stepper is defined we need to consider invisible and
  // hidden fields
  if ($('.stepper.parallel').length) $.validator.setDefaults({ ignore: '' });
}

$.fn.getActiveStep = function () {
  var active = this.find('.step.active');
  return $(this.children('.step:visible')).index($(active)) + 1;
};

$.fn.activateStep = function (callback) {
  if ($(this).hasClass('step')) return;
  var stepper = $(this).closest('ul.stepper');
  stepper.find('>li').removeAttr('data-last');
  if (window.innerWidth < 993 || !stepper.hasClass('horizontal')) {
    $(this)
      .addClass('step')
      .stop()
      .slideDown(400, function () {
        $(this).css({
          height: 'auto',
          'margin-bottom': '',
          display: 'inherit',
        });
        if (callback) callback();
        stepper.find('>li.step').last().attr('data-last', 'true');
      });
  } else {
    $(this)
      .addClass('step')
      .stop()
      .css({ width: '0%', display: 'inherit' })
      .animate({ width: '100%' }, 400, function () {
        $(this).css({
          height: 'auto',
          'margin-bottom': '',
          display: 'inherit',
        });
        if (callback) callback();
        stepper.find('>li.step').last().attr('data-last', 'true');
      });
  }
};

$.fn.deactivateStep = function (callback) {
  if (!$(this).hasClass('step')) return;
  var stepper = $(this).closest('ul.stepper');
  stepper.find('>li').removeAttr('data-last');
  if (window.innerWidth < 993 || !stepper.hasClass('horizontal')) {
    $(this)
      .stop()
      .css({ transition: 'none', '-webkit-transition': 'margin-bottom none' })
      .slideUp(400, function () {
        $(this).removeClass('step').css({
          height: 'auto',
          'margin-bottom': '',
          transition: 'margin-bottom .4s',
          '-webkit-transition': 'margin-bottom .4s',
        });
        if (callback) callback();
        stepper.find('>li').removeAttr('data-last');
        stepper.find('>li.step').last().attr('data-last', 'true');
      });
  } else {
    $(this)
      .stop()
      .animate({ width: '0%' }, 400, function () {
        $(this).removeClass('step').hide().css({
          height: 'auto',
          'margin-bottom': '',
          display: 'none',
          width: '',
        });
        if (callback) callback();
        stepper.find('>li.step').last().attr('data-last', 'true');
      });
  }
};

$.fn.showError = function (error) {
  if (validation) {
    var name = this.attr('name');
    var form = this.closest('form');
    var obj = {};
    obj[name] = error;
    form.validate().showErrors(obj);
    this.closest('li').addClass('wrong');
  } else {
    this.removeClass('valid').addClass('invalid');
    this.next().attr('data-error', error);
  }
};

$.fn.activateFeedback = function () {
  var active = this.find('.step.active:not(.feedbacking)')
    .addClass('feedbacking')
    .find('.step-content');
  active.prepend(
    '<div class="wait-feedback"> <div class="preloader-wrapper active"> <div class="spinner-layer spinner-blue"> <div class="circle-clipper left"> <div class="circle"></div></div><div class="gap-patch"> <div class="circle"></div></div><div class="circle-clipper right"> <div class="circle"></div></div></div><div class="spinner-layer spinner-red"> <div class="circle-clipper left"> <div class="circle"></div></div><div class="gap-patch"> <div class="circle"></div></div><div class="circle-clipper right"> <div class="circle"></div></div></div><div class="spinner-layer spinner-yellow"> <div class="circle-clipper left"> <div class="circle"></div></div><div class="gap-patch"> <div class="circle"></div></div><div class="circle-clipper right"> <div class="circle"></div></div></div><div class="spinner-layer spinner-green"> <div class="circle-clipper left"> <div class="circle"></div></div><div class="gap-patch"> <div class="circle"></div></div><div class="circle-clipper right"> <div class="circle"></div></div></div></div></div>'
  );
};

$.fn.destroyFeedback = function () {
  var active = this.find('.step.active.feedbacking');
  if (active) {
    active.removeClass('feedbacking');
    active.find('.wait-feedback').remove();
  }
  return true;
};

$.fn.resetStepper = function (step) {
  if (!step) step = 1;
  var form = $(this).closest('form');
  $(form)[0].reset();
  Materialize.updateTextFields();
  return $(this).openStep(step);
};

$.fn.submitStepper = function (step) {
  var form = this.closest('form');
  if (form.isValid()) {
    form.submit();
  }
};

$.fn.nextStep = function (callback, activefb, e) {
  var stepper = this;
  var settings = $(stepper).data('settings');
  var form = this.closest('form');
  var active = this.find('.step.active');
  var next = $(this.children('.step:visible')).index($(active)) + 2;
  var feedback =
    active.find('.next-step').length > 1
      ? e
        ? $(e.target).data('feedback')
        : undefined
      : active.find('.next-step').data('feedback');
  // If the stepper is parallel, we want to validate the input of the current active step. Not all elements.
  if (
    (settings.parallel && $(active).validateStep()) ||
    (!settings.parallel && form.isValid())
  ) {
    if (feedback && activefb) {
      if (settings.showFeedbackLoader) stepper.activateFeedback();
      return window[feedback].call();
    }
    active.removeClass('wrong').addClass('done');
    this.openStep(next, callback);
    return this.trigger('nextstep');
  } else {
    return active.removeClass('done').addClass('wrong');
  }
};

$.fn.prevStep = function (callback) {
  var active = this.find('.step.active');
  if (active.hasClass('feedbacking')) return;
  var prev = $(this.children('.step:visible')).index($(active));
  active.removeClass('wrong');
  this.openStep(prev, callback);
  return this.trigger('prevstep');
};

$.fn.openStep = function (step, callback) {
  var settings = $(this).closest('ul.stepper').data('settings');
  var $this = this;
  var step_num = step - 1;
  step = this.find('.step:visible:eq(' + step_num + ')');
  if (step.hasClass('active')) return;
  var active = this.find('.step.active');
  var next;
  var prev_active = (next = $(this.children('.step:visible')).index($(active)));
  var order = step_num > prev_active ? 1 : 0;
  if (active.hasClass('feedbacking')) $this.destroyFeedback();
  active.closeAction(order);
  step.openAction(order, function () {
    if (settings.autoFocusInput)
      step.find('input:enabled:visible:first').focus();
    $this.trigger('stepchange').trigger('step' + (step_num + 1));
    if (step.data('event')) $this.trigger(step.data('event'));
    if (callback) callback();
  });
};

$.fn.closeAction = function (order, callback) {
  var closable = this.removeClass('active').find('.step-content');
  if (window.innerWidth < 993 || !this.closest('ul').hasClass('horizontal')) {
    closable.stop().slideUp(300, 'easeOutQuad', callback);
  } else {
    if (order == 1) {
      closable.animate({ left: '-100%' }, function () {
        closable.css({ display: 'none', left: '0%' }, callback);
      });
    } else {
      closable.animate({ left: '100%' }, function () {
        closable.css({ display: 'none', left: '0%' }, callback);
      });
    }
  }
};

$.fn.openAction = function (order, callback) {
  var openable = this.removeClass('done')
    .addClass('active')
    .find('.step-content');
  if (window.innerWidth < 993 || !this.closest('ul').hasClass('horizontal')) {
    openable.slideDown(300, 'easeOutQuad', callback);
  } else {
    if (order == 1) {
      openable
        .css({ left: '100%', display: 'block' })
        .animate({ left: '0%' }, callback);
    } else {
      openable
        .css({ left: '-100%', display: 'block' })
        .animate({ left: '0%' }, callback);
    }
  }
};

$.fn.activateStepper = function (options) {
  var settings = $.extend(
    {
      linearStepsNavigation: true,
      autoFocusInput: true,
      showFeedbackLoader: true,
      autoFormCreation: true,
      parallel: false, // By default we don't assume the stepper is parallel
    },
    options
  );
  $(document).on('click', function (e) {
    if (!$(e.target).parents('.stepper').length) {
      $('.stepper.focused').removeClass('focused');
    }
  });

  $(this).each(function () {
    var $stepper = $(this);
    if (!$stepper.parents('form').length && settings.autoFormCreation) {
      var method = $stepper.data('method');
      var action = $stepper.data('action');
      var method = method ? method : 'GET';
      action = action ? action : '?';
      $stepper.wrap(
        '<form action="' + action + '" method="' + method + '"></form>'
      );
    }

    $stepper.data('settings', {
      linearStepsNavigation: settings.linearStepsNavigation,
      autoFocusInput: settings.autoFocusInput,
      showFeedbackLoader: settings.showFeedbackLoader,
      parallel: $stepper.hasClass('parallel'),
    });
    $stepper.find('li.step.active').openAction(1);
    $stepper.find('>li').removeAttr('data-last');
    $stepper.find('>li.step').last().attr('data-last', 'true');

    $stepper
      .on('click', '.step:not(.active)', function () {
        var object = $($stepper.children('.step:visible')).index($(this));
        if ($stepper.data('settings').parallel && validation) {
          // Invoke parallel stepper behaviour
          $(this).addClass('temp-active');
          $stepper.validatePreviousSteps();
          $stepper.openStep(object + 1);
          $(this).removeClass('temp-active');
        } else if (!$stepper.hasClass('linear')) {
          $stepper.openStep(object + 1);
        } else if (settings.linearStepsNavigation) {
          var active = $stepper.find('.step.active');
          if (
            $($stepper.children('.step:visible')).index($(active)) + 1 ==
            object
          ) {
            $stepper.nextStep(undefined, true, undefined);
          } else if (
            $($stepper.children('.step:visible')).index($(active)) - 1 ==
            object
          ) {
            $stepper.prevStep(undefined);
          }
        }
      })
      .on('click', '.next-step', function (e) {
        e.preventDefault();
        $stepper.nextStep(undefined, true, e);
      })
      .on('click', '.previous-step', function (e) {
        e.preventDefault();
        $stepper.prevStep(undefined);
      })
      .on(
        'click',
        'button:submit:not(.next-step, .previous-step)',
        function (e) {
          e.preventDefault();
          feedback = e ? $(e.target).data('feedback') : undefined;
          var form = $stepper.closest('form');
          if (form.isValid()) {
            if (feedback) {
              stepper.activateFeedback();
              return window[feedback].call();
            }
            form.submit();
          }
        }
      )
      .on('click', function () {
        $('.stepper.focused').removeClass('focused');
        $(this).addClass('focused');
      });
  });
};

/**
 * Return the step element on given index.
 *
 * @param step, index of the step to be returned
 * @returns {*}, the step requested
 */
$.fn.getStep = function (step) {
  var settings = $(this).closest('ul.stepper').data('settings');
  var $this = this;
  var step_num = step - 1;
  step = this.find('.step:visible:eq(' + step_num + ')');
  return step;
};

/**
 * Run validation over all previous steps from the steps this
 * function is called on.
 */
$.fn.validatePreviousSteps = function () {
  var active = $(this).find('.step.temp-active');
  var index = $(this.children('.step')).index($(active));
  // We assume that the validator is set to ignore nothing.
  $(this.children('.step')).each(function (i) {
    if (i >= index) {
      $(this).removeClass('wrong done');
    } else {
      $(this).validateStep();
    }
  });
};

/**
 * Validate the step that this function is called on.
 */
$.fn.validateStep = function () {
  var stepper = this.closest('ul.stepper');
  var form = this.closest('form');
  var step = $(this);
  // Retrieve the custom validator for that step if exists.
  var validator = step.find('.next-step').data('validator');
  if (this.validateStepInput()) {
    // If initial base validation succeeded go on
    if (validator) {
      // If a custom validator is given also call that validator
      if (window[validator].call()) {
        step.removeClass('wrong').addClass('done');
        return true;
      } else {
        step.removeClass('done').addClass('wrong');
        return false;
      }
    }
    step.removeClass('wrong').addClass('done');
    return true;
  } else {
    step.removeClass('done').addClass('wrong');
    return false;
  }
};

/**
 * Uses the validation variable set by the stepper constructor
 * to run standard validation on the current step.
 * @returns {boolean}
 */
$.fn.validateStepInput = function () {
  var valid = true;
  if (validation) {
    // Find all input fields dat need validation in current step.
    $(this)
      .find('input.validate')
      .each(function () {
        if (!$(this).valid()) {
          valid = false;
          return false;
        }
      });
  }
  return valid;
};



// AutoComplete Location block 

function autocomplete(inp) {
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  inp.setAttribute("autocomplete", false);
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function (e) {

    var a, b, val = this.value;
    console.log('input--', val)

    /*close any already open lists of autocompleted values*/
    closeAllLists();
    if (!val) { return false; }
    currentFocus = -1;
    /*create a DIV element that will contain the items (values):*/
    a = document.createElement("DIV");
    a.setAttribute("id", this.id + "autocomplete-list");
    a.setAttribute("class", "autocomplete-items");

    /*append the DIV element as a child of the autocomplete container:*/
    this.parentNode.appendChild(a);
    /*for each item in the array...*/

    let body = {
      text: val,
      notaryId: notary_id
    }
    fetch(
      'https://notaryapp-staging.herokuapp.com/dashboard/getPlaces',
      // 'http://localhost:5000/dashboard/getPlaces',
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      }
    ).then((response) => {
      return response.json();
    })
      .then((data) => {
        console.log('data--',data)
        if (data.places?.length === 0 || data.status == 2)
        {
          $("#address_span_text").show().delay(5000).fadeOut();
        }
        else {
          data.places.forEach(element => {
            console.log('element--', element)
            // places.push(element)
            /*create a DIV element for each matching element:*/
            b = document.createElement("DIV");
            /*make the matching letters bold:*/
            b.innerHTML = "<strong>" + element['fullAddress'].substr(0, val.length) + "</strong>";
            b.innerHTML += element['fullAddress'].substr(val.length);
            /*insert a input field that will hold the current array item's value:*/
            b.innerHTML += `<input type='hidden' value='${element['fullAddress']}' data='${element['placeId']}'>`;
            /*execute a function when someone clicks on the item value (DIV element):*/
            b.addEventListener("click", function (e) {
              /*insert the value for the autocomplete text field:*/
              inp.value = this.getElementsByTagName("input")[0].value;
              inp.setAttribute('data', this.getElementsByTagName("input")[0].getAttribute('data'))
              /*close the list of autocompleted values,
              (or any other open lists of autocompleted values:*/
              closeAllLists();
            });
            a.appendChild(b);
          });
        }
        
      });
  });

  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function (e) {
    var x = document.getElementById(this.id + "autocomplete-list");
    if (x) x = x.getElementsByTagName("div");
    if (e.keyCode == 40) {
      /*If the arrow DOWN key is pressed,
      increase the currentFocus variable:*/
      currentFocus++;
      /*and and make the current item more visible:*/
      addActive(x);
    } else if (e.keyCode == 38) { //up
      /*If the arrow UP key is pressed,
      decrease the currentFocus variable:*/
      currentFocus--;
      /*and and make the current item more visible:*/
      addActive(x);
    } else if (e.keyCode == 13) {
      /*If the ENTER key is pressed, prevent the form from being submitted,*/
      e.preventDefault();
      if (currentFocus > -1) {
        /*and simulate a click on the "active" item:*/
        if (x) x[currentFocus].click();
      }
    }
  });
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
    closeAllLists(e.target);
  });
}

autocomplete(document.getElementById("non_linear_signing_location"));