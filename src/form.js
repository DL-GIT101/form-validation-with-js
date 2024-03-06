import { validateForm } from "./formValidation";

const createForm = () => {
    
    const form = document.createElement('form');

    form.addEventListener('change', () => validateForm());
    form.addEventListener('submit', (event) => {
        validateForm();
        event.preventDefault();
    });

    return form;
}

const createEmailInput = () => {

    const label = document.createElement('label');
    label.textContent = "Email";
    label.htmlFor = "email";

    const span = document.createElement('span');
    span.textContent = "(required)";
    label.append(span);

    const input = document.createElement('input');
    input.type = "email";
    input.name = "email";
    input.id = "email";
    input.autocomplete = "on";
    input.required = true;

    const regex = /[A-Za-z0-9._+\-']+@[A-Za-z0-9.\-]+\.[A-Za-z]{2,}/;
    input.pattern = regex.source;

    const message = document.createElement('p');
    message.className = "message";

    return {label,input,message};
}

const createSelectCountry = () => {

    const label = document.createElement('label');
    label.textContent = "Country";

    const span = document.createElement('span');
    span.textContent = "(required)";
    label.append(span);

    const select = document.createElement('select');
    select.name = "country";
    select.id = "country";
    select.autocomplete = "on";

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
        "Format": "NNNNNN (NNN-NNN)(1988~2015)",
        "Regex": "^\\d{6}\\s\\(\\d{3}-\\d{3}\\)$"
    } ];

    countries.forEach(country => {
        
        const option = document.createElement('option');
        option.textContent = country.Country;
        option.value = country.ISO;

        select.appendChild(option);
    });

    return {label,select};
}

const createTextInput = (title) => {

    const label = document.createElement('label');
    label.textContent = title;
    label.htmlFor = title.toLowerCase();

    const span = document.createElement('span');
    span.textContent = "(required)";
    label.append(span);

    const input = document.createElement('input');
    input.type = "text";
    input.name = title.toLowerCase();
    input.id = title.toLowerCase();
    input.required = true;

    const message = document.createElement('p');
    message.className = "message";

    return {label,input,message};
}

const createPasswordInput = () => {

    const label = document.createElement('label');
    label.textContent = "Password";
    label.htmlFor = "password";

    const span = document.createElement('span');
    span.textContent = "(required)";
    label.append(span);

    const input = document.createElement('input');
    input.type = "password";
    input.name = "password";
    input.id = "password";
    input.required = true;

    const message = document.createElement('p');
    message.className = "message";

    const div = document.createElement('div');
    div.className = "input-container";
    div.append(label,input,message);

    return div;
}

const createConfirmPasswordInput = () => {

    const confirmPasswordInput = createPasswordInput();

    const label = confirmPasswordInput.querySelector('label');
    label.textContent = "Confirm Password";
    label.htmlFor = "confirmPassword";

    const span = document.createElement('span');
    span.textContent = "(required)";
    label.append(span);

    const input = confirmPasswordInput.querySelector('input');
    input.name = "confirmPassword";
    input.id = "confirmPassword";
    input.required = true;

    return confirmPasswordInput;
}

const createSubmitButton = () => {

    const button = document.createElement('button');
    button.className = "submit";
    button.id = "submit";
    button.textContent = "Submit";
    button.setAttribute("type", "submit");

    return button;
}

export {createForm,
        createEmailInput,
        createSelectCountry,createTextInput,
        createPasswordInput,
        createConfirmPasswordInput,
        createSubmitButton,
        };