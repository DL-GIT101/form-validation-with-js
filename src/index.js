import { createConfirmPasswordInput, createEmailInput, createForm, createPasswordInput, createSelectCountry, createSubmitButton, createTextInput } from './form';
import './style.css';

const SampleForm = () => {
    
const body = document.querySelector('body');

    const form = createForm();
    
        const email = createEmailInput();

        const selectCountry = createSelectCountry();

        const zip = createTextInput("Zip");

        const password = createPasswordInput();

        const confirmPassword = createConfirmPasswordInput();

        const submitButton = createSubmitButton();

    form.append(email.label, email.input, email.message,
                selectCountry.label,selectCountry.select,
                zip.label,zip.input,zip.message,
                password.label,password.input,password.message,
                confirmPassword.label,confirmPassword.input,confirmPassword.message,
                submitButton,
                );
    
body.append(form);
}

SampleForm();