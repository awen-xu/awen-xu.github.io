((content) => {
    // Local variables
    let FullName = document.getElementById("FullName");
    let ContactNumber = document.getElementById("ContactNumber");
    let EmailAddress = document.getElementById("EmailAddress");
    let Message = document.getElementById("Message");

    function OutputFormDataToConsole() {

        console.log(`%c ---------------------------------------`, "color: blue;");
        console.log(`%c Form Data`, "font-weight:bold; font-size: 16px; color: blue;");
        console.log(`%c ---------------------------------------`, "color: blue;");
        console.log(`%c Full Name     : ${FullName.value}`, "color: blue;");
        console.log(`%c Contact Number: ${ContactNumber.value}`, "color: blue;");
        console.log(`%c Email Address : ${EmailAddress.value}`, "color: blue;");
        console.log(`%c Your Message  : ${Message.value}`, "color: blue;");
        console.log(`%c ---------------------------------------`, "color: blue;");

        console.log(`%c ---------------------------------------`, "color: blue;");
        console.log(`%c Form Properties`, "font-weight:bold; font-size: 16px; color: blue;");
        console.log(`%c ---------------------------------------`, "color: blue;");
        console.log(`%c Form Length     : ${document.forms[0].length}`, "color: blue;");

        for (let index = 0; index < document.forms[0].length; index++) {
            console.log(`%c Form Element ${index}: ${document.forms[0].elements[index].value}`, "color: blue;");

        }
        // document.forms[0].submit();

    }

    function ClearValidationMessage() {
        FullName.setCustomValidity("");
        ContactNumber.setCustomValidity("");
        EmailAddress.setCustomValidity("");
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
                        case "FullName":
                            element.setCustomValidity("You must enter a name with at least 2 letters");
                            break;
                        case "ContactNumber":
                            element.setCustomValidity("You must enter a phone number with the pattern (###) ###-####");
                            break;
                        case "EmailAddress":
                            element.setCustomValidity("You must enter an appropriate email address with the pattern name@example.com.");
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
        //inserts text
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
        //document.forms[0].autocomplete = true;

        console.log("%c Contact Content Accessed...", "font-weight:bold; font-size: 20px;");

        document.getElementsByClassName("card-title")[0].textContent = "Contact You!";

        // create a new HTML Element
        let cancelButton = document.createElement("button");
        // configure the HTML Element
        cancelButton.setAttribute("class", "btn btn-warning");
        cancelButton.classList.add("btn-lg");
        cancelButton.textContent = "Cancel";
        cancelButton.addEventListener("click", function (event) {
            event.preventDefault();
            window.open("index.html", "_parent");
        });

        // add the HTML Element to the page somewhere 
        // in this case I'm attaching a button to the first forml element
        document.forms[0].appendChild(cancelButton);


        let SendButton = document.getElementById("SendButton");
        SendButton.addEventListener("click", (event) => {
            // event.preventDefault();
            if (!document.forms[0].checkValidity()) {
                OutputFormDataToConsole();
                ValidateForm();
            }
            console.log(`Form Validates: ${document.forms[0].checkValidity()}`);
        });
    }

    // public functions exposed to the content namespace
    content.ContactContent = ContactContent;

})(content || (content = {}));