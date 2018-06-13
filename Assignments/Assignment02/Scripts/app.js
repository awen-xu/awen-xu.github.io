/*
File name: app.js
Author's name: Awen Xu
Website: Mini Portfolio
File description: This is the JavaScript file for all three pages of the mini portfolio. 
    This file is mainly used to enter text into the pages.
*/

let app;
(function (app) {
    "use strict"


    // start up function to determine which page user is on and which function to call
    function Start() {
        let title = document.title;

        console.log("App Started!");
        console.log("----------------------------");
        console.log("Title: " + title);

        // Based on the current page, call the corresponding function
        switch (title) {
            case "COMP125 - a01 - Bio":
                content.BioContent();
                break;

            case "COMP125 - a01 - Projects":
                content.ProjectsContent();
                break;

            case "COMP125 - a01 - Contact":
                content.ContactContent();
                break;

            default:
                break;
        }
    }
    window.addEventListener("load", Start);
    app.title = document.title;
})(app || (app={}));