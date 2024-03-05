import { createConfirmPasswordInput, createEmailInput, createForm, createPasswordInput, createSelect, createSubmitButton, createTextInput } from './form';
import './style.css';

const SampleForm = () => {
    
const body = document.querySelector('body');

    const form = createForm();
    
        const email = createEmailInput();

        //const countries = ["Philippines","Japan","South Korea"];
        //const selectCountry = createSelect("Country",countries);

        //const zip = createTextInput("Zip");

        //const password = createPasswordInput();

        //const confirmPassword = createConfirmPasswordInput();

        const submitButton = createSubmitButton();

    form.append(email.label, email.input, email.message,
                //selectCountry,
                //zip,
                //password,
                //confirmPassword,
                submitButton,
                );
    
body.append(form);
}

SampleForm();