const createForm = () => {
    
    const form = document.createElement('form');

    return form;
}

const createEmailInput = () => {

    const label = document.createElement('label');
    label.textContent = "Email";
    label.htmlFor = "email";

    const input = document.createElement('input');
    input.type = "email";
    input.name = "email";
    input.id = "email";
    input.required = true;

    const div = document.createElement('div');
    div.className = "input-container";
    div.append(label,input);

    return div;
}

const createSelect = (title, choices) => {

    const label = document.createElement('label');
    label.textContent = title;
    label.htmlFor = title.toLowerCase();

    const select = document.createElement('select');
    select.name = title.toLowerCase();
    select.id = title.toLowerCase();

    choices.forEach(choice => {
        
        const option = document.createElement('option');
        option.textContent = choice;
        option.value = choice.toLowerCase();

        select.appendChild(option);
    });

    const div = document.createElement('div');
    div.className = "input-container";
    div.append(label,select);

    return div;
}

const createTextInput = (title) => {

    const label = document.createElement('label');
    label.textContent = title;
    label.htmlFor = title.toLowerCase();

    const input = document.createElement('input');
    input.type = "text";
    input.name = title.toLowerCase();
    input.id = title.toLowerCase();
    input.required = true;

    const div = document.createElement('div');
    div.className = "input-container";
    div.append(label,input);

    return div;
}

const createPasswordInput = () => {

    const label = document.createElement('label');
    label.textContent = "Password";
    label.htmlFor = "password";

    const input = document.createElement('input');
    input.type = "password";
    input.name = "password";
    input.id = "password";
    input.required = true;

    const div = document.createElement('div');
    div.className = "input-container";
    div.append(label,input);

    return div;
}

const createConfirmPasswordInput = () => {

    const confirmPasswordInput = createPasswordInput();

    const label = confirmPasswordInput.querySelector('label');
    label.textContent = "Confirm Password";
    label.htmlFor = "confirmPassword";

    const input = confirmPasswordInput.querySelector('input');
    input.name = "confirmPassword";
    input.id = "confirmPassword";
    input.required = true;

    return confirmPasswordInput;
}

export {createForm,createEmailInput,createSelect,createTextInput,createPasswordInput,createConfirmPasswordInput};