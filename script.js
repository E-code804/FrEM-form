document.getElementById('submit-btn').addEventListener('click', function (event) {
    // Prevent the form from submitting
    event.preventDefault();

    // Get the form
    const form = document.getElementById('form');
    // Get the input and error message elements for each form element.
    const firstNameInput = document.getElementById('firstname');
    const firstNameError = document.getElementById('firstname-error');
    const lastNameInput = document.getElementById('lastname');
    const lastNameError = document.getElementById('lastname-error');
    const messageInput = document.getElementById('message');
    const messageError = document.getElementById('message-error');
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('email-error');
    const radioInputs = document.querySelectorAll('input[name="query_type"]');
    const radioError = document.getElementById('radio-error');
    const consentInput =  document.getElementById('consent');
    const consentError =  document.getElementById('consent-error');

    // Ensure valid inputs
    const isFirstNameValid = displayErr(firstNameInput, firstNameError);
    const isLastNameValid = displayErr(lastNameInput, lastNameError);
    const isMessageValid = displayErr(messageInput, messageError);
    const isEmailValid = emailErr(emailInput, emailError);
    const isRadioValid = radioErr(radioInputs, radioError);
    const isConsentValid = radioErr([consentInput], consentError);

    if (isFirstNameValid && isLastNameValid && isMessageValid && isEmailValid && isRadioValid && isConsentValid) {
        // All validations passed, submit the form
        alert('Successfully submitted the form!');
        form.submit();
    }
});

const displayErr = (inputElement, inputError) => {
    // Check if the first name input is empty
    if (inputElement.value.trim() === '') {
        // Show the error message
        inputError.classList.remove('hidden');
        inputError.classList.add('visible');
        inputElement.classList.remove("input-focus");
        inputElement.classList.add("input-focus-err");
        return false;
    } else {
        // Hide the error message if the input is not empty
        inputError.classList.remove('visible');
        inputError.classList.add('hidden');
        inputElement.classList.remove("input-focus-err");
        inputElement.classList.add("input-focus");
        return true;
    }
}

const emailErr = (emailElement, emailError) => {
    // Check if the email input is empty or invalid
    if (emailElement.value.trim() === '' || !emailElement.checkValidity()) {
        // Show the error message
        emailError.classList.remove('hidden');
        emailError.classList.add('visible');
        emailElement.classList.remove('input-focus');
        emailElement.classList.add('input-focus-err');
        return false;
    } else {
        // Hide the error message if the input is valid
        emailError.classList.remove('visible');
        emailError.classList.add('hidden');
        emailElement.classList.remove('input-focus-err');
        emailElement.classList.add('input-focus');
        return true;
    }
}

const radioErr = (radioElements, radioError) => {
    isQueryTypeSelected = false;

    radioElements.forEach(radioElement => {
        if (radioElement.checked) {
            isQueryTypeSelected = true;
        }
    })

    if (!isQueryTypeSelected) {
        // Show the error message if no radio button is selected
        radioError.classList.remove('hidden');
        radioError.classList.add('visible');
        return false;
    } else {
        // Hide the error message if a radio button is selected
        radioError.classList.remove('visible');
        radioError.classList.add('hidden');
        return true;
    }
}