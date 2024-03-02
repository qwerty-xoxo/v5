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
  //console.log("theme: " + theme);

  if (theme == null){
    theme = "stars";
    localStorage.setItem("theme", theme);
  }
  if (theme != "stars"){
    stars = 0;
    var stars = document.querySelectorAll('#star');
    stars.forEach(function(star) {
      star.remove();
    });
  }
  if (theme == "winter"){
    document.body.style.backgroundColor = "skyblue"
  }
  else if (theme == "summer"){
    // nice orange sunset
    document.body.style.backgroundColor = " rgb(255, 140, 0)"
  }
}
catch{}

 },100)


 // get user ip
 function getIP() {
  console.log("Getting IP...");
  fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
      const ip = data.ip;
      console.log("IP: " + ip);
      check(ip);
    })
    .catch(error => {
      console.error("Error getting IP:", error);
    });
}

function check(ip) {
  if (localStorage.getItem("activated") == "true") {
    let ips = localStorage.getItem("ips");
    if (ips) {
      ips = ips.split(",");
      if (ips.includes("1")) {
         console.log("NUNA");
      } else {
        if (ips.includes(ip)) {
          // Do something if IP is found
        } else {
          // Handle unauthorized access
          alert("You aren't authorized.");
          // Redirect unauthorized user
          window.location.href = "https://stackoverflow.com";
        }
      }
    } else {
      // Handle case where 'ips' is not in local storage
      console.error("No IPs found in local storage.");
    }
  } else {
    // Handle case where 'activated' is not in local storage
    console.error("'activated' flag not found in local storage.");
  }
}

// Call the function to start the process
getIP();


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

// Check for shutdowns
url_shutdown = "https:/axiomhub.net/main.php?url=https://raw.githubusercontent.com/infdevv/gld/main/shutdown.txt"

// log response
fetch(url_shutdown, {
  method: 'GET',
  headers: {
      'Content-Type': 'application/json',
      // You can add other headers if needed
  },
})
  .then(response => response.text())
  .then(data => {
    console.log(data);
    data = data.split("\n")
    if (data[0] == "1"){
      reason = data[1]
      shit=atob("ZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFPRUFBQURoQ0FZQUFBQStzOUo2QUFBZm5FbEVRVlI0MnUyZENYZ1ZWWmJIRFR2WnlMNFFOdGxESUdrSENOQWcwSWdoQVlFT1NHaVZGa0VnaWdKcGJEK0ZBTW9FQ1NnMFBiSzAwRFNpamFQZ1FBUmFzVmtVSVN4dXRHUFU3MnVRUnFHSFZqTGo0RER0UXBZMzkxL1UvM1hCb0daNVNlcUYvKy83N2xmdlZWNWUxYXU2cDg2NTU1eDc3blhYQ1NHRUVFSUlJWVFRUWdnaGhCQkNDQ0dFRUVJSUlZUVFRZ2doaEJCQ0NDR0VFRUlJSVlRUVFnZ2hoQkJDQ0NHRUVFSUlJWVFRUWdnaGhCQkNDQ0dFRUVJSUlZUVFRZ2doaEJCQ0NDR0VFRUlJSVlRUVFnZ2hoQkJDQ0NHRUVFSUlJWVFRUWdnaGhCQkNDQ0dFRUVJSUlZUVFRZ2doaEJCQ0NDR0VxQkllajZjQldnVS8yOUMweHJwcVF2aEcrQUljcnhzZlBYcTA3OHFWSysrWk5Xdld1dlQwOVAyRGJoejB6cTJaWTNibHpNeFp1OGJzUDNqd1lKL1BQdnNzU0ZkT0NCOVNYRndjbjVlWE43OXQyN2FmTldyVXlCTVZGVlhTdW5YcnN0allXRS9yaEZhZTJPZ1lxMFZGUkpZMGI5ck0wNjVOMjdPNWMrWXNPSEhpUkFkZFBTR3Fwd1diUFBIRUV6a3hNVEZmUlVaR2VxNi8vbnBQZkh5OHAyUEhqcDZFaEFSUFltSWlCTTdUcVVOSFQ4ZjJIVHh0VzdleDNuZTR2cjBuUGpiT1l3VHk0dEw4cGJrd1QzVTFoYWdrWDM3NVpjU3dZY1AyUXZOQitOcTBhV01KWDlldVhUMUdJM3E2ZE9saTdldmNzWk9uZmJ2cnJRWmhoQUMyYWRYYTBwRFh0MjNuYWR5d2tXZklUNFlVUXB2cXFncFJRVDc4OE1PT25UdDNQbVUwb0NWNHh2VDBtUGVXTUxacjE4N1RxVk1uN3o0SUhScUVFRUlIalpqWXBhdlY4QnBDbWhEZkVrSjVEdCtycXl0RUJUUmd6NTQ5aTJCK1F0aTZkKzl1YVR4b1ByUzR1RGhMR0x0MTYyYnRod2tLUWV2YXVZc2xqRFJKSVpEWVlqK0VzRlhMQkU5cXI5NGZTQ01LOFFOa1pHUVVRQU5DeUdCMlF1UEJCS1h3SlNVbGVWcTFhbVg5clVPSERwWUpTb0dENWtQRGUyaEdDQ2YyZCsrV1pPMFBDUXIyWkkwYlY2Q3JMTVIzOE5KTEw0MkhQNlo5Ky9hVzRHRUxRWVBHdzJ0b1FqaGtzQS92WVk1aUh3UVNyMkdxd256RjN5Q3czRnJDYXB1d1RabzA4VHovL1BQamRiV0Z1SW9aYWdUc05BUUhYazhJRmdRSXdnUGh3bjRLSWdRTisvQVphRWdJR1Q0THdjVitDaVQyVTRpeHhUNDBjNXh6Wjg2Y2lkQlZGOExCM0xsemM2R2xJR1JYT21JZ2ROeVA5OFljTFd2V3JGbTVHUzkrbUo2ZS9scHljdksvQndZR2Vvd1pXd0xCaE9CUzhQQWFEZC9IZmFHaG9XVUxGeTZjcjZzdWhBMkM2c0hCd1JjaGFCanZRZmdvaEMxYnR2U09BNkhwWUs1T21EQmh3OG1USnpzNXZ3T2V6L3Z2djM4bC9vN1A5dWpSdzZzdExRZU8yZUwvOFgwUTZxQ2dJTTlISDMzVVNWZGZDRU5XVnRZV2VFTnBkdEtjeEd0b01RZ1ZCRFFnSU1EejVKTlA1bnpmZHozMTFGT3pJSWpRbXZoZmVsWHhmWEQyd05URjkwVkVSSGpNY2VXa0VlSzExMTRiQktHQmdIQ3N4ekVlMzBNb01mWWJQWHIwdG9wODUrMjMzNzdWQ0ZvNXRTbkhnMGh6dzNjeXhJSGo3dG16WjdEdWdyaG1RWEoyNzk2OWo5RDdDUUdCbG9MNVNlR0JJR0YvZ3dZTlBNZU9IZXRXVWZNV244ZDM0WHZ4L1RCRnJlQysrVTY4eGo3ODNZd3JpNVRXSnE1Wm5uMzIyYnNnTEV4TGcvbElad3k5b1JBY21JNzJlSy9DNFBOUlVWRmVENmt6YkFGVGxhRU5PSFJXcjE0OVZYZERYSE1nUkdBRXI1Z2FqeVlvWTM0UVNnb05RZ3FmZlBKSmZHVy8zMmk2dnlIaG05NVN4aENwZFhFY2UzeDRRWmswNHByajBVY2ZYUlFXRm5aWi9BNW1JZ1FHWTdmazVHU3ZOM1RObWpWVHFuS005ZXZYVDJ6Y3VMSDEzWFRJVUFOUytIR01rSkFRejV3NWMvSjBWOFExUTFGUlVXTFRwazI5bW9tQ2lQZlFXQmdUd2hGak5HQjVyMTY5M2pGanRwQXFqamtiOXUvZi96QzBJVUlURUVDYXUvVEFjanphdkhuekNvODVoZkI3MHRMU2RrVkhSM3ZUenFDaEdGaG5UaWk4bHcwYk52VHMzcjE3VUhXT2hmOUhFZ0NkTW94QjBqemxBeUFtSnFZOFBUMTlsKzZPcVBlOCt1cXI2WWozMGVsQ3djT1c0elFJQnB3eDQ4ZVBmOEVYeHh3N2R1d0w0ZUhoM3JRMk9vSTRGbVVvQk1KYVVGQ1FvYnNrNmkyb0VZT1FBRE5ZSUFEWVdqUGtiZE9RSmlvKy92SEhIL3RrL3QveDQ4ZmJROEE0SXgvZVVXaGFiSEVzYW1MTTNqQ0NlZ0l6K25XM1JMMEVwU3JnaktGMzBoaytnRURRWEVUWVlQNzgrVDUxbEN4WXNHQithR2lvTnltYzRSQys1Nng5SEh2cDBxVTV1bHVpM29FUWdPRUxhanMwYWtPR0lqQStoQVBGbUtTbk1hdkN4MW80MkJ6cll4eUw0MUFJbnpPR2lOZDRHSVNFaEh4VjJaQ0lFSzVuNXN5WnErR01jV28vcHBEUldVSXpkTXVXTFRVeTMyL3IxcTJaMTluekZaMkN4NGNBVFdIenNQZzZPenQ3bGU2YXFEZTg5ZFpidmRINUlXalFmZ3pJUStzd2ZtZFBVZkwwN2R2M1NFMmV5L0RodzNjakRzblFDSjB5VGtIRU9TR1Q1L0RodzZtNmU2SmVNR1RJa0wxd2lLQTVCZEU1Q1JjQ2djQjZUWGQ4UEJDYU5XdG1uUXM5czg0S2JqQ0hjUzZJTGZidjM3OVFkMC80UFRBQkVlOUR3U1pPTCtKNEVJMW1JUncyZDk1NTU4YmFPQ2R6bkExRzJNcWRIbHBuREpHMWJGQnU4WVVYWGhpanV5ajhsdlBuejRjbkp5ZC93R2xFMERnY0EzSmNSaUhBYkhkZmhTUitpS0tpb2c1bWZQcS9kQkx4NGVEMDJtS2ZyUzMvVWx4Y0hLSzdLZnlTWmN1V3pZTHBCKzBDVFVqaFkrNG1KOXUyYU5IQ00yL2V2TnphUExjVksxYms0TndnZE5UT0VENk9UekV1Wkxna0x5OHZWM2RUK0IzbnpwMkxhOUtreVRmT0lEeTJ6QkZsU1h0MCtwU1VsQStxbWg5YVZjenhHdjNvUno4cWdzYWpPY29TR2pnL2pBMGhpTmh2UGw2dWRTMkUzekZ4NHNTbm5jNFBoaVlZbnVCRVc4akR0bTNiNm1UYzlmTExMNmRqdkVyTnpLbE5ORTBkWThhTGt5Wk5la1ozVmZnTmh3NGQ2bzNPemZ4TU9tS2NOVUZaZEdudzRNRUg2dkpjYjdubGxsZndzSERHQ2ZHZXMrK3BJV3ZEY3l1RXI4eThnQUVEQmhSeWJJVnhIOHhPbHBkZ2g0Y1pDRUd0NnZRaFkrNEd2L3Z1dTMxMzd0dzV2TEN3c0MvcmlGWm1NVkdBNHlNbWlQUERPVE4yeVpDRjh6ZjA2dFhyWGVXVkN0ZXpZY09HaWF6dnduR2dNeldNRGhDRUNLWlBuNzZ5S3NMMzhNTVBZMEx3TjVpVGlNUnN5RjVzYk94WDgrYk5XMVFWVDJaMmR2WnE1SlhpSEpIWXpjSlN6dXJkK0IyWS9iRnUzYnE3ZEplRmE0RTJNbHJqSkxRZHRBZERFQndYNGowelk0d1EvbmRsUzBwQXdJWU9IWG9ZTlVOWko0YkhnTkFnMW1qTTI3Y3FtM2VLOHpEZmQ0NmEycGxJZ0dOZ2RnVzlwZVp6bi9vNnIxVUluMkhQZkxCS1V6QVZqSld6S1l3c05iaDQ4ZUpLejFTWU1HSENpOUJZenJxa1RQekc5N0tlYUVaR3h1N0tmcmZSY0ZPaFdia1FEYXQyd3d4RklXRzhoNENHaDRlWFBQVFFReXFGSWR3SEF1MHdRNDFBbExPS05pdGdPNU9rVGFjdXUrR0dHOTdIMktveVk3ZDkrL2FsY2pJd3RCN25JTUs4eFhzNGVWSlNVaXhCd2Vld3RuMGx4N0tOVTFOVGo1bnZMTGMxbnRjY3BhZVVDNU1pazhab2ZhMTFLTndGcW1qREhHU3hKZ2JCbmFsZzZNaW81WUxaOVpYOS9vVUxGejZDRW9iNFRqcE9XQ2lZaThUUUM0dnhabTV1Ym41bGo0RlNHQ3dNUlkzSWpCNG1uR00vQ2tPTkhqMWExYnVGZTlpL2YzOXZtSEkwNHhpZ3Y3SnVERFRXeUpFanE5UjVKMDZjK0h0b1dKWkNkRmJvZHNZZWNUeU00Y2FQSDE5Z2E3aUF5aHhuN05peFc3blNFODFkamp1cDNWbVNYOVc3aFN1QVNkbnJuM29leFdLY2FGaVlFdzByNDFwcnlOdWFCQUpUblpCRTlyUnB2NCtPakxJVys4UUNvRmlWRjYrN2RPcHNyYzdMcGJHeFhqMWE5dFRzVFZVMXF4bkF0enk1NWpoWWRCVGZqUzErRTFiL3hURjZKUFg0UUNFTFVlYzgrZXRmVDQySml2WXVXdzFCNUNxNTJOSWt4WVRlWC96aUYxVjJhTXg1OEtIOHFJaElTd2lzN3pWYk5xN1N5MVY3VzhiRmx6MzR3SVA1VlQzVzNMbHp2VFZSSVlUNFhnZzdCUklOcjF1RWhIcFFza085UU5RWmNOVjM3dGo1YjlCUUVBd0tIem9vQllVT0RsVERyazZWNnhYTGw4OE9EUTZ4aEEwQ2IybFpjeHdLQnBmS1JndHZFVmIyNjEvOTZvSHEvQzVqZHA2MTFxc3dHcDIvQjlxUER3RUlKZjZXa0pCUXJPcmRvczU0NElFSDhyQU9QRTFRZEZKc0lRanNzQmcvd2J4YnUzYnRsT29jYS9QbXpXT2JObTV5bVJCeWJYcWFwdFJhelpvMDlXemRzdlhXNmh3UFFYbU0rN3AxVGZSK1A0N0Y0MEQ3UWhBakl5Tkw3cjMzWHBYQ0VMWFA4ZVBIRXhHU29KWkFoNFFBUUR0UUMwSkk3Qm5xUjZ1Nzh0SGhBd2RTRzF3WDROVzBIS05SUUNna09HNkFHYW9lTGF4Y2lPSnFEQmd3NEVqcmhGYVhqUVZwK3VLNDFzUEFtTnR3U3FsNnQ2aDF4bzBidHgxYWdJNFJhaUdhaGpRWGtWWlczU3JhNE05Ly9uTlhDQmUrbDBMZzFJSTBFL0Vlbjd0eUpkK3FjTUFJZnFNR0RiM0hvakR5dDFySGJOOGU0OTJ5ek14TVZlOFd0WWNkNTdzVWZuQTRaTkJndnZGOWZHeWM1N2JiYnR2c2kyTisvdm5uc1JBdWpnT2RHc2xwSnVJMVB1ZXIxTEx4V1ZsYnFHRmhZdU9oZzJQVDlNWmtaVmFKMjd0M2I3cDZoNmh4N01td0g3UnAwK2FpRlV1elRWRTZadWdvc2MzQ2Nxd2w3NlBqTm9BNVNzMEg0ZWR4S1pBMFNhRzlmUFY3RWJKbzNyVFp0eHdEWWd1ekZBS0ljMkFtRFRKMVVGMGNDZWJxSmFKR3dacnhTTnZpckFoMFNnaEdZcGV1M25nZFhzTTVzbmpSNHJtK1BIWkVXSGdwQkp4T0h3bzdqdWtNSFppL24vWGxjUjlmOHZpOHhnMGJlWVdjZ204NW9SeTFVeU1pSXI1ZXZueTVRaGFpNWtCVjZyQ3dzQXRKU1VrbFRPV0MrY2xPeVE0YUZ4TnIzcmZ4ZVJYdHZuMzZIb0VBY2t4Mm1URFlnZ2dUT0cxbzJoNWZIaGZhTGJGTDRzYzRWbEppdDh2TVlVN1pZcXBlU0VqSS82Z1VocWd4WnN5WXNTb3FLdW9iUFBXUk1HMVZLa3RvWlhWR2JMdDNTL0tPeWJiV1FCVnRaTUhFUnNkNEV3R28vV2dTUXpDaUk2UEtaczJjOVJ2YmhBM3cxYkZSK2hDL0M4ZWpNRnBqUkhzNkZWZDZpbytQTDUwd1ljSkc5UmJoY3hDU1FOek1hTDl2b0FYaGtMQUtJOWtwWE5qU2JkODNOZlVZeDNHK1BJZjh4L0wvT1N5MFJha3pNd2ZDaHdjQXRoQ1FtS2pvaTBzV0wxbFFFOWZncHNGRERrRFRVdmh4VEl3RnFRbVJXSTdYK09sdnYvMjJTbUVJMzVLV2xyWW5PanI2QW1jdmVPY0tKbHdTUkdvbWFBdkU5R3JpSE5iK1ptMTJZTFBtbCtWeFVpRHBzRUZXelliZi9uWlNUUndmMWJ2eCs2RHg2U0dGRm9Ud2NTWStoTkpjbjlKQmd3WWRyRzVzVkFndjI3ZHZId010MkxWcjE3SXI1OWhSQTBJWW9TVW0zM1hYMHpWMUhsdWVmLzVXT0VpY01UdDZMZWt0aFpEczNyVnJlRTJkdy8zM1RGK05IRllJUDhiRHJGSEs4djdNbFlVMjNMcDE2M2oxSHVFVHA0VHBXS2ZNR05BcmdGem4zUm9QR1lGSWlHOXBDUUJDQ0w0S1NWeU4vWHYzL2dSQ1JsT1VEaEtPRWJIRjM5OTc3NzJrbWpxSDRrK0s0NDAyL29aalF6Nk1PS1dLMThaKy9ZbXFkNHRxODloamorV0dob2FXY2w0ZFY5Wmx4VFIwZm1qRDVrMmJlWDYxYk5tc21qd1hJK0RkNkJ4aDVncHpWam5MQWFHUm12Wk9MbnQ4MlN3OGNLdzRwYmtPbkVQSnNvbWNYSXpKdjdtNXVTcUZJYW9PT3JPZEtsYkNUQlZxSEpoaVZycmFQMWJhL1V0TlY5RkdpS1JGaXhaZjQ1alVQRXlUb3phTWpveTZVTk9GbUxEZ2FJOGVQZDYzNnBUYUdoa05EeU1tbHpPRWd2emFtclFPUkQzbmpqdnVlTnFNOWY2T1RrNnpENTBMNXVlbFNhM2R2ZDVBakJ0cnd6UTJHdWF2enBXVW5IbWNlTjJsWTZkUGEyT2lyZm05VnVvZXMzWVlLbkZPNVlKUXRtclZxalF6TTNPemVwT29OUEFFb3Q2S3M1TXhaWXNCYThzWkV4L3ZHVHAwNko3YU9xK2VQWHQreURHWWxhMWlhMExtcmc0Y2NPUFIyanFYNGNPSDcrRXNDenlROEhCaUFnRTl0eGczUTFoOWtjUXVyaEVRNEVibHNZRURCeGJHeGNWZGhOQ2hvekVFQUExSVQ2VHBaT1dZSlZFYjVlRVplQjgyYk5qckVIeldtS0VRNHJ3Z0JMZmZkbnV0RldBcUtpcEtoTGxPQVVTNkhxNFhzM2R3M2ZEQVFQaWlYNzkrUjFVS1ExU1lUWnMyd2JWdVZVNmpNOFk1Y1pjQ0dSRVdYbGFWS3RyVllkS2tTYjlIMVRXdUcwRVRFSjNlakFkTDUxZWh5bHAxbVB2dzNFVW9jK0VvcldGdFVaV040MlU0c25BOVZiMWJWTmpwWURyUFdZeGxXS2JRV3RTbC9UK2NJQ2s5a3EwbmYyeDB6SVhhTHUyd2NPSENSOFBEdy8vaGtiU25HV0dMV2Y0STZOZm0rY0FKRkJVUmVZRmpRRmdJMW93T2UzazFla3J0TlRnK1YvVnU4WVBBcFI0YUdsckNlcDVjRk1YcGpVUlFQaTRtdG16TnFsVlRhdnY4MXE5Zm54MFVGRlR1TFNqczhFNGlrTDl6NTg1YmEvMmMxcTZkNGcyZDJNRjZyblhJcW0wSTVpUFVvNUNGK0Y2c2tNU2wvTkNMMUlKTVVhUG1zVFZpZVhMM0hrVjFrWmFGV2pOd0dERnhnQUlJYmRnd29JRUhLelRWeFRqNmh1U1U5NjFFZG52cDdjczh1STZhcGZoNGJTMExMdnlRMjM1MjI0dW1vL3lkTXdJWWZLWW1SQWZqd3A1WVlMTXV6dkdkZDk3cGcrTTd4NFQwUmdiVVlRZC80NDAzQnVJQnhvTEhmSGc1cnlIMkd3dmk0cmd4WTFXOVcveC9EaHc0TUFoWklCakhZQUVVUHNHWkFZTFhNS2xpWTJOTHExcEYyeGNVRlJWMVFQVTJUaC9pZUJBTnlkdGNwN0F1eU16TTNBWlBxSE5tQlpjSzUrUmY1cmR1MzdaZHBUREVaZVpVb3o2OSs3eHBOTXBGZUQrdGVLQTlua0ZIUWtnQW5TZ3hNYkVFSHpkbWE1MVZGb09RWVdVbXI1YXhaN3ZicysxUDEyV3VKc3g1aEd3d2p1WnNlMXcvcS9hcVkrWS9LdElON0QvZ1Q4b3JGVjdXcmxrenBVbWp4dVh3N3JGY0JOZVM0Q3dCZENiVCtTOVdwNHEyang0WVFlYWNUbnVYMzdZZE14RENRVGNPZkxPdXB3L05tVE5uSGg4U3ZIN1dNbXQydGhFZWNCREdzTkFXbnFXTGw2b1VocmkwUUdhTGtOQnZqQUNXb1RQRDg0a093eHFibkJtQXA3c3h0YjZvYXhjN25DRDkrdlY3RzlxRlFzaGdmZGE0Y1hVKzFrS0l4MWdPWHpDang1cnVaSzRqdEIvT2szTXZzUzg0TU9oclZlOFcxOTEzNzMyck1CdmR5cnMwNHhXbXFhSFRXQW5KdGttSy92VzczLzN1TGplYzg3aHg0MTdCMk5XYU1tUjdSK05pWWt2dW56NzlOMjQ0djZlZWVtcDhjSER3SllmV0ZhVWdPUVBFQ3V6SHhsMmNObTJhcW5kZnl5RHRDckUxMDRuTG5Oa3dORXN0VTgvV2hLbDJ5UW8za0pPVHM1WXoyWm5YYXN5N2txWDVTK2U3NVJ4Ly9PTWZ2NHR6eEhWRU9odk9FZlZ4a09MRzYyek5md3l3NW1DcWV2YzE2b3dKR0R0MjdJN1dDYTIrZFZiUFprb2EzZjU0bXNNYjZhWUVaR1ROR0pPdnhCcDMyVE1XUW9ORHlwOTkrdG1mdWVVYy8vakhQdzVFYVVoT1BLYlFPZU9hMk1LVE9tclVxRmRWQ3VNYVpNZU9IUmtJYmp1cmxWRUFXYmNGKzJEMllSVmVONTM3dW5YckpzUDV3VmdoVEdZOFYxNS8vZlhCYmpwUFkycHVSUG5IS3hldFlmb2ZyejFDUTYvV1VkeFYxSjBXYk55blYrcEhNSStTdS9md1ZpdWptWVJaRXF5aUZoZ1lXT3EyREk5ZHUzWU5kMmJOY0U3amtTTkgrcmpwUEUrZE9oVVgxRHpRV3gyT2dnY3R5RW5SYVBiNCs2U3FkMTlEUExGMGFVNUlVUEJsbllPTHF0QjVBTUhFNHA5NWVYbTVianQvby9INndrVEdXQlZlVW14aCtxSFR1KzFjOHhZdXpFVTRBa0tINjhyeE5qUWs5bUZ1SmdRUk16R2VYTEZDSVl0ckFidFFrVGRlaFViSEFjSVRMR21QYlVoZzhBVTNCcFEvL2ZUVDl0QjhMTHRJN3kwMHZPdXNEcVBkMnJWdGU0N1htOW9QRGhwc3JiS0psekoreXJCMng5OFZzcWovVEwvbm50WHdKSEpSRXp5TklYek9RRDJyYU52ekNsMEpxbHlqZmt1TEZpMHNEK1B5NWN0bnV2VmNYM3JwcFV4Y1Q0WXByQldNamFYaG5YMS9hWUkwbkV0bDA2Wk0yNkJlV28vQmVudm9ETkIwZkFMVEZPVllrQ1h0aC94a1NLSEx4N1ZObm52dXVaL2w1dWJtdit3SFRvMjBtMi9lZldtTmpyYmU4YmV6ZGc5ZVl6OVdsRHEwZjM5djlkYjY2WXhwa0o0MmJJKzUwYVdzVEhibHV1OHdrYmpJNXR1MVVMS2lPbzZscSt3TGNQUDEvOU5iZitvTkx5ZzlwYmpXTEtXUDJmaE1hVE1Qd1BLTTlJeFhWUXFqZmdtZjFUbXRLdHIySXB0WHJxakxwekdlenFZVGxOeVRuZjIwbi95MmhzNnQyNWx4LzR5VjhFaHpnVkhHWmJtWURmY2hkTFRwbVUycTNsMnZuREhGeFNIbUpuOW1Xam56RjJsNlFnaTUyaTZlMHNHQlFTVnczcmhkK0s0VVBGOHZQbE1UbkR0MUtpNG1LdnAvblN2OU1uN0lhbmJNTlkyT2lQelBtcTdqS21xUngvTHljcU1pSXN1WnZZRWI3bHpaaU90SlFGUDZpNXNjRDVZVEowNGs3ZHUzYjhpWk0yZjhacWI2NDBzZW40VnhIMWVSd3ZYbm9qcThKL1JVejVzN2Q3NTZiLzNRZ3ZGY3Y4RzVlQXFEeGV3STl0TzUyTzFqRVp6ZmtpVkw1b1dFaEh5THQvQ01ZanRvMEtBakJ3OGVIT3dISm5SakkzU251YVFiVm5oaWtnVEg1clJVbWpadW9sSVk5WUU3SjB6WXlNQXdiN2JUSzhxR2NZamJVNmNnZ0NOSGpud05MekhMSDNtdGlCTWlheVk2T3RvU3h2WHIxMDl4K3ozWnRtVkxPZ1NNV1VuT1lsV3NFZ0FoUmFXQXJLeXNGOVdML1pnOWUvWU1oa2NPbmpnK1haMXhLdDU0YTRucG00YnVjdnZ2ZWVTUlJ4N0RGQ0VrUFVQd01Oa1llYU1VUkFnbUJORWZaaVZrREJ0V2dDWFdjRThRTXVLRDBSa3FRallOTkQxS2o2ZzMreUV3ZTI2ODhjYkR1S0c0Mlp6eWd4dE9Sd0E5Y3dGKzBISHRsRFFyU3lZcEtjbEtWV01GTTY2SWhLbERFTXFwVTZjKzQvYjdjN3lvS0RFNE1NZzdGbVRja0xNdE9GNlBqWTMxM0hUVFRXOHBaT0dIMkJOd0xXSHIzYk9YZDIxNWpnT2hEZEVCa05jNE8yZTI2eWVXSW1tN2FkT20zcHFlenJYaVdVWUNCYW93NndONXBmNXdqM0ptNWl6Q0E5STV2OUE1bmN3cUpId3BPYjFzMDZaTkU5V3IvUWdVUXdvTEN5dEJaOFhUbEd0SE9FMGVPbVBNdU9QaWwzVllvYXlpSURzR1JaUllCWTdhajhXVXVEQW4yaVZEd1AyYUE2VkNZcU5qem5NQ05SZmM0ZjJ4d2haMm1Reno4Zkx6NTgrSHEzZjdDWFBuemwyRUJTcWRwZmJZU1hGVFljN2hQVHExUHpneUFPWUtZbnprRkRhdTlRRFRGR1pvY25LeTlmdHNqNm0vV0N4VEF3TURyUWNKdExpMTVxTTlUR0N5TjV4cXNGZ2VldkFoVmU5MitSalF5b3hCMlQxTTYrbmN1WE01T2lUSFRzN1ZaTkZoMGN6K00vNlNiV0lYbVBLV1ltUkpRUzY0Z3YzNHJSZ1h6cGd4WTQwL2pkM043emdKWjFOS1NvcDNSZ3N0Rjd6bkVBSmpTQzA0NnU2YmFXV00zSGZmZld1TUtWcktxcy9vcU5BUTdMak9TYkI3OSs3MXE5bmNjK2JNZ1Nid2NKME1Qa3dnaU5BaTJJL3g0TW1USnp2NTArOUNLWXhtelpwWkR4Q2FwYzZFQ21wR2FNTzc3Nzc3YWZWMkY0UGxwSU9DZ3NxNEFBazdLQ2Erc21vYU9pL0dpbVBHalBrM2YzelFqQmd4WWpQTWFQd0dQbFJva3VJakw3NzQ0aGgvdkhkVHBreDVCa0xJNldVTTNEc25YYk13bE1va3VwaUNnb0t4NklnVVBxNkRnUGNZQjZMVFFpRHhtVE5uem5UeXg5OEk4MjNObWpWVGpORDlGZDVTN0lMMkd6VnExRDVNMWZMWGUzZjgrSEZyb3JJUnVsSm5vUzNtOTdJTUpYNHJuRlRxN1M1bDVzeVpheU1pSXJ5dWVycnhvUlV4NXNBV0MyemFacDNycC85ODE3alhmdDBRNDEvRU4yRUIxSWY3bDUrZlB6OGlMTnliUlVQbkRFTVgxanhRby9HenM3T2ZVVzkzS2FtcHFSOXlmQVNCb3luS3FtUm1qRmh1bXpQS3puY2haOCtlRFVSeU56Tm9uS0VrenYvRS9lemV2ZnRIdWxvdUJKVzZqT0Q5QjRXT29Ra0lJNTZlOEI3R3g4ZVhUNTQ4K1ZsZExmY3k2YTVKeVBVdHZkSXBReUhFME1MY3o3L3BRZXBDRU1nMU42allHUTlrTUJzTlFnbFRkZFdxVmJOMXRkekx2NnhZTVRzcUl2SmJaOVVET21rZ21CQkM4NkQ5OG93ZkpGaGNjMkFoRW5OelByUFhSdmMydXZNaGlOSFIwU1U1T1RtTGRiWGN5eTluLzNKeGJIUk1DWnd3RUVUbWxMSXVFRHpjNWg0WFN3aGRTa3BLeWdtTUJ4bVlaMVlKblRKb3hpdzlveXZsNG5GOXIxNGZNYmVYM2xHT0RhMGw0TXpRd3R6ZnZ5cWgyNlZrWldYdDRwalFLWVRPVEJrb3pZS0NnZ3hkTGZleGZmdjJkTXhvU1lodmFVMzJ4WmJDaU5jd1IvRkFUVXRMZTAxWHk2VXNYNzU4TnZJUUlYak9mRkVJSllMYlhNTFo3UHRDS3dHNVlnamhyWXZ6M252dkpSa3RWOHg1aERBOU9SR2J0V2lnSWNQRHd6MUxsaXhab0t2blV0NS8vLzJ1dUxmSXBZVFFjWFpCdDI3ZExsdTZPVEl5RW10TWxDSG9MUzliM1FLdjlzYU5HeWZGeE1SOFpiUmNDV3ZQc0FxZWMvMEsvQTMzOTlpeFkzcUF1dldwaW5ienpUZS9BUUZFd3hnUXdzZHhJaG9ueFpwdE9ZVFJmTzU4ang0OWlnWU1HUERtd0lFRDMrelhyOS9Sdm4zN0h1M2Z2LzlSOC81cTdVZ3R0c04yTzJTM3dncTBRNDUyK0NydGg0NzFYZTFRQmI3N2g0N2hiZVo2SHpIWCtHMWpuZndYckJmemNDeTFraXNjMDgwWW9FZkFuaFhhY0YrMGpKckxUWnNkTzNaWXFXdUlDekpFd1R4U2xvQ0FOb1JBMmpFbjd4YUN5MWtYMkJjZkgyOTkxaVd0M0xReWRGYlRTdXhXYXJjeXU1Vzc2SHk5aTlWY2JUK3VOY1ozK0R2WHRiZnVsVzE2VWdzNnkxRml2R2pmWCtGMlFZUld3NDJHMEdIckxJcmtMQWVCL2M1WUZJc01jV2IzbGJFcXRhbzFYbGRuUVNkdnM1MW5lT2podmxqM3hGNGRHV040UGpEUlVsTlRwUVg5QlRoZGtKNkdHNGs4VWp4MU1TNkVac1BONUkzRy91L3FPTXpnbHhENVRoQ3ZlcDF0QnhydUM3T2M2RXhqRVN2Y3ArdjhwSUNWY0ZCUVVKQ0ZHMmVWdUxCblU3REJETUxOcFNia1U1cmFqeHJ3dXpxT1d1WGFsZVVsT2VaajNBOURCOTRYdk9mMExBb243dVBtelp1ejFLdjl5eXkxWmh1c1hMbnlicXhveTJDOTh3YkR6TEZpaWQ5akxuRUtqVnIxMnZlWnAwd3A1QkFCbm0zZUh3Z25idWVHRFJ1bXFGZjdNZVlKK2xQTVFZTWdjbkt2YzR6b2ZEcFRBM0ptdC9PSnJlWWJUWGpsZnFZVWN0eEhKdzJHRGhEQW5UdDNacW9YMXdNd1lYVDA2TkV2WTBhNnMyU2dWZjdDSHZzeFM1OXhLUWxoelFtaDAvU25kY0pTSktna0R1dGwzTGh4QmFkUG4rNmczbHZQS0N3czdHVnU3bGJFcGZDVXhRUmZDQnVTaGJGR0htcVQyc3VqV1EzdWNiNVdxMTdqZGNXMVJtUHhKbGdteUlKQmpSbk1jaGt6WnN5dWd3Y1A5cEVYdEo1ejd0eTV1RmRlZVNWajBhSkZDMzUreDgrZnkveHA1b0gwWWNNT29nMVB6eWpNU0U4dlRFOUx0N1o0WDdNdC9WQkZXMFo2eHVHS3RNcDg1K1h0dTg5elJIckd3YXUxaXZ5MkVSbkRDOUY0YmZGL28wYmNjdUNuSTBmdG5qeDU4ci9tNStjLzhvYy8vR0ZFZmFrUUlJUVFRZ2doaEJCQ0NDR0VFRUlJSVlRUVFnZ2hoQkJDQ0NHRUVFSUlJWVFRUWdnaGhCQkNDQ0dFRUVJSUlZUVFRZ2doaEJCQ0NDR0VFRUlJSVlRUVFnZ2hoQkJDQ0NHRUVFSUlJWVFRUWdnaGhCQkNDQ0dFRUVJSUlZUVFRZ2doaEJCQ0NDR0VFRUlJSVlRUVFnZ2hoQkJDQ0NHRUVFSUlJWVFRUW9ocThuK0ovOHJmRDdRUnpRQUFBQUJKUlU1RXJrSmdnZz09")

      html = `
      <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Shutdown</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f3f3f3;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }

        .container {
            text-align: center;
        }

        h1 {
            font-size: 3em;
            color: #333;
        }

        p {
            font-size: 1.2em;
            color: #555;
            margin-top: 20px;
        }

        .logo {
            max-width: 150px;
        }

        @media (max-width: 600px) {
            h1 {
                font-size: 2em;
            }

            p {
                font-size: 1em;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <img class='logo' src='${shit}'>
        <h1>Global Shutdown</h1>
        <p>The Glitch Network is shut down. Reason: ${reason}. Check <a href="https://discord.gg/CY9CMpPY" target="_blank">our Discord</a> for more information.</p>
        <p>Please check back later.</p>
    </div>
</body>
</html>

      `
      document.body.innerHTML = html;

    }
  })
  .catch(error => {
    console.error('Fetch error:', error);
  });
/*
// check/upload to network
function checkOrUpload() {
  var url = document.getElementById('urlInput').value;
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://axiomhub.net/init.php?url=' + encodeURIComponent(url), true); // wait, this cant be. theres more scripts on axiomhub than just main.php?!
  xhr.onreadystatechange = function () {
      if (xhr.readyState === XMLHttpRequest.DONE) {
          if (xhr.status === 200) {
             console.log("Added to network");
          } else if (xhr.status === 418) {
              console.log("URL already exists! Plus im a teapot now");
          } else {
              console.log("you fucked up");
              console.warn('Error: ' + xhr.status);
          }
      }
  };
  xhr.send();
}

// ok so, if axiomhub gets blocked (sad) we got backups
function getLinks() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'link_handler.php', true);
  xhr.onreadystatechange = function () {
      if (xhr.readyState === XMLHttpRequest.DONE) {
          if (xhr.status === 200) {
              return  xhr.responseText;
          } else {
          }
      }
  };
  xhr.send();
}

firstTime = localStorage.getItem("firstTime");

if (firstTime == null) {
  localStorage.setItem("firstTime", "true");
  links = getLinks();
  localStorage.setItem("links", links);

}


// make a iframe to axiomhub.net/Glitch and if it goes to anything else then its been blocked
function makeIframe() {
  var iframe = document.createElement('iframe');
  iframe.src = 'https://axiomhub.net/Glitch';
  document.body.appendChild(iframe);
  // make it non visible to users
  iframe.style.display = 'none';

  setTimeout(() => {
    // check what url the iframe is on but not source
    url=iframe.contentWindow.location
    if (url !== "https://axiomhub.net/Glitch") {
      alert("Glitch has been blocked. Attempting to utilize a different proxy");
      links = localStorage.getItem("links");
      if (links == null) {
        alert("No links found for backup. Glitch cannot be used without a proxy");
        return
      }
      window.location=links
    }
  }, 2000);
}

*/ // Todo: add this later


document.addEventListener("DOMContentLoaded", function() {
  // Check if they are using HTTP, then turn the server into a teapot
  if (location.protocol === "http:" || localStorage.getItem("http") == "true") {
      document.bodyinnerHTML = "Error: 418 <br> I'm a teapot"; // I'm a teapot
  }
});


window.addEventListener('error', function(event) {
    const toastContainer = document.createElement('div');
    toastContainer.textContent = "Something went wrong";
    toastContainer.style.position = 'fixed';
    toastContainer.style.bottom = '20px';
    toastContainer.style.right = '20px';
    toastContainer.style.backgroundColor = 'red';
    toastContainer.style.color = 'white';
    toastContainer.style.padding = '10px';
    toastContainer.style.borderRadius = '5px';
    toastContainer.style.zIndex = '1000';
    toastContainer.animation = 'fade-in 0.5s ease';
    document.body.appendChild(toastContainer);
      
    setTimeout(() => {
        toastContainer.style.animation = 'fade-out 0.5s ease';
        this.setTimeout(() => {
            document.body.removeChild(toastContainer);
        }, 500);
        // document.body.removeChild(toastContainer);
    }, 3000);
});

 
if (window.location.protocol === "file:") {
  console.warn("File protocol detected. Use may not work.");
}
if (window.self === window.top && window.location.protocol !== "file:") { // if not in iframe and not file://
  window.location.href = "https://www.google.com";
}



// get ip
fetch('https://api.ipify.org?format=json')
  .then(response => response.json())
  .then(data => {
    const ip = data.ip;
    // get blacklist ( https://raw.githubusercontent.com/infdevv/gld/main/blacklist.txt )
    fetch('https://axiomhub.net/main.php?url=https://raw.githubusercontent.com/infdevv/gld/main/blacklist.txt')
      .then(response => response.text())
      .then(data => {
        const blacklist = data.split('\n');
        if (blacklist.includes(ip)) {
          document.body.innerHTML = "\"Fiddly dee, fiddly doo, You arnt allowed here are you? \" - Developer ( of doom ) <br> If your seeing this, you have been blacklisted from Glitch";
        }
      })
      .catch(error => {
        console.error("Error getting blacklist:", error);
      });
  })
  .catch(error => {
    console.error("Error getting IP:", error);
  });