const validateEmail = () => {
    const input = document.querySelector('#email');
    const value = input.value;

    const message = email.nextElementSibling;
    
    const regex = /[A-Za-z0-9._+\-']+@[A-Za-z0-9.\-]+\.[A-Za-z]{2,}/;
   
    if(value === ''){
        input.setCustomValidity("Please Fill out this field");
    }
    else if(!value.match(regex)){
        message.textContent = "Ex. email@domain.com";
    }
    else {
        input.setCustomValidity("");
        message.textContent = '';
    }

    input.classList.add('validated');

}

const validateForm = () => {
    validateEmail();
}


export { validateForm };