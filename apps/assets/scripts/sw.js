// Jesse, we need to cook 


self.addEventListener('fetch', event => {
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
