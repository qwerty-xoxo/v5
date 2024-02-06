// Service worker code

self.addEventListener('fetch', function(event) {
    const request = event.request;
    const url = new URL(request.url);
  
    // Check if the request is for XML, CSS, or JavaScript files, or if it's a POST, PUT request, or a redirect
    if ((request.method === 'GET' && (url.pathname.endsWith('.xml') || url.pathname.endsWith('.css') || url.pathname.endsWith('.js'))) || 
        request.method === 'POST' || request.method === 'PUT' || request.redirect) {
      event.respondWith(fetchAndModify(request));
    } else {
      event.respondWith(fetch(request));
    }
  });
  
  async function fetchAndModify(request) {
    // Modify the request URL to prepend the desired endpoint
    const modifiedURL = 'https://axiomhub.net/main.php?url=' + request.url;
  
    // Clone the request to avoid mutating the original
    const modifiedRequest = new Request(modifiedURL, {
      method: request.method,
      headers: request.headers,
      mode: request.mode,
      credentials: request.credentials,
      redirect: 'manual', // Override the default redirect behavior
      referrerPolicy: request.referrerPolicy,
      body: request.body,
      // Add any other options you want to include
    });
  
    try {
      // Fetch the modified request
      const response = await fetch(modifiedRequest);
  
      // Check if the response is a redirect
      if (response.redirected) {
        // Construct the redirected URL with the proxy and the original URL
        const redirectedURL = 'https://axiomhub.net/main.php?url=' + encodeURIComponent(response.url);
        // Create a new response with the redirected URL
        return new Response(null, {
          status: response.status,
          statusText: response.statusText,
          headers: { 'Location': redirectedURL }
        });
      }
  
      // Return the response
      return response;
    } catch (error) {
      // Handle errors here
      console.error('Fetch failed:', error);
      throw error;
    }
  }
  