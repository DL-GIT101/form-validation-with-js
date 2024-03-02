import { createConfirmPasswordInput, createEmailInput, createForm, createPasswordInput, createSelect, createSubmitButton, createTextInput } from './form';
import './style.css';

const formValidation = () => {
    
const body = document.querySelector('body');

    const form = createForm();
    
        const emailInput = createEmailInput();

        const countries = ["Philippines","Japan","South Korea"];
        const select = createSelect("Country",countries);

        const zipInput = createTextInput("Zip");

        const passwordInput = createPasswordInput();

        const confirmPasswordInput = createConfirmPasswordInput();

        const submitButton = createSubmitButton();
    
    form.append(emailInput,
                select,
                zipInput,
                passwordInput,
                confirmPasswordInput,
                submitButton,
                );
    
body.append(form);
}

formValidation();