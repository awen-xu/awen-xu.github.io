/* Custom JS goes here */

// IIFE - Immediately Invoked Function Expression
// anonymous self executing function
let app = (function () {
    "use strict"

    function HomeContent() {
        
    }


    function AssignmentsContent() {
        let paragraph = document.getElementById("paragraph");
        let mySentence = "";
        paragraph.textContent = mySentence;
    }

    function Start() {
        // local variable
        let title = document.title;

        console.log("App Started!");
        console.log("----------------------------");
        console.log("Title: " + title);

        switch (title) {
            case "COMP125 - Home":
                HomeContent();
                break;

            case "COMP125 - Assignments":
                AssignmentsContent();
                break;

            default:
                break;
        }
    }
    //window.onload = Start;
    window.addEventListener("load", Start);

    return {
        title: document.title

    };
})();