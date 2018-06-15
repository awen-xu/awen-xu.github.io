/*
File name: app.js
Author's name: Awen Xu
Website: Mini Portfolio
File description: This is the JavaScript file for switching to the different pages of the mini portfolio. 
*/

let app;
(function (app) {
    "use strict"

    // start up function to determine which page user is on and which function to call
    function Start() {
        let title = document.title;

        console.log(`%c ----------APP STARTED---------- `, "font-weight: bold; font-size: 16px; color: maroon; background-color: rgba(0, 255, 0, 0.3);");
        console.log(`%c Title: ${title}`, "color: maroon; font-style: italic;");
        
        // Based on the current page, call the corresponding function
        switch (title) {
            case "COMP125 - a02 - Bio":
                content.BioContent();
                break;

            case "COMP125 - a02 - Projects":
                content.ProjectsContent();
                break;

            case "COMP125 - a02 - Contact":
                content.ContactContent();
                break;

            default:
                break;
        }
    }
    window.addEventListener("load", Start);
    app.title = document.title;
})(app || (app={}));