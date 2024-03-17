// Axiom proxy Service Worker
self.addEventListener('fetch', event => {
  try {
    // Proxy URL for Axiom
    const proxy = "https://axiomhub.net/main.php?url=";
    
    // Get the origin of the service worker script
    const origin = self.origin;
    
    // If the request comes from this origin, don't intercept it and let it go
    if (event.request.url.startsWith(origin)) {
      event.respondWith(
        fetch(event.request.url)
          .then(response => {
            console.log("Response", response);
            return response;
          })
      );
    } else {
      // Check if the request is for a web config file
      if (event.request.url.endsWith('.config')) {
        // Block the request for web config files
        event.respondWith(new Response(null, { status: 403, statusText: 'Forbidden' }));
      } else {
        // Check if the request is for video or audio streaming
        const contentType = event.request.headers.get('Content-Type');
        if (contentType && (contentType.includes('video') || contentType.includes('audio'))) {
          // Intercept and redirect the request through the proxy for video/audio streaming
          event.respondWith(
            fetch(proxy + event.request.url)
              .then(response => {
                console.log("Response", response);
                return response;
              })
          );
        } else {
          // For other requests, simply fetch directly without redirection
          event.respondWith(
            fetch(event.request)
              .then(response => {
                console.log("Response", response);
                return response;
              })
          );
        }
      }
    }
  } catch (error) {
    console.error("Error", error);
  }
});
