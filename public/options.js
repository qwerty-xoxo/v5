document.addEventListener("DOMContentLoaded", function() {


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

    /*const homeButton = createButton("", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABj0lEQVRIid2VvUoDQRSFPxQxoKAWAd/AQtRY+FNmLfQZXCxF1trCd0gIxC4S9Tn0Fax8gMRKg2gh2hiSyNqcgetmsptEGz0w7Ow9Z+7cuXd+4L8jZ/p5IFbLD9D0YSKFC4F74Fj/y4Zz/Uia/dFjhytF2wHqQMOsoCFbR/+X40wQGIdZLRjWaajIA+BGg9tAFdgyDreBM3ExcA3saGw4yHkOaCUiewBWjMbZHValsWNaaYWPTF4/5MAiOYGbpG3qFWWlqS5x1dimgIqZoCybw5ns9TTHeeXe7ZYNw1U8hS0bftPsriBxTvqW79qM4V48/LPhZz08ZBw0hyVg3mNfEDc0kinaVWo6nuhiU9QKsDdMihxckT/17QE1oAQ8qZWAc3FWm1pkEts0Bm6BQoq+II1d0cBt6jtoj56zYLHmGfPtoE0acU/kG3ACLALrwKFy+gq8A9OynypNc7pWjpSqGnCXlSp0t/z4skvbpgf6doELoGm4pmzdhHYkhEqZe3CKJuKibJE0Yz04/MaT+ffxBQ4VqzV0SBH2AAAAAElFTkSuQmCC", function() {
        // toggle options
        if (document.getElementById("option").style.display === "none") {
            document.getElementById("option").style.opacity = "0";
            document.getElementById("option1").style.opacity = "0.5";
            document.getElementById("option2").style.opacity = "1";
        }
        else {
            document.getElementById("option").style.display = "none";
            document.getElementById("option1").style.display = "none";
            document.getElementById("option2").style.display = "none";
        }
    }); */

    createButton("", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAvElEQVRIie3TIU7DUBzH8c/IMkOCQaBn5lDcAIfG7RJLMNhdgQPMcQYcGsMFMDgSLAliiFFM/wk06/raPlT7S76u+by8NI+h7aYs+yZYoyi7w1EufIrNLzy6x6wvfoyHPXj0iJOu+CmeDuDRM87a4nO8JODRKxap+DneWuDROy6a8Et8dMCjT1zV4dfY9sCjLyyr+Aq7DHj0jVvlA6quSP1ZNftjZnuNdZu2+LZ626Sb/vsNxgMGcMC4xv0AJqduYOAOwcoAAAAASUVORK5CYII=", function() {
        window.location.href = "./main.html";
    });

    createButton("", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYAQMAAADaua+7AAAABlBMVEUAAAAAAAClZ7nPAAAAAXRSTlMAQObYZgAAABhJREFUCNdjYIAC/v8fwJhHwgAFkysOBQCx1RPhvIcdyQAAAABJRU5ErkJggg==", function() {
        window.location.href = "./apps.html";
    });

    createButton("", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAm0lEQVRIiWNgGAUUggIGBob/ZGCcIJ2BgSENTWwetSywZGBg+MHAwPCLgYHBlkwf47RAgoGB4QmSgucMDAzS1LKAlYGB4RAWbx5nYGBgp4YFM/GE5QJqWECSAlItYKLAMKLAqAXDw4KZWFIPjD8DXTE5yRRXRj2GLaOSmw+ILmooyWgWxBSWpBbLi9H0p2Ep7imy4D+0UhoF5AMArsRry92HIzYAAAAASUVORK5CYII=", function() {
        window.location.reload();
    });

    // Auto hide them 
    document.getElementById("option").style.display = "none";
    document.getElementById("option1").style.display = "none";
    document.getElementById("option2").style.display = "none";

    setInterval(function() {
        // if buttons are hidden, shrink "options" to "<"

    }, 100);
});
