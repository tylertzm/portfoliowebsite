
window.onscroll = function() {
    const bottomMenu = document.getElementById("bottomMenu");
    bottomMenu.style.bottom = (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) ? "0" : "-100px";
};

document.addEventListener("DOMContentLoaded", function() {
    const techStackButton = document.getElementById("tech-stack-button");
    const creativeStackButton = document.getElementById("creative-stack-button");
    const techStackContent = document.getElementById("tech-stack-content");
    const creativeStackContent = document.getElementById("creative-stack-content");

    techStackButton.addEventListener("click", function(event) {
        event.preventDefault();
        techStackContent.style.display = techStackContent.style.display === "none" ? "block" : "none";
        creativeStackContent.style.display = "none";
    });

    creativeStackButton.addEventListener("click", function(event) {
        event.preventDefault();
        creativeStackContent.style.display = creativeStackContent.style.display === "none" ? "block" : "none";
        techStackContent.style.display = "none";
    });

    // Initially hide the tech stack and creative stack content
    techStackContent.style.display = "none";
    creativeStackContent.style.display = "none";
});
