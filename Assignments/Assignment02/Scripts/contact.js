((content) => {
    // Local variables
    let FirstName = document.getElementById("FirstName");
    let LastName = document.getElementById("LastName");
    let ContactNumber = document.getElementById("ContactNumber");
    let EmailAddress = document.getElementById("EmailAddress");
    let Subject = document.getElementById("Subject");
    let Message = document.getElementById("Message");

    function OutputFormDataToConsole() {
        console.log(`%c ---------------------------------------`, "color: blue;");
        console.log(`%c Form Data`, "font-weight:bold; font-size: 16px; color: blue;");
        console.log(`%c ---------------------------------------`, "color: blue;");
        console.log(`%c Full Name     : ${FirstName.value} ${LastName.value}`, "color: blue;");
        console.log(`%c Contact Number: ${ContactNumber.value}`, "color: blue;");
        console.log(`%c Email Address : ${EmailAddress.value}`, "color: blue;");
        console.log(`%c Subject       : ${Subject.value}`, "color: blue;");
        console.log(`%c Your Message  : ${Message.value}`, "color: blue;");
        console.log(`%c ---------------------------------------`, "color: blue;");
    }

    function ClearValidationMessage() {
        FirstName.setCustomValidity("");
        LastName.setCustomValidity("");
        ContactNumber.setCustomValidity("");
        EmailAddress.setCustomValidity("");
        Subject.setCustomValidity("");
        Message.setCustomValidity("");
    }


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
                            element.setCustomValidity("Enter first name with at least 2 letters");
                            break;
                        case "LastName":
                            element.setCustomValidity("Enter last name with at least 2 letters");
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

    function ValidateForm() {
        setEventHandlersForFormElements();
    }

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

        ClearValidationMessage();

        // create a new HTML Element
        let cancelButton = document.createElement("button");
        // configure the HTML Element
        cancelButton.setAttribute("class", "btn btn-secondary btn-block");
        cancelButton.classList.add("btn-lg");
        cancelButton.textContent = "Cancel";
        cancelButton.addEventListener("click", function (event) {
            event.preventDefault();
            window.open("a01_index.html", "_parent");
        });
        // add the HTML Element to the page somewhere 
        // in this case I'm attaching a button to the first forml element
        document.forms[0].appendChild(cancelButton);


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