/*
File name: bio.js
Author's name: Awen Xu
Website: Mini Portfolio
File description: This is the JavaScript file for the bio page of the mini portfolio. 
    This file is mainly used to enter text into the pages.
*/

let content;
(function (content) {
    "use strict"

    // Function that runs and insert text when on Bio page
    function BioContent() {
        // Text for title
        let bioTitle = "About Me"
        let pageTitle = document.getElementById("bioHeading");
        pageTitle.textContent = bioTitle;
    }

    // attach BioContent function to the "content" namespace
    content.BioContent = BioContent;
})(content || (content = {}));