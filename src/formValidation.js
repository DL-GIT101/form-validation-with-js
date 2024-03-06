const validateEmail = () => {
    const input = document.querySelector('#email');
    const value = input.value;
    const message = input.nextElementSibling;
    
    const regex = /[A-Za-z0-9._+\-']+@[A-Za-z0-9.\-]+\.[A-Za-z]{2,}/;
   
    if(value === ''){
        input.setCustomValidity("Please Fill out this field");
        message.textContent = "Please enter your email";
    }
    else if(!regex.test(value)){
        message.textContent = "ex: email@domain.com";
    }
    else {
        input.setCustomValidity("");
        message.textContent = '';
    }

    input.classList.add('validated');

}

const validateZip = () => {
    
    const countries = [ { 
        "Country": "Philippines",
        "ISO": "PH",
        "Format": "NNNN",
        "Regex": "^\\d{4}$"
    },{
        "Country": "Japan",
        "ISO": "JP",
        "Format": "NNNNNNN (NNN-NNNN)",
        "Regex": "^\\d{7}\\s\\(\\d{3}-\\d{4}\\)$"
    },{
        "Country": "South Korea",
        "ISO": "KR",
        "Format": "NNNNN",
        "Regex": "^\\d{5}$"
    } ];

    const countrySelected = document.querySelector('#country').value;

    const zip = document.querySelector('#zip');
    const message = zip.nextElementSibling;

    let pattern;
    let format;
    countries.forEach(country => {
        if(country.ISO == countrySelected){
            pattern = new RegExp(country.Regex);
            format = country.Format;
        }
    });

    if(!pattern.test(zip.value)){
        zip.setCustomValidity("Please follow the format");
        message.textContent = "ex: " + format;
    }else {
        zip.setCustomValidity("");
        message.textContent = '';
    }

    zip.classList.add('validated');
}

const validatePassword = () => {
    
    const input = document.querySelector('#password');
    const value = input.value;
    const message = input.nextElementSibling;

    const regex = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/;
   
    if(value === ''){
        input.setCustomValidity("Please Fill out this field");
        message.textContent = "Please enter your password";
    }
    else if(!regex.test(value)){
        input.setCustomValidity("Password must contain 1 number (0-9) \n" +
                                "Password must contain 1 uppercase letters \n" +
                                "Password must contain 1 lowercase letters \n" +
                                "Password must contain 1 non-alpha numeric number \n" +
                                "Password is 8-16 characters with no space");
        message.textContent = "Please follow the format";
    }
    else {
        input.setCustomValidity("");
        message.textContent = '';
    }

    input.classList.add('validated');
}

const valdiateCPassword = () => {

    const confirmPassword = document.querySelector('#confirmPassword');
    const password = document.querySelector('#password');
    const message = confirmPassword.nextElementSibling;

    console.log(confirmPassword);

    if(confirmPassword.value === ''){
        confirmPassword.setCustomValidity("Please Fill out this field");
        message.textContent = "Please enter your password";
    }
    else if(confirmPassword.value !== password.value){
        confirmPassword.setCustomValidity("Check your password");
        message.textContent = "Password don't match";
    }
    else if(confirmPassword.value == password.value && password.checkValidity()){
        confirmPassword.setCustomValidity("");
        message.textContent = '';
    }
    console.log(confirmPassword.value);
    confirmPassword.classList.add('validated');
}

const validateForm = () => {
    validateEmail();
    validateZip();
    validatePassword();
    valdiateCPassword();
}


export { validateForm };