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
        // Text for the heading of Project page
        let pageTitle = "My Previous Projects";
        let pageHeading = document.getElementById("projectHeading");
        pageHeading.textContent = pageTitle;
        let myPageDesc = "Here are three projects of mine. They are some of my favourites.";
        let pageDesc = document.getElementById("pageDescription");
        pageDesc.textContent = myPageDesc;

        // Inserting text for project 1
        let projectTitle1 = "Unity Game - Fortissimo";
        let title1 = document.getElementById("title1");
        title1.textContent = projectTitle1;
        let project1 = "Fortissimo is a simple 2D top down shooter game that I made in high school. It was made for an assignment from my physics class. This game was used to teach younger students about a specific job related to the study of physics. In this case, the particular specification is an acoustic engineer and how its study is used in making the LRAD (Long Range Acoustic Device), which is a tool for crowd/riot control used by authorities. I used Unity to write all the codes. As there were no lessons about programming or coding in my physics class, I had to find resources online in order to learn how to write the code.";
        let paragraph1 = document.getElementById("paragraph1");
        paragraph1.textContent = project1;

        // Inserting text for project 2
        let projectTitle2 = "TicTacToe – Java RTP";
        let title2 = document.getElementById("title2");
        title2.textContent = projectTitle2;
        let project2 = "I made a Tic Tac Toe game through Java RTP in grade 11. It is simple in design. There are two players, and each takes turn to enter a number that determines the placement on the board. The game ends  when either a player wins, or neither win after all tiles are filled. Each tile is given a number ID, and the players place their markers on a specific tile by entering the number associated with that tile. If statements are used to determine the outcome of the game.";
        let paragraph2 = document.getElementById("paragraph2");
        paragraph2.textContent = project2;

        // Inserting text for project 3
        let projectTitle3 = "Battleship – Java RTP";
        let title3 = document.getElementById("title3");
        title3.textContent = projectTitle3;
        let project3 = "In grade 12, I wrote a little program that allows two players to play battleship. The game starts with having player 1 set down their ships on the tiles they want. Then, player 2 does the same. After the ship placement, the players take turn at guessing were their opponent’s ships are by clicking on the tiles. If they guess correctly, there will be an 'X' indicating that they have hit a ship. There is a status bar on the bottom that informs the players on the current standing of the game. The game ends when all ship pieces of one player are found.";
        let paragraph3 = document.getElementById("paragraph3");
        paragraph3.textContent = project3;
    }

    content.ProjectsContent = ProjectsContent;
})(content||(content = {}));