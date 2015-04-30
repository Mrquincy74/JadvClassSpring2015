

// checks the form for the info 
// Get a red asterisk next to it
//The label will get changed to red by swapping its class
var form = $('form');

form.on('submit', checkForm);

function checkForm(e) {
    e.preventDefault();

    var fname = $('input[name="fname"]');
    var fnameError = $('.fnameError'); // .period defines class 

    var lname = $('input[name="lname"]');
    var lnameError = $('.lnameError');

    var email = $('input[name="email"]');
    var emailError = $('.emailError');

    var phone = $('input[name="phone"]');
    var phoneError = $('.phoneError');

    var isValid = true;



// if statments that display error messages

    if (fname.val() === '') {
        fnameError.addClass('error');
        isValid = false;
    } else {
        fnameError.removeClass('error');


    }

    if (lname.val() === '') {
        lnameError.addClass('error');
        isValid = false;
    } else {
        lnameError.removeClass('error');

    }

    if (phone.val() === '') {
        phoneError.addClass('error');
        isValid = false;
    } else {
        phoneError.removeClass('error');

    }

    if (email.val() === '') {
        emailError.addClass('error');
        isValid = false;
    } else {
        emailError.removeClass('error');

    }
   
    if (isValid) {
        form.addClass('hide'); // form div will get hidden
        
        var conf = $('#confirmation'); //div confirmation
        conf.removeClass('hide');
          conf.addClass('show');
        
        // text box output
        var html = '<p>First Name: ' + fname.val()+ '</p>';
        html += '<p>Last Name: ' + lname.val() + '</p>';
        html += '<p>Email: ' + email.val() + '</p>';
        html += '<p>Phone: '+ phone.val() + '</p>';


        conf.html(html);

    }



}