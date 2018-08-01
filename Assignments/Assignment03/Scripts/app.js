/*
File name: app.js
Author's name: Awen Xu
Student number: 300992536
Website: Mini Portfolio
File description: This is the JavaScript file for switching to the different pages of the mini portfolio. 
*/

let app;
(function (app) {
    "use strict"
    let paragraphs;
    let XHR;
    let pElements;
    let pId;

    /**
     * This function loads the paragraphs.json file and
     * inserts the correct paragraph text into the p tags
     * in the html files.
     *
     */
    function loadParagraphs() {
        XHR = new XMLHttpRequest();

        XHR.addEventListener("readystatechange", function () {
            if (this.status === 200) {
                if (this.readyState === 4) {
                    paragraphs = JSON.parse(this.responseText);
                    pElements = document.getElementsByTagName("p");

                    // loop through the p tags in my html file and store the id
                    for (const p in pElements) {
                        if (pElements.hasOwnProperty(p)) {
                            pId = pElements[p].id;

                            // loop through the data in paragraphs.json
                            // inserts value (string text) based on when the paragraph id matches the key 
                            for (const property in paragraphs) {
                                if (paragraphs.hasOwnProperty(property)) {
                                    if (property == pId) {
                                        document.getElementById(pId).textContent = paragraphs[property];
                                    }
                                }
                            }
                        }
                    }
                }
            }
        });
        XHR.open("GET", "./Scripts/paragraphs.json");
        XHR.send();
    }

    
    /**
   * This function inserts HTML from a file or other location
   * into the specificied tag / element that exists on the 
   * html page
   *
   * @param {string} sourceURL
   * @param {string} destTag
   */
    function insertHTML(sourceURL, destTag) {
        let target = document.querySelector(destTag);

        XHR = new XMLHttpRequest();
        XHR.addEventListener("readystatechange", function () {
            if (this.status === 200) {
                if (this.readyState === 4) {
                    target.innerHTML = this.responseText;
                    setActiveNavLink();
                }
            }
        });
        XHR.open("GET", sourceURL);
        XHR.send();
    }


    /**
     * This function assigns the 'active' class to the correct item in the navigation
     *
     */
    function setActiveNavLink() {
        // clears the "active" class from each of the list items in the navigation
        document.querySelectorAll("li.nav-item").forEach(function (listItem) {
            listItem.setAttribute("class", "nav-item");
        });

        // add the "active" class to the class attribute of the appropriate list item
        document.getElementById(document.title).classList.add("active");
    }


    function Start() {
        let title = document.title;

        // Based on the title of the current page, call the corresponding function
        switch (title) {
            case "COMP125 - a03 - Bio":
                content.BioContent();
                break;

            case "COMP125 - a03 - Projects":
                content.ProjectsContent();
                break;

            case "COMP125 - a03 - Contact":
                content.ContactContent();
                break;

            default:
                break;
        }

        loadParagraphs();

        insertHTML("./Views/partials/header.html", "header");
        insertHTML("./Views/partials/footer.html", "footer");
    }

    window.addEventListener("load", Start);
    app.title = document.title;

})(app || (app = {}));