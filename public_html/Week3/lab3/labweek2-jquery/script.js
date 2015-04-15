


var form = document.querySelector('form');
var geocoder; // geocoder declared
form.addEventListener('submit', checkForm);

// checks the form for the info 
// Get a red asterisk next to it
//The label will get changed to red by swapping its class

function checkForm(e) {
    e.preventDefault();
    var fields = document.querySelectorAll('form p'); // fields declared as <p> tags
    
    var len = fields.length; // declares length of the fields aka <p> tags on the form 
    
    var isValid = true; // isValid true declared
    
    var data = {}; // declared var data 
    // if i < length of the form increment loops through the fields declared as the forms <p> tags 
    
    for (var i = 0; i < len; i++) {

        var input = fields[i].querySelector('input'); // selects inputs 
        data[input.name] = input.value; // data input.name is the name of the fields Address = input.value    
//        //<p class="Address2Error">
//                <label>Address2</label>
//                <input name="Address2" type="text" value="" />
//                <span class="hide">*</span>
//            </p>
//       
        // if value fields are empty an error will occure 
        // else fields are entered error will be removed 
        if (input.value === '') {
            fields[i].classList.add('error');
            isValid = false;
        } else {
            fields[i].classList.remove('error');
        }
    }
    if (data.Password !== data.PasswordConformation) {
        document.querySelector('.PasswordError').classList.add('error');
        document.querySelector('.PasswordConformationError').classList.add('error');
      
    }
    
    // if is Valid is true all data will be displayed
    if (isValid === true) {
        form.classList.add('hide'); // form div will get hidden
        var conf = document.querySelector('#confirmation'); //div confirmation

        // text box output
        var html = '<p>First Name: ' + data.fname + '</p>';
        html += '<p>Last Name: ' + data.lname + '</p>';
        html += '<p>Email: ' + data.email + '</p>';
        html += '<p>Username: ' + data.username + '</p>';
        html += '<p>Phone: ' + data.phone + '</p>';
        html += '<p>Address1: ' + data.Address1 + '</p>';
        html += '<p>Address2: ' + data.Address2 + '</p>';
        html += '<p>City: ' + data.City + '</p>';
        html += '<p>State: ' + data.State + '</p>';
        html += '<p>Zipcode: ' + data.Zipcode + '</p>';



        conf.innerHTML = html;

    }



}

function initialize(){
    geocoder = new google.maps.Geocoder();
    var Zipcode = document.querySelector('input[name="Zipcode"]');
ventListner("blur", codeAddress);    
}

function codeAddress() {
    var address = document.querySelector('input[name="Zipcode"]').value;
    geocoder.geocode({'address': address}, function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            console.log(results);
            handleResults(results);
        } else {
            console.log('Geocode was not successful for the following reason: ' + status);
        }
    });
}

function handleResults(results) {
    var geocodeObject = results[0];

    // declare variable for length of JSON object
    var len = geocodeObject.address_components.length;
    console.log(len);

    for (var i = 0; i < len; i++) {
        if (geocodeObject.address_components[i].types.indexOf('locality') > -1) {
            console.log(geocodeObject.address_components[i].long_name);
            console.log("This is the city.");
            var city = document.querySelector('body > form > p.cityError > input[type="text"]');
            city.value = geocodeObject.address_components[i].long_name;
        }

        if (geocodeObject.address_components[i].types.indexOf('administrative_area_level_1') > -1) {
            console.log(geocodeObject.address_components[i].short_name);
            console.log("This is the state.");
            var state = document.querySelector('body > form > p:nth-child(8) > input[type="text"]');
            state.value = geocodeObject.address_components[i].short_name;
        }


    }

}

