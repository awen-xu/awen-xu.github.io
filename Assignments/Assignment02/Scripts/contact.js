/*
File name: contact.js
Author's name: Awen Xu
Website: Mini Portfolio
File description: This is the JavaScript file for the contact page of the mini portfolio. 
*/
((content) => {
    // Local variables
    let FirstName = document.getElementById("FirstName");
    let LastName = document.getElementById("LastName");
    let ContactNumber = document.getElementById("ContactNumber");
    let EmailAddress = document.getElementById("EmailAddress");
    let Subject = document.getElementById("Subject");
    let Message = document.getElementById("Message");


    // Displays in the console - the form data entered by user
    function OutputFormDataToConsole() {
        console.log(`%c -----------FORM DATA----------- `, "font-weight: bold; font-size: 16px; color: maroon; background-color: rgba(0, 255, 0, 0.3);");
        console.log(`%c First Name     : ${FirstName.value}`, "color: maroon; font-style: italic;");
        console.log(`%c Last Name      : ${LastName.value}`, "color: maroon; font-style: italic;");
        console.log(`%c Contact Number : ${ContactNumber.value}`, "color: maroon; font-style: italic;");
        console.log(`%c Email Address  : ${EmailAddress.value}`, "color: maroon; font-style: italic;");
        console.log(`%c Subject        : ${Subject.value}`, "color: maroon; font-style: italic;");
        console.log(`%c Your Message   : ${Message.value}`, "color: maroon; font-style: italic;");
    }


    // Clears the validation message for the form elements
    function ClearValidationMessage() {
        FirstName.setCustomValidity("");
        LastName.setCustomValidity("");
        ContactNumber.setCustomValidity("");
        EmailAddress.setCustomValidity("");
        Subject.setCustomValidity("");
        Message.setCustomValidity("");
    }


    // Event handlers for form elements
    // Sets the validation message depending on the element
    function setEventHandlersForFormElements() {
        for (const element of document.forms[0].elements) {
            if ((element.tagName === "INPUT") || (element.tagName === "TEXTAREA")) {
                // when the user is entering data
                element.addEventListener("input", function () {
                    element.setCustomValidity("");
                });
                // when the user enters incorrect data
                element.addEventListener("invalid", function () {
                    switch (element.id) {
                        case "FirstName":
                            element.setCustomValidity("Enter a first name with at least 2 letters");
                            break;
                        case "LastName":
                            element.setCustomValidity("Enter a last name with at least 2 letters");
                            break;
                        case "ContactNumber":
                            element.setCustomValidity("Enter a phone number with the pattern (###) ###-####");
                            break;
                        case "EmailAddress":
                            element.setCustomValidity("Enter an appropriate email address with the pattern name@example.com.");
                            break;
                        case "Subject":
                            element.setCustomValidity("You must enter a subject");
                            break;
                        case "Message":
                            element.setCustomValidity("You must enter a message");
                            break;
                        default:
                            element.setCustomValidity("This field is required.");
                            break;
                    }
                });
            }
        }
    }


    // calls the setEventHandlersForFormElements function
    function ValidateForm() {
        setEventHandlersForFormElements();
    }


    // function that runs when the contact page is loaded
    function ContactContent() {
        //inserts text - title and instructions for form
        let title = "Send Me A Message";
        let contactHeader = document.getElementById("contactTitle");
        contactHeader.textContent = title;
        let myContactStatement = "Write a message with the form below, and I will get back to you as soon as possible!";
        let contactInfo = document.getElementById("contactInfo");
        contactInfo.textContent = myContactStatement;
        let myContactInstructions = "* Required";
        let contactInstruction = document.getElementById("contactInstructions");
        contactInstruction.textContent = myContactInstructions;

        // clears the validation messages initially
        ClearValidationMessage();

        // create a new HTML Element
        let cancelButton = document.createElement("button");

        // configure the HTML Element
        cancelButton.setAttribute("class", "btn btn-secondary btn-block");
        cancelButton.classList.add("btn-lg");
        cancelButton.textContent = "Cancel";
        cancelButton.addEventListener("click", function (event) {
            event.preventDefault();
            window.open("a02_index.html", "_parent");
        });

        // add the HTML Element to the page somewhere 
        // in this case I'm attaching a button to the first forml element
        document.forms[0].appendChild(cancelButton);

        // configure the submit button
        let SendButton = document.getElementById("submitButton");
        SendButton.addEventListener("click", (event) => {
            if (!document.forms[0].checkValidity()) {
                OutputFormDataToConsole();
                ValidateForm();
            }
        });
    }

    // public functions exposed to the content namespace
    content.ContactContent = ContactContent;
})(content || (content = {}));