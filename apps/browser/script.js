function add_listeners() {
    document.addEventListener("error", function (event) {
        event.preventDefault();
        exceptions.push(event);
    })
}

// Try and catch of doom and gloom

try{

exceptions = []

document.addEventListener('DOMContentLoaded', () => {

    add_listeners();
    // load SW
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('./sw.js');
    } else {
        console.warn('Service Worker not supported in this browser.');
    }
    
    const addTabButton = document.getElementById('addTab');
    let currentTabId = 1;
    let nextTabId = 4;
    let dragSrcEl = null;
    tabs = [
        { id: 1, name: "New Tab", searchValue: "" },
    ];

    const searchInput = document.getElementById("search");
    searchInput.addEventListener('input', updateSearchValue);

    function updateSearchValue() {
        const currentTab = tabs.find(tab => tab.id === currentTabId);
        if (currentTab) {
            currentTab.searchValue = searchInput.value;
        }
    }

    function renderTabs() {
        const tabsContainer = document.getElementById('tabs');
        tabsContainer.innerHTML = ''; // Clear only the tabs, not the contents

        tabs.forEach((tab, index) => {
            const tabElement = document.createElement('div');
            tabElement.className = 'tab' + (tab.id === currentTabId ? ' -active' : '');
            tabElement.textContent = tab.name;
            tabElement.draggable = true;
            tabElement.dataset.id = tab.id;
            tabElement.onclick = () => changeTab(tab.id);
            tabElement.ondragstart = handleDragStart;
            tabElement.ondragover = handleDragOver;
            // give the tab's title a id title(id)
            tabElement.id = `title(${tab.id})`;
            tabElement.ondrop = (event) => handleDrop(event, index);
            tabElement.ondragend = handleDragEnd;

            const closeButton = document.createElement('div');
            closeButton.className = 'close-button';
            closeButton.onclick = (e) => {
                e.stopPropagation();
                closeTab(tab.id);
            };
            tabElement.appendChild(closeButton);
            tabsContainer.appendChild(tabElement);
        });

        updateTabContentsVisibility(); // Update visibility based on the current tab
        const currentTab = tabs.find(tab => tab.id === currentTabId);
        searchInput.value = currentTab ? currentTab.searchValue : "";
    }

    function updateTabContentsVisibility() {
        const contentContainer = document.getElementById('tabContent');
        tabs.forEach(tab => {
            let contentElement = document.getElementById(`content-${tab.id}`);
            if (!contentElement) {
                contentElement = document.createElement('div');
                contentElement.id = `content-${tab.id}`;
                contentElement.className = 'tab-content';
                contentElement.innerHTML = `<center><h2>New Tab</h2><hr><h3>Type in a URL or search in the search bar</h3></center>`;
                contentContainer.appendChild(contentElement);
            }
            contentElement.style.display = tab.id === currentTabId ? 'block' : 'none';
        });
    }

    function changeTab(id) {
        currentTabId = id;
        renderTabs();
    }

    function closeTab(id) {
        const index = tabs.findIndex(tab => tab.id === id);
        tabs.splice(index, 1);
        document.getElementById(`content-${id}`).remove(); // Remove tab content from DOM
        if (currentTabId === id) {
            currentTabId = tabs.length ? tabs[0].id : null;
        }
        renderTabs();
    }

    addTabButton.addEventListener('click', () => {
        tabs.push({ id: nextTabId, name: `New Tab `, searchValue: "" });
        currentTabId = nextTabId++;
        renderTabs();
    });

    function handleDragStart(e) {
        dragSrcEl = this;
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/html', this.outerHTML);
    }

    function handleDragOver(e) {
        if (e.preventDefault) {
            e.preventDefault();
        }
        e.dataTransfer.dropEffect = 'move';
        return false;
    }

    function handleDrop(e, dropIndex) {
        if (e.stopPropagation) {
            e.stopPropagation();
        }

        if (dragSrcEl !== this) {
            // Update the DOM for drag source and target
            const srcIndex = tabs.findIndex(tab => tab.id == dragSrcEl.dataset.id);
            const temp = tabs[srcIndex];
            tabs[srcIndex] = tabs[dropIndex];
            tabs[dropIndex] = temp;
            renderTabs();
       
        }
        return false;
    }
    
    function handleDragEnd() {
        // For updating the appearance after dragging ends
        renderTabs();
    }
    
    document.getElementById("search").addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            const query = document.getElementById("search").value;
            // Here, instead of replacing the entire content, update the current active tab's content
            const activeContent = document.getElementById(`content-${currentTabId}`);
            if (activeContent) {

                random = Math.floor(Math.random() * 1000)

                if (!query.startsWith("glitch://") && !query.startsWith("file://") ) {
                // set content
                activeContent.innerHTML = "<div id=\"container\"><iframe class='app' id=\"app" + random + "\"></iframe></div>"

                // fix URL
                if (query.startsWith("http://") || query.startsWith("https://")) {
                    // URl is valid
                    query_fixed = query
                }
                else {
                    query_fixed = "https://" + query
                }

                
                    
                
                
                // Assuming 'random' is a variable that has been defined earlier
var iframe = document.getElementById("app" + random);
iframe.src = "../proxy.php/" + query_fixed;

           
            

function proxy(iframe){
    setInterval(function(){
        // Proxify
        let doc = iframe.contentDocument;
        if (!doc) {
            return;
        }
        
        let html = doc.body.innerHTML;
        let baseUrl = "https://axiomhub.net/main.php?url=";
        let base = doc.querySelector("base");
        let changed = 0;

        if (base) {
            baseUrl += base.href;
        }

        let html_split = html.split("https://");
        for (let i = 0; i < html_split.length; i++) {
            if (!html_split[i].startsWith("axiomhub")) {
                html_split[i] = "axiomhub.net/main.php?url=" + html_split[i];
                changed = 1;
            }
        }

        if (changed > 0) {
            doc.body.innerHTML = html_split.join("https://");
        }

        
        
        // change tab title to the document title

        // the id of the current tab's variable is currentTabId

        // modify the tab list to change the name to "TEST"

        // modify the tabs list

        // modify the tab name

        document.getElementById(`title(${currentTabId})`).textContent = doc.title;

        for (let i = 0; i < tabs.length; i++) {
            if (tabs[i].id == currentTabId) {
                tabs[i].name = doc.title;
            }
        }

        
    }, 50); // Adjust interval as needed
}

            }

                if (query.startsWith("glitch://")) {
                    // Reserved protocol ( Like chrome:// )

                    targets = ["credits","about","config","error","shell"]
                    target=""
                    hit = 0
                    for (item in targets){
                        if (query.startsWith("glitch://"+targets[item])){
                            hit = 1
                            target=targets[item]
                            break
                        }
                    }

                    if (hit == 0){
                        // Output not found
                        activeContent.innerHTML = `<center><h2>404 - Not Found</h2><hr><h3>Type in a URL or search in the search bar</h3></center>`;
                    }

                    if (hit == 1){

                        if (target == "credits"){
                            activeContent.innerHTML = "<center><h2> Credits </h2> <br> <hr> The Browser GUI - https://codepen.io/mo-ro/pen/abvjqoy </center>"
                        }
                        if (target == "about"){
                            activeContent.innerHTML = "<center>BETA</center>"
                        }
                        if (target == "config"){
                            activeContent.innerHTML = "<center><h2>Dark Theme On</h2><hr></center> "
                        }
                        if (target == "error"){
                            activeContent.innerHTML = "All errors:"+exceptions
                        }
                        if (target == "shell"){
                            activeContent.innerHTML = "<div style=\" background-color: black; width: 100%; height: 100%\"><input oninput=\"eval(this.value)\" value=\"\" style=\"background-color: black; color: white; width: 100%; height: 100%\" type=\"text\"></input></div>"
                        }

                    }

                }

            }
        }
    });
    
    // Initially, we need to ensure the content for the initial tab(s) is properly rendered.
    function createInitialTabContents() {
        const contentContainer = document.getElementById('tabContent');
        tabs.forEach(tab => {
            const contentElement = document.createElement('div');
            contentElement.id = `content-${tab.id}`;
            contentElement.className = 'tab-content';
            contentElement.innerHTML = `<center><h2>New Tab</h2><hr><h3>Type in a URL or search in the search bar</h3></center>`;
            contentContainer.appendChild(contentElement);
            contentElement.style.display = tab.id === currentTabId ? 'block' : 'none';
        });
    }
    
    createInitialTabContents(); // Call this to ensure initial content is created.
    renderTabs(); // And then call renderTabs to set everything up properly.
});

    
// End of the try and catch of doom and gloom
}
catch(e){
    exceptions.push(e.message)
}