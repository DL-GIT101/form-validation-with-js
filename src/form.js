const createForm = () => {
    
    const form = document.createElement('form');

    return form;
}

const createEmailInput = () => {

    const label = document.createElement('label');
    label.textContent = "Email";

    const input = document.createElement('input');
    input.type = "email";
    input.name = "email";
    input.id = "email";

    const div = document.createElement('div');
    div.className = "input-container";
    div.append(label,input);

    return div;
}

const createSelect = (title, choices) => {

    const label = document.createElement('label');
    label.textContent = title;

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
    div.className = "select-container";
    div.append(label,select);

    return div;
}

const createTextInput = (title) => {

    const label = document.createElement('label');
    label.textContent = title;

    const input = document.createElement('input');
    input.type = "text";
    input.name = title.toLowerCase();
    input.id = title.toLowerCase();

    const div = document.createElement('div');
    div.className = "input-container";
    div.append(label,input);

    return div;
}

const createPasswordInput = () => {

    const label = document.createElement('label');
    label.textContent = "Password";

    const input = document.createElement('input');
    input.type = "password";
    input.name = "password";
    input.id = "password";

    const div = document.createElement('div');
    div.className = "input-container";
    div.append(label,input);

    return div;
}

const createConfirmPasswordInput = () => {

    const confirmPasswordInput = createPasswordInput();
    confirmPasswordInput.querySelector('label').textContent = "Confirm Password";
    confirmPasswordInput.querySelector('input').name = "confirmPassword";
    confirmPasswordInput.querySelector('input').id = "confirmPassword";

    return confirmPasswordInput;
}

export {createForm,createEmailInput,createSelect,createTextInput,createPasswordInput,createConfirmPasswordInput};