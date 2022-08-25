let fulname = document.querySelector('#fulname');
// let lsname = document.querySelector('#lsname');
// let usname = document.querySelector('#usname');
// let errorMessage = document.querySelector('.error-message')

fulname.addEventListener('blur', function () {
    if (fulname.value == "") {
        fulname.nextElementSibling.style.display = "block"
        fulname.style.border = "2px solid red"   
    } else {
        fulname.nextElementSibling.style.display = "none"
        fulname.style.border = "2px solid black"
    }
    var name = /^[A-Za-z]+$/g;
    if (fulname.value.match(name)) {
        fulname.nextElementSibling.style.display = "none"
        fulname.style.border = "2px solid black"
    } else {
        fulname.nextElementSibling.style.display = "block"
        fulname.style.border = "2px solid red"
    };
});
fulname.addEventListener('input', function () {
    
    fulname.style.border = "2px solid black"
    fulname.nextElementSibling.style.display = "none"
});
// lsname.addEventListener('blur', function () {
//     if (lsname.value == "") {
//         lsname.nextElementSibling.style.display = "block"
//         lsname.style.border = "2px solid red"   
//     } else {
//         lsname.nextElementSibling.style.display = "none"
//         lsname.style.border = "2px solid black"
//     }
//     var name = /^[A-Za-z]+$/g;
//     if (lsname.value.match(name)) {
//         lsname.nextElementSibling.style.display = "none"
//         lsname.style.border = "2px solid black"
//     } else {
//         lsname.nextElementSibling.style.display = "block"
//         lsname.style.border = "2px solid red"
//     };
// });
// lsname.addEventListener('input', function () {
    
//     lsname.style.border = "2px solid black"
//     lsname.nextElementSibling.style.display = "none"
// });

// usname.addEventListener('blur', function () {
//     if (usname.value == "") {
//         usname.nextElementSibling.style.display = "block"
//         usname.style.border = "2px solid red"   
//     } else {
//         usname.nextElementSibling.style.display = "none"
//         usname.style.border = "2px solid black"
//     }
// });
// usname.addEventListener('input', function () {
//     usname.style.border = "2px solid black"
//     usname.nextElementSibling.style.display = "none"
// });

// password section
let uppercase = document.querySelector('#uppercase')
let lowercase = document.querySelector('#lowercase')
let number = document.querySelector('#number')
let characters = document.querySelector('#characters')
let pw = document.querySelector('#pw')
let pwText = document.querySelector('.pw-text')
let confirmPw = document.querySelector('#confirm-pw')
pw.addEventListener('click', function () {
    if (pw.value =="") {
        pwText.style.display = "block"
    } else {
        pwText.style.display = "none"
    }
})
pw.addEventListener('blur', function () {
    if (pw.value == "") {
        pwText.style.display = "block"
        pw.style.border = "2px solid red"
    } else {
        pw.style.border = "2px solid black"
        pwText.style.display = "none"
    }
})

let pwValid = false;

pw.addEventListener('input', function () {
    pw.style.border = "2px solid black"
    var lowerCase = /[a-z]/g;
    if (pw.value.match(lowerCase)) {
        lowercase.classList.replace('invalid', 'valid')
        pwValid = true;
    } else {
        lowercase.classList.replace('valid', 'invalid')
        pwValid = false;
    };
    var upperCase = /[A-Z]/g;
    if (pw.value.match(upperCase)) {
        uppercase.classList.replace('invalid', 'valid')
        pwValid = true;
    } else {
        uppercase.classList.replace('valid', 'invalid')
        pwValid = false;
    };
    var numberChange = /[0-9]/g;
    if (pw.value.match(numberChange)) {
        number.classList.replace('invalid', 'valid')
        pwValid = true;
    } else {
        number.classList.replace('valid', 'invalid')
        pwValid = false;
    };
    if (pw.value.length >= 12) {
        // pw.value = pw.value.slice(0, 13);
        characters.classList.replace('invalid', 'valid')
        pwValid = true;
    } else {
        characters.classList.replace('valid', 'invalid')
        pwValid = false;
    };

    console.log(pwValid);

});

confirmPw.addEventListener('blur', function () {
    if (pw.value !== confirmPw.value) {
        confirmPw.style.border = "2px solid red"
    } else {
        confirmPw.style.border = "2px solid black"
    }
})
const eyeIcon = document.querySelector('.slash');
eyeIcon.addEventListener('click', function () {
    if (eyeIcon.classList.contains('fa-eye-slash')) {
        eyeIcon.classList.replace('fa-eye-slash', 'fa-eye');
        pw.type = 'text';
    } else {
        eyeIcon.classList.replace('fa-eye', 'fa-eye-slash');
        pw.type = 'password';
    }
});
// password end

// Email validation
let email = document.querySelector('#email');
email.addEventListener('blur', function () {
    var emailChange = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.value.match(emailChange)) {
        email.style.border = "2px solid black"
        return true
        
    } else {
        email.style.border = "2px solid red"
        return false
        
    };
})
email.addEventListener('input', function () {
    email.style.border = "2px solid black"
})


// Checkbox section
let checkbox = document.querySelector("#checkbox");
let registerBtn = document.querySelector(".btn-login")
let form = document.querySelector('#form')
checkbox.addEventListener('click', function () {
    if (checkbox.checked) {
        registerBtn.removeAttribute('disabled')
        registerBtn.style.backgroundColor = "rgb(85, 85, 223)";
    } else {
        registerBtn.disabled = true;
        registerBtn.style.backgroundColor = "rgb(157, 157, 252)";
    }
})

let inputField = document.querySelectorAll(".login-detail-inputs1");

// Submit section
registerBtn.addEventListener('click', function (e) {
    e.preventDefault();

    inputField.forEach(function (field) {
        if (field.value && fulname.value.match(/^[A-Za-z]+$/) && email.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) && pwValid == true && pw.value === confirmPw.value) {
            form.submit();
            window.location.replace("login.html")
        } else {
            
        }
    })

})