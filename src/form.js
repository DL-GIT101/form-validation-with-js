const createForm = () => {
    
    const form = document.createElement('form');

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

    const message = document.createElement('p');
    message.className = "message";

    const div = document.createElement('div');
    div.className = "input-container";
    div.append(label,input,message);

    return div;
}

const createSelect = (title, choices) => {

    const label = document.createElement('label');
    label.textContent = title;
    label.htmlFor = title.toLowerCase();

    const span = document.createElement('span');
    span.textContent = "(required)";
    label.append(span);

    const select = document.createElement('select');
    select.name = title.toLowerCase();
    select.id = title.toLowerCase();
    select.autocomplete = "on";

    choices.forEach(choice => {
        
        const option = document.createElement('option');
        option.textContent = choice;
        option.value = choice.toLowerCase();

        select.appendChild(option);
    });

    const message = document.createElement('p');
    message.className = "message";

    const div = document.createElement('div');
    div.className = "input-container";
    div.append(label,select,message);

    return div;
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

    const div = document.createElement('div');
    div.className = "input-container";
    div.append(label,input,message);
    return div;
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

    const button = document.createElement('input');
    button.className = "submit";
    button.id = "submit";
    button.textContent = "Submit";
    button.setAttribute("type", "submit");

    return button;
}

export {createForm,
        createEmailInput,
        createSelect,createTextInput,
        createPasswordInput,
        createConfirmPasswordInput,
        createSubmitButton,
        };