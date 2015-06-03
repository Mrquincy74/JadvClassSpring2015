// Lab 4


var city;
var state;
var form = document.querySelector('form');
var geocoder; // geocoder declared

// calls checkForm function after submit button initiated
form.addEventListener('submit', checkForm);
form.addEventListener('submit', checkForm2);



  var regexValidations = {
                       "fname" : {
                             "regex" :  /^[a-zA-Z0-9$]/,
                             "message" : 'First Name is not valid'
                         },
                         "lname" : {
                             "regex" :  /^[a-zA-Z0-9$]/,
                             "message" : 'Last Name is not valid'
                         },
                         "email" : {
                             "regex" :  /^[a-zA-Z0-9$]+[@]{1}[a-zA-Z]+[\.]{1}[a-zA-Z]{2,3}$/,
                             "message" : 'Email is not valid'
                         },
                         "username" : {
                             "regex" :  /^[a-zA-Z0-9$]/,
                             "message" : 'User Name not valid'
                         },
                         "Password" : {
                             "regex" :  /^[a-zA-Z0-9$]/,
                             "message" : 'Password not valid'
                         },
                         "PasswordConfirmation" : {
                             "regex" :  /^[a-zA-Z0-9$]/,
                             "message" : 'Password not valid'
                         },
                         "phone" : {
                             "regex" :  /^\(?([2-9]{1}[0-9]{2})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
                             "message" : 'Phone Number not valid'
                         },
                         "Address1" : {
                             "regex" :  /^[a-zA-Z0-9$]/,
                             "message" : 'Address1 not valid'
                         },
                         "Address2" : {
                             "regex" :  /^[a-zA-Z0-9$]/,
                             "message" : 'Address1 not valid'
                         },
                         "City" : {
                             "regex" :  /^[a-zA-Z]/,
                             "message" : 'City not valid'
                         },
                           "State" : {
                             "regex" :  /^[a-zA-Z]/,
                             "message" : 'State not valid'
                         },
                         "Zipcode" : {
                             "regex" :  /^[0-9$]/,
                             "message" : 'Zipcode not valid'
                         }   
                     
  };


// checks the form for the info 
// Get a red asterisk next to it
//The label will get changed to red by swapping its class

function checkForm(e) {
    
    e.preventDefault();
    
    var paragraphs = document.querySelectorAll('form p'); // fields declared as <p> tags
    
    var len = paragraphs.length; // declares length of the fields aka <p> tags on the form 
    
    var isValid = true; // isValid true declared
    
    var html = ""; // declares html as nothing
    
    var data = {}; // declared var data 
    // if i < length of the form increment loops through the fields declared as the forms <p> tags 
    
    for (var i = 0; i < len; i++) {

        var input = paragraphs[i].querySelector('input'); // selects inputs from <p> tags 
        var label = paragraphs[i].querySelector('label'); // selects label from <p> tags
        
        data[input.name] = input.value; // data input.name is the name of the fields Address = input.value 
        html += '<p>' + label.innerText + " : " +  input.value +  '</p>'; // sets html with label & input value wraps in <p></p>//
   
        // if value fields are empty an error will occure 
        // else fields are entered error will be removed 
        if (input.value === '') {
            paragraphs[i].classList.add('error');
            isValid = false;
        } else {
            paragraphs[i].classList.remove('error');
        }
    }
    
    
    
    // if statment for Password & PasswordConfirmation not equal show error!
    if (data.Password !== data.PasswordConfirmation) 
    {
        document.querySelector('.PasswordError').classList.add('error');
        document.querySelector('.PasswordConformationError').classList.add('error');
        
      isValid = false;
    }
    
    // if is Valid is true all data will be displayed
    if (isValid === true) {
        form.classList.add('hide'); // form div will get hidden
        var confirmation = document.querySelector('#confirmation'); //div confirmation

        // text box output
        confirmation.innerHTML = html;
        console.log(data);
    }



}

            function checkForm2() {
                 var inputs = document.querySelectorAll('form p');
                   for ( var i = 0, l = inputs.length; i < l; i++ ) {
                       console.log(inputs[i].name);
                    if ( inputs[i].value === '' || !regexValidations[inputs[i].name].regex.test(inputs[i].value) ){
                        console.log(regexValidations[inputs[i].name].message);
                    } else {
                        console.log(inputs[i].name + ' valid');
                    }
                }
            }

function initialize()
{
    geocoder = new google.maps.Geocoder();
    var Zipcode = document.querySelector('input[name="Zipcode"]'); // this is how you get the input name to populate into the document 
    Zipcode.addEventListener("blur", codeAddress);  // don't forget the addEventListner!!  
}
    google.maps.event.addDomListener(window, 'load', initialize);

function codeAddress() {
    var address = document.querySelector('input[name="Zipcode"]').value;
    geocoder.geocode({'address': address}, function (results, status) {
        if (status === google.maps.GeocoderStatus.OK) {
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
            var city = document.querySelector('input[name="City"]');
            city.value = geocodeObject.address_components[i].long_name;
        }

        if (geocodeObject.address_components[i].types.indexOf('administrative_area_level_1') > -1) {
            console.log(geocodeObject.address_components[i].short_name);
            console.log("This is the state.");
            var state = document.querySelector('input[name="State"]');
            state.value = geocodeObject.address_components[i].short_name;
        }


    }

}

