/*
File name: project.js
Author's name: Awen Xu
Website: Mini Portfolio
File description: This is the JavaScript file for the project page of the mini portfolio. 
    This file is mainly used to enter text into the pages.
*/

((content) =>{
    // Function that runs when on Project page
    function ProjectsContent() {
        // Title for the heading of Project page
        let pageTitle = "My Previous Projects";
        let pageHeading = document.getElementById("projectHeading");
        pageHeading.textContent = pageTitle;

        // Inserting title text for project 1
        let projectTitle1 = "Unity Game - Fortissimo";
        let title1 = document.getElementById("title1");
        title1.textContent = projectTitle1;

        // Inserting title text for project 2
        let projectTitle2 = "TicTacToe – Java RTP";
        let title2 = document.getElementById("title2");
        title2.textContent = projectTitle2;

        // Inserting title text for project 3
        let projectTitle3 = "Battleship – Java RTP";
        let title3 = document.getElementById("title3");
        title3.textContent = projectTitle3;
    }

    content.ProjectsContent = ProjectsContent;
})(content||(content = {}));