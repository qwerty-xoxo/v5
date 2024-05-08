document.addEventListener("DOMContentLoaded", function() {
    
theme = localStorage.getItem("theme");

theme_background = document.createElement('img')
theme_background.style.zIndex = -1
theme_background.style.position = 'fixed'
theme_background.style.height = '100%'
theme_background.style.top = "0px"
theme_background.style.left = "0px"
theme_background.style.width = '100%'


if (theme =="dark") {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
}

if (theme == "ocean") {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    theme_background.src = "assets/backgrounds/ocean.jpg"
    // append to body
    document.body.appendChild(theme_background);
}

if (theme == "light") {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
}

if (theme == "forest") {
    document.body.style.backgroundColor = "#013220";
    document.body.style.color = "white";
    theme_background.src = "assets/backgrounds/forest.webp"
    // append to body
    document.body.appendChild(theme_background);

}
if (theme == "sunset") {
    document.body.style.backgroundColor = "orange";
    theme_background.src = "assets/backgrounds/sunset.png"
    document.body.style.color = "white";
    // append to body
    document.body.appendChild(theme_background);
}

if (theme == "rain") {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    theme_background.src = "assets/backgrounds/rain.gif"
    // append to body
    document.body.appendChild(theme_background);
}

if (theme != "dark"){
    try{
        // remove stars.css
        css = this.getElementsByTagName('link')
        for (i = 0; i < css.length; i++) {
            if (css[i].getAttribute('href') == 'stars.css') {
                css[i].parentNode.removeChild(css[i])
            }
        }
        if (document.getElementById("main")){
            document.getElementById("main").remove() // remove stars
        }
        
        else {
            x = setInterval(function() {
                if (document.getElementById("main")){
                    document.getElementById("main").remove() // remove stars
                    clearInterval(x)
                }
            }, 10)
        }
    }catch{}
}
else{
    if (!document.getElementById("main")){
        main = document.createElement('div')
        main.id = "main"
        document.body.appendChild(main)
    }
}


})