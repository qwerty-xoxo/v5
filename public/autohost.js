// auto host

document.addEventListener("DOMContentLoaded", function() {
setTimeout(function(){
fetch('info.json')
    .then(response => response.json())
    .then(data => {
        if (data["type"] == "dynamic") {

            if (localStorage.getItem("premium") == "true") {
                if (localStorage.getItem("auto-host") == "false") {

                    return

                }

            }

            // continue

            // actually, il implement this later


        }
    })

}, 1000)

})

