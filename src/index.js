import { createConfirmPasswordInput, createEmailInput, createForm, createPasswordInput, createSelect, createTextInput } from './form';
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
    
    form.append(emailInput,select,zipInput,passwordInput,confirmPasswordInput);
    
body.append(form);
}

formValidation();