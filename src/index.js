import { createConfirmPasswordInput, createEmailInput, createForm, createPasswordInput, createSelect, createSubmitButton, createTextInput } from './form';
import { validateForm } from './formValidation';
import './style.css';

const formValidation = () => {
    
const body = document.querySelector('body');

    const form = createForm();
    
        const email = createEmailInput();

        //const countries = ["Philippines","Japan","South Korea"];
        //const selectCountry = createSelect("Country",countries);

        //const zip = createTextInput("Zip");

        //const password = createPasswordInput();

        //const confirmPassword = createConfirmPasswordInput();

        const submitButton = createSubmitButton();
        submitButton.addEventListener("click", () => validateForm());

    form.append(email,
                //selectCountry,
                //zip,
                //password,
                //confirmPassword,
                submitButton,
                );

    form.addEventListener("change", () => validateForm());
    
body.append(form);
}

formValidation();