// Jesse, we need to cook 


self.addEventListener('fetch', event => {
  // if request comes from this origin, dont intercept it. if it goes to other origins, intercept it.
  url = window.location.href
  if (event.request.url.startsWith(url.split("/")[0])) {
    return;
  }
  console.log('Intercepting  request for:', event.request.url);

  event.respondWith(
    fetch("https://axiomhub.net/main.php?url=" + event.request.url)
      .then(function(response) {

        console.log("response", response);
        // return response;
        return response;
      })
  )
});
