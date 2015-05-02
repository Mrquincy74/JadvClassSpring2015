
var form = document.querySelector('form');

 // To the form we add a function so when the form is
 // submmited we run checkForm function 
form.addEventListener('submit', checkForm);


// checks the form for the info 
// Get a red asterisk next to it
//The label will get changed to red by swapping its class

function checkForm(e) {
    e.preventDefault();

    var fname = document.querySelector('input[name="fname"]');
    var fnameError = document.querySelector('.fnameError').classList;

    var lname = document.querySelector('input[name="lname"]');
    var lnameError = document.querySelector('.lnameError').classList;

    var email = document.querySelector('input[name="email"]');
    var emailError = document.querySelector('.emailError').classList;

    var phone = document.querySelector('input[name="phone"]');
    var phoneError = document.querySelector('.phoneError').classList;

    var isValid = true;



// if statments that display error messages
// if fname.value is empty/true add the error 
// else fnameError.remove error 
    if (fname.value === '') {
        fnameError.add('error');
        isValid = false;
    } else {
        fnameError.remove('error');


    }

    if (lname.value === '') {
        lnameError.add('error');
        isValid = false;
    } else {
        lnameError.remove('error');

    }

    if (phone.value === '') {
        phoneError.add('error');
        isValid = false;
    } else {
        phoneError.remove('error');

    }

    if (email.value === '') {
        emailError.add('error');
        isValid = false;
    } else {
        emailError.remove('error');

    }
   // if isValid is true all validations passed the form will be hidden 
    if (isValid) {
        form.classList.add('hide'); // form div will get hidden
        
        //document.querySelector  @returns {HTMLCollection} on the confirmation 
        var conf = document.querySelector('#confirmation'); //div confirmation
        
        
        // text box output concatinated 
        var html = '<p>First Name: ';
        html += fname.value + '</p>';
        html += '<p>Last Name: ';
        html += lname.value + '</p>';
        html += '<p>Email: ';
        html += email.value + '</p>';
        html += '<p>Phone: ';
        html += phone.value + '</p>';


        conf.innerHTML = html;

    }



}