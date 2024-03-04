const validateEmail = () => {
    const email = document.querySelector('#email');
    const value = email.value;

    const container = email.closest('.input-container');
    const message = container.querySelector('.message');

    const regex = /[A-Za-z0-9._+\-']+@[A-Za-z0-9.\-]+\.[A-Za-z]{2,}/;
   
    if(value === ''){
        email.setCustomValidity("Please Fill out this field");
    }
    else if(!value.match(regex)){
        email.setCustomValidity("Wrong Format");
        message.textContent = "Example: email@gmail.com";
    }else {
        email.setCustomValidity("");
    }

}

const validateForm = () => {
    validateEmail();
}


export {validateEmail,
        validateForm
};