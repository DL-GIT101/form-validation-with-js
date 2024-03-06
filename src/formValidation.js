const validateEmail = () => {
    const input = document.querySelector('#email');
    const value = input.value;

    const message = email.nextElementSibling;
    
    const regex = /[A-Za-z0-9._+\-']+@[A-Za-z0-9.\-]+\.[A-Za-z]{2,}/;
   
    if(value === ''){
        input.setCustomValidity("Please Fill out this field");
        message.textContent = "Please Fill out this field";
    }
    else if(!regex.test(value)){
        message.textContent = "Ex. email@domain.com";
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
        message.textContent = format;
    }else {
        zip.setCustomValidity("");
        message.textContent = '';
    }

    zip.classList.add('validated');
}

const validatePassword = () => {
    const regex = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/;
}

const validateForm = () => {
    validateEmail();
    validateZip();
}


export { validateForm };