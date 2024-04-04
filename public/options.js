document.addEventListener("DOMContentLoaded", function() {
    jquery = document.createElement("script");
    jquery.src = "https://code.jquery.com/jquery-3.6.0.min.js";
    document.body.appendChild(jquery);


    function createButton(text, iconSrc, onClickHandler) {
        const button = document.createElement("button");
        button.innerHTML = `<img src='${iconSrc}' style='vertical-align: middle; margin-right: 5px;'/>${text}`;
        button.style.position = "fixed";
        button.style.top = `${20 + 50 * buttonCount}px`;
        button.style.left = "20px";
        button.style.zIndex = "28523923";
        button.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
        button.style.color = "white";
        button.style.padding = "10px";
        button.style.border = "none";
        button.style.opacity = "0.5";
        button.style.borderRadius = "5px";
        button.style.cursor = "pointer";
        button.onclick = onClickHandler;
        document.body.appendChild(button);
        buttonCount++;
        return button;
    }

    let buttonCount = 0;

    const homeButton = createButton("", "https://img.icons8.com/material-sharp/24/000000/gear.png", function() {
        $("#option").toggle();
        $("#option1").toggle(); 
        $("#option2").toggle(); 
    });

    createButton("", "https://img.icons8.com/material-sharp/24/000000/home--v2.png", function() {
        window.location.href = "./index.html";
    });

    createButton("", "https://img.icons8.com/material-sharp/24/000000/grid.png", function() {
        window.location.href = "./apps.html";
    });

    createButton("", "https://img.icons8.com/material-sharp/24/000000/refresh.png", function() {
        window.location.reload();
    });

    // Auto hide them 
    $("#option").hide();
    $("#option1").hide();
    $("#option2").hide();

    setInterval(function() {
        // if buttons are hidden, shrink "options" to "<"
        if ($("#option").is(":hidden") && $("#option1").is(":hidden") && $("#option2").is(":hidden")) {
            homeButton.innerHTML = "<img src='https://img.icons8.com/material-sharp/24/000000/gear.png'/>";
        }
        else {
            homeButton.innerHTML = "<img src='https://img.icons8.com/material-sharp/24/000000/gear.png'/>";
        }
    }, 100);
});
