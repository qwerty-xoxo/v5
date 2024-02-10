document.addEventListener("DOMContentLoaded", function() {
    jquery = document.createElement("script");
    jquery.src = "https://code.jquery.com/jquery-3.6.0.min.js";
    document.body.appendChild(jquery);

    homeButton = document.createElement("button");
    homeButton.innerHTML = "Options";
    homeButton.style.position = "fixed";
    homeButton.style.bottom = "40px";
    homeButton.style.right = "20px";
    homeButton.style.zIndex = "28523923";
    homeButton.style.backgroundColor = "grey";
    homeButton.style.color = "white";
    homeButton.style.padding = "10px 20px";
    homeButton.style.border = "none";
    homeButton.style.opacity = "0.5";
    homeButton.onclick = function() {
       $("#option").toggle();
       $("#option1").toggle(); 
       $("#option2").toggle(); 
    }
    homeButton.style.borderRadius = "5px";
    homeButton.style.cursor = "pointer";

    document.body.appendChild(homeButton);

    homeButton = document.createElement("button");
    homeButton.innerHTML = "Home";
    homeButton.style.position = "fixed";
    homeButton.style.bottom = "100px";
    homeButton.style.right = "20px";
    homeButton.style.zIndex = "28523923";
    homeButton.id="option"
    homeButton.style.backgroundColor = "grey";
    homeButton.style.color = "white";
    homeButton.style.padding = "10px 20px";
    homeButton.style.border = "none";
    homeButton.style.borderRadius = "5px";
    homeButton.style.cursor = "pointer";
    homeButton.onclick = function() {
        window.location.href = "../main.html";
    };
    document.body.appendChild(homeButton);

    homeButton = document.createElement("button");
    homeButton.innerHTML = "Apps";
    homeButton.style.position = "fixed";
    homeButton.style.bottom = "180px";
    homeButton.style.right = "20px";
    homeButton.id="option1"
    homeButton.style.zIndex = "28523923";
    homeButton.style.backgroundColor = "grey";
    homeButton.style.color = "white";
    homeButton.style.padding = "10px 20px";
    homeButton.style.border = "none";
    homeButton.style.borderRadius = "5px";
    homeButton.style.cursor = "pointer";
    homeButton.onclick = function() {
        window.location.href = "../apps.html";
    };
    document.body.appendChild(homeButton);

    homeButton = document.createElement("button");
    homeButton.innerHTML = "Settings";
    homeButton.style.position = "fixed";
    homeButton.style.bottom = "140px";
    homeButton.style.right = "20px";
    homeButton.id="option2"
    homeButton.style.zIndex = "28523923";
    homeButton.style.backgroundColor = "grey";
    homeButton.style.color = "white";
    homeButton.style.padding = "10px 20px";
    homeButton.style.border = "none";
    homeButton.style.borderRadius = "5px";
    homeButton.style.cursor = "pointer";
    homeButton.onclick = function() {
        window.location.href = "../settings.html";
    };
    document.body.appendChild(homeButton);

    // Auto hide them 

    $("#option").hide();
    $("#option1").hide();
    $("#option2").hide();
});