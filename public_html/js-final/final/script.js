/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
// querySelector for mainform 
var form = document.querySelector('#mainform');

 // To the form we add a function so when the form is
 // submmited we run checkForm function 
form.addEventListener('click', checkForm);
doucument.querySelector('#saveData').addEventListener('click', saveData);



 //regular expressions to validate fields
    var rgxFullname = /^[a-zA-Z0-9$]/;
    var rgxEmail = /^([\w\-\.]+)@((\[([0-9]{1,3}\.){3}[0-9]{1,3}\])|(([\w\-]+\.)+)([a-zA-Z]{2,4}))$/;
    var rgxPhone = /^\(?([2-9]{1}[0-9]{2})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    var rgxDesc = /[0-9 A-Za-z]+/;
   

// checks the form for the info 
//checks the inputs for information

function checkForm(e) {
    e.preventDefault();
 
    // grabs id element by the id
    var fullname = document.querySelector('input[name="name"]'); 
    var fullname_err = document.querySelector('#fullname_err');

    var email = document.querySelector('input[name="email"]');
    var email_err = document.querySelector('#email_err');

    var phone = document.querySelector('input[name="phone"]');
    var phone_err = document.querySelector('#phone_err');
    
     var description = document.getElementById('description');
     var description_err = document.querySelector('#description_err');

    var isValid = true;
  
// if statments that display error messages
// if fname.value is empty/true add the error 
// else fnameError.remove error 
    if (fullname.value === '') {
        fullname_err.innerHTML = "Please enter Full Name";
        isValid = false;
    } else {
        fullname_err.innerHTML = "";
    }
   if (email.value === '') {
        email_err.innerHTML = "Please enter an Email Address";
        isValid = false;
    } else {
        email_err.innerHTML = "";
    }
        
    if (phone.value === '') {
        phone_err.innerHTML = "Please enter a Phone Number";
        isValid = false;
    } else {
        phone_err.innerHTML = "";
    }
        if (description.value === '') {
        description_err.innerHTML = "Please enter a description";
        isValid = false;
    } else {
        description_err.innerHTML = "";

    }
    
    // regex if statments checks values for errors
    if (!rgxFullname.test(fullname.value)){
        fullname_err.innerHTML = "Please enter correct Name format";
        isValid = false;
    }
    
     if (!rgxEmail.test(email.value)){
        email_err.innerHTML = "Please enter correct Email format";
        isValid = false;
    }
     if (!rgxPhone.test(phone.value)){
        phone_err.innerHTML = "Please enter correct Phone format";
        isValid = false;
    }
    
    if (!rgxDesc.test(description.value)){
        description_err.innerHTML = "Please enter provide a description";
        isValid = false;
    }
    
   
    //if isValid is true all validations passed the form will be hidden 
     if (isValid) {
        form.classList.add('hide'); // form div will get hidden
        
        //document.querySelector  @returns {HTMLCollection} on the confirmation 
        //var conf = document.querySelector('#confirmation'); //div confirmation
          
    }
    
      function saveData() {                
                localStorage.setItem("name", input.fullName);                
            }

    }
    
