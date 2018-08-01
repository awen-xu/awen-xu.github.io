/*
File name: bio.js
Author's name: Awen Xu
Student number: 300992536
Website: Mini Portfolio
File description: This is the JavaScript file for the bio page of the mini portfolio. 
    This file injects the title into the h tags.
*/

let content;
(function (content) {
    "use strict"

    // Function that runs and insert title for h tag when on Bio page
    function BioContent() {
        let bioTitle = "About Me"
        let pageTitle = document.getElementById("bioHeading");
        pageTitle.textContent = bioTitle;
    }

    // attach BioContent function to the "content" namespace
    content.BioContent = BioContent;
})(content || (content = {}));