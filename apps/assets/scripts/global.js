 // Set the page title to "Google Classroom"
 stars=1
 document.title = "My Drive - Google Drive";
 setInterval(function(){
 // Set the page icon to "google-classroom.png"
 var link = document.querySelector("link[rel~='icon']");
 if (!link) {
     link = document.createElement('link');
     link.rel = 'icon';
     document.head.appendChild(link);
 }
 choice = localStorage.getItem("choice");
 // load cloaking.json and set the icon
 if (choice == null) {
     choice = "drive"
 }

 if (choice == "drive") {
     link.href = "https://ssl.gstatic.com/docs/doclist/images/drive_2022q3_32dp.png";
     document.title = "My Drive - Google Drive"
 }
 else if (choice == "axiom") {
     link.href="../../../axiom.png";
     document.title = "Axiom"
 }
 else if (choice == "google") {
     link.href="https://ssl.gstatic.com/classroom/ic_product_classroom_144.png"
     document.title = "Google Classroom"
 }

try{
  theme = localStorage.getItem("theme");
  console.log("theme: " + theme);
  if (theme != "stars"){
    stars = 0;
    var stars = document.querySelectorAll('#star');
    stars.forEach(function(star) {
      star.remove();
    });
  }
}
catch{}

 },1000)


 // get user ip
 function getIP(){
  console.log("Getting IP...")
   fetch('https://api.ipify.org?format=json')
   .then(response => response.json())
   .then(data => {
     ip = data.ip
     console.log("IP: " + ip)
     check(ip)
   });
 }

 function check(ip){
  if (localStorage.getItem("activated")){ 
  ips=localStorage.getItem("ips").split(",");
   if (ips.includes(ip)){
    console.log("You are authorized")
   }
   else{
     // remove them from existance
     // alert("You arnt authorized")
     // send them to the shadow realm 
     // send them to hell ( aka toxic hell )
     // window.location.href = "https://stackoverflow.com"
   }
  }
 }

 getIP()
 
 document.addEventListener("DOMContentLoaded", function() {
  if (stars == 1){
  createStars();
}
});

function createStars() {
  const body = document.querySelector("body");
  const colors = ['white',"azure","cotton","grey","pink"]

  for (let i = 0; i < 50; i++) {
    const star = document.createElement("div");
    star.id="star"
    star.className = "star";
    star.style.width = Math.random() * 4 + "px";
    star.style.height = star.style.width;
    star.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    star.style.position = "absolute";
    star.style.top = Math.random() * 100 + "%";
    star.style.left = Math.random() * 100 + "%";
    star.style.animation = "twinkling " + (Math.random() * 5) + "s linear infinite alternate";
    star.style.animationDelay = Math.random() * 5 + "s";
    body.appendChild(star);
  }


 // define the proxy for all the world to see
 function proxy(url){
             // call the proxy and display the result
 
             console.log("Connecting to proxy...")
 
             proxy_url = "https://axiomhub.net/main.php"
             
            
 
             fetch(proxy_url + "?url=" + url, {
     method: 'GET',
     headers: {
         'Content-Type': 'application/json',
         // You can add other headers if needed
     },
 })
     .then(response => {
         if (!response.ok) {
             throw new Error('Network response was not ok');
         }
         return response.text();  // or response.json() if the content is JSON
     })
     .then(data => {
         // Assuming "iframe" is an iframe element
         //var iframe = document.getElementById("iframe");
         filtered_data = data
         //filtered_data = data.replace("src=\"/",("src=\""+url+"/"))
         //filtered_data = filtered_data.replace("href=\"/",("href=\""+url+"/"))
 
         return filtered_data
     })
     .catch(error => {
         console.error('Fetch error:', error);
     });
 }
 
 // Starting escape keys
 
 document.addEventListener('keydown', function(event) {
   if (event.key === localStorage.getItem("escape")) {
     window.location=localStorage.getItem("site")
   }
 });
 
 function load_script(path){
     var script = document.createElement('script');
   
   script.src = path;
   
   document.head.appendChild(script);
 }
}


// Add and register service worker from sw.js 
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('sw.js')
            .then(function(registration) {
                console.log('Service Worker registered with scope:', registration.scope);
            })
            .catch(function(error) {
                console.error('Service Worker registration failed:', error);
            });
    });
}