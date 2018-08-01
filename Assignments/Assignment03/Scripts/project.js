/*
File name: project.js
Author's name: Awen Xu
Student number: 300992536
Website: Mini Portfolio
File description: This is the JavaScript file for the project page of the mini portfolio. 
    This file injects the title into the h tags.
*/

((content) =>{

    // Titles for the h tags of Project page
    function ProjectsContent() {
        let pageTitle = "My Previous Projects";
        let projectTitle1 = "Unity Game - Fortissimo";
        let projectTitle2 = "TicTacToe – Java RTP";
        let projectTitle3 = "Battleship – Java RTP";

        let pageHeading = document.getElementById("projectHeading");
        let title1 = document.getElementById("title1");
        let title2 = document.getElementById("title2");
        let title3 = document.getElementById("title3");

        pageHeading.textContent = pageTitle;
        title1.textContent = projectTitle1;
        title2.textContent = projectTitle2;
        title3.textContent = projectTitle3;
    }
    content.ProjectsContent = ProjectsContent;
})(content||(content = {}));