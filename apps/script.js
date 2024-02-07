document.addEventListener("DOMContentLoaded", function() {
    var homeButton = document.createElement("button");
    homeButton.innerHTML = "Home";
    homeButton.style.position = "fixed";
    homeButton.style.bottom = "20px";
    homeButton.style.right = "20px";
    homeButton.style.zIndex = "28523923";
    homeButton.style.backgroundColor = "blue";
    homeButton.style.color = "white";
    homeButton.style.padding = "10px 20px";
    homeButton.style.border = "none";
    homeButton.style.borderRadius = "5px";
    homeButton.style.cursor = "pointer";
    homeButton.onclick = function() {
        window.location.href = "../main.html";
    };
    document.body.appendChild(homeButton);
});