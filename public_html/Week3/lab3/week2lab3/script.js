


var form = $('form');
var geocoder; // geocoder declared
form.on('submit', checkForm);

// checks the form for the info 
// Get a red asterisk next to it
//The label will get changed to red by swapping its class

function checkForm(e){
    
    e.preventDefault();
    
    var isValid = true; // isValid true declared
    var paragraphs = $('form p'); // fields declared as <p> tags
    
    // var length = paragraphs.length; // declares length of the fields aka <p> tags on the form 
    var plength = paragraphs.length;
 
    
    var jsondata = {}; // declared var jsondata 
    
    // if i < length of the form increment loops through the fields declared as the forms <p> tags 
    for (var i = 0; i < plength; i++) {
     // start here!!!!!   
        var input = $(paragraphs[i]).children('input'); // selects inputs 
         var label = $(paragraphs[i]).children('label');
        jsondata[input.attr('name')] = input.val(); // data input.name is the name of the fields Address = input.value 
       
    
        // if value fields are empty an error will occure 
        // else fields are entered error will be removed 
        if (input.val()  === '') {
            $(paragraphs[i]).addClass('error');
            isValid = false;
            
        } else {
            $(paragraphs[i]).removeClass('error');
            info += "<p>" + label.text() + "" + input.val() + "</p>"
        }
   
  
    
    if (jsondata.Password !== jsondata.PasswordConformation) {
        $('.PasswordError').addClass('error');
        $('.PasswordConformationError').addClass('error');
        
        isValid = false;
      
    }
    
    // if is Valid is true all data will be displayed
    if (isValid ) {
        form.addClass('hide'); // form div will get hidden
        var conf = $('#confirmation'); //div confirmation
        console.log(jsondata);
        // text box output
        var html = '<p>First Name: ' + jsondata.fname + '</p>';
        html += '<p>Last Name: ' + jsondata.lname + '</p>';
        html += '<p>Email: ' + jsondata.email + '</p>';
        html += '<p>Username: ' + jsondata.username + '</p>';
        html += '<p>Phone: ' + jsondata.phone + '</p>';
        html += '<p>Address1: ' + jsondata.Address1 + '</p>';
        html += '<p>Address2: ' + jsondata.Address2 + '</p>';
        html += '<p>City: ' + jsondata.City + '</p>';
        html += '<p>State: ' + jsondata.State + '</p>';
        html += '<p>Zipcode: ' + jsondata.Zipcode + '</p>';
        html += '<p>Password: ' + jsondata.Password + '</p>';
        html += '<p>PasswordConformation: ' + jsondata.PasswordConformation + '</p>';



        conf.html = (html);

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
}