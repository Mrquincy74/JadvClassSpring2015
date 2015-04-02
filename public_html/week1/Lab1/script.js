var form = document.querySelector('form');

form.addEventListener('submit', checkForm);

// checks the form for the info

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
    // needs to be finished 
    if (isValid) {
        form.classList.add('hide');
        var conf = document.querySelector('#confirmation');

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