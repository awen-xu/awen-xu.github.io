let content;
(function(content){

    // Function that runs and insert text when on Bio page
    function BioContent() {
        // Title for the page
        let bioTitle = "About Me"
        let pageTitle = document.getElementById("bioHeading");
        pageTitle.textContent = bioTitle;

        // Mission statement
        let missionStatement = "My mission is to learn all I want with the resources available to me.";
        let sentence = document.getElementById("missionStatement");
        sentence.textContent = missionStatement;

        // Short paragraph for bio
        let bioParagraph = "I am a first year student attending Centennial College, and I am currently enrolled in the Health Informatics program. This program intersects information technology with health care systems. Currently, I am in the second semester of this program. I have always had an interest in writing code since high school. During that time, I took all the computer science courses that my school had to offer. There, I learned coding through Turing and Java RTP. Even though the software and hardware my high school used are outdated now, I still learned many programming concepts that could be easily applied to other languages. I am excited to learn more about coding.";
        let paragraph = document.getElementById("bioParagraph");
        paragraph.textContent = bioParagraph;
    }
    

    // attach BioContent function to the "content" namespace
    content.BioContent = BioContent;

})(content || (content = {}));