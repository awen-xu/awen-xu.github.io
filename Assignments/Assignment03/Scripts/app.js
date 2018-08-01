/*
File name: app.js
Author's name: Awen Xu
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
/*
    function loadParagraphs() {
    
        XHR = new XMLHttpRequest();
        XHR.addEventListener("readystatechange", function(){
          if(this.status === 200) {
            if(this.readyState === 4)  {
              paragraphs = JSON.parse(this.responseText);
              console.log("Paragraph Data finished loading");
    
              console.log(paragraphs);
    
              for (const property in paragraphs) {
                if (paragraphs.hasOwnProperty(property)) {
                  console.log(paragraphs[property]);
                }
              }
    
              console.log(`Paragraph3: ${paragraphs.paragraph3}`);
            }
          }
        });
        XHR.open("GET", "./Scripts/paragraphs.json");
        XHR.send();
      }*/

      function loadParagraphs() {

        XHR = new XMLHttpRequest();
        XHR.addEventListener("readystatechange", function () {
            if (this.status === 200) {
                if (this.readyState === 4) {
                    paragraphs = JSON.parse(this.responseText);
                    console.log("Paragraph Data finished loading");

                    pElements = document.getElementsByTagName("p");

                    // loop through the p tags in my html file
                    for (const p in pElements) {
                        if (pElements.hasOwnProperty(p)) {
                            pId = pElements[p].id;

                            // loop through the data in paragraphs.json
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

    // start up function to determine which page user is on and which function to call
    function Start() {
        let title = document.title;

        console.log(`%c ----------APP STARTED---------- `, "font-weight: bold; font-size: 16px; color: maroon; background-color: rgba(0, 255, 0, 0.3);");
        console.log(`%c Title: ${title}`, "color: maroon; font-style: italic;");
        
        // Based on the current page, call the corresponding function
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

    }
    window.addEventListener("load", Start);
    app.title = document.title;
})(app || (app={}));