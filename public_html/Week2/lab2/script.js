var form = document.querySelector('form');


form.addEventListener('submit', checkForm);

// checks the form for the info 
// Get a red asterisk next to it
//The label will get changed to red by swapping its class

function checkForm(e) {
    e.preventDefault();
    var fields = document.querySelectorAll('form p');
    var len = fields.length;
    var isValid = true;
    var data = {};
    for (var i = 0; i < len; i++) {

        var input = fields[i].querySelector('input');
        data[input.name] = input.value;
        
        if (input.value === '') {
            fields[i].classList.add('error');
            isValid = false;
        } else {
            fields[i].classList.remove('error');
        }
    }
    if (data.Password !== data.PasswordConformation){
        
    }
        console.log(data);

    if (isValid === true) {
        form.classList.add('hide'); // form div will get hidden
        var conf = document.querySelector('#confirmation'); //div confirmation

        // text box output
        var html = '<p>First Name: ' + data.fname + '</p>' ;
        html += '<p>Last Name: ' + data.lname + '</p>' ;
        html += '<p>Email: ' + data.email + '</p>' ;
        html += '<p>Phone: '+ data.phone + '</p>' ;
        html += '<p>Address1: '+ data.Address1 + '</p>' ;
        html += '<p>Address2: '+ data.Address2 + '</p>' ;
        html += '<p>City: '+ data.City + '</p>' ;
        html += '<p>State: '+ data.State + '</p>' ;
        html += '<p>Zipcode: '+ data.Zipcode + '</p>' ;
           


        conf.innerHTML = html;

    }



}