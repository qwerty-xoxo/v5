// Glitch Framework


// Designed for the Glitch Network


// Add Jquery and Jquery UI to the document

const NoDynam = {
    createFile: function(key, content = '') {
      localStorage.setItem(key, content);
    },
    createFolder: function(folderName) {
      localStorage.setItem(folderName, JSON.stringify([]));
    },
    writeFile: function(key, content) {
      localStorage.setItem(key, content);
    },
    appendToFile: function(key, content) {
      let existingContent = localStorage.getItem(key) || '';
      existingContent += content;
      localStorage.setItem(key, existingContent);
    },
    readFile: function(key) {
      return localStorage.getItem(key);
    },
    deleteFile: function(key) {
      localStorage.removeItem(key);
    },
    deleteFolder: function(folderName) {
      const contents = JSON.parse(localStorage.getItem(folderName));
      if (contents) {
        contents.forEach(item => localStorage.removeItem(item));
        localStorage.removeItem(folderName);
      }
    },
    listFolderContents: function(folderName) {
      return JSON.parse(localStorage.getItem(folderName)) || [];
    },
    addToFolder: function(folderName, itemKey) {
      let contents = JSON.parse(localStorage.getItem(folderName)) || [];
      contents.push(itemKey);
      localStorage.setItem(folderName, JSON.stringify(contents));
    }
  };

jquery = document.createElement("script");
jquery.src = "https://code.jquery.com/jquery-3.4.1.min.js";
document.head.appendChild(jquery);
jquery = document.createElement("script");
jquery.src = "https://code.jquery.com/ui/1.12.1/jquery-ui.min.js";
document.head.appendChild(jquery);

console.log("Added Glitch Framework");

// Determine if the user is running on a local deployment or on a web deployment ( file:// vs. http:// )


if (window.location.protocol == "file:") {
    console.warn("Running on local deployment.");
    const platform = "local";
}
else {
    console.warn("Running on web deployment.");
    const platform = "web";
}

// Custom library
var g = function(selector) {
    return document.querySelector(selector);
    return this;
};

g.prototype = {
    hide: function() {
        this.style.display = "none";
        return this;
    },
    show: function() {
        this.style.display = "block";
        return this;
    },
    cloak : function() {
        // get page url
        url = window.location.href
        if (platform == "local") {
            return "Local deployments cannot be cloaked.";
        }
        else {
            html = `
            <iframe width="100%" height="100%" id="iframe" src="${url}"></iframe>
            `

            // Create about:blank page

            win = window.open();
            win.document.write(html);
            win.focus();

            setTimeout(function(){
                window.location.href = "https://nasa.gov/";
            }, 500);


        }
    }
};

