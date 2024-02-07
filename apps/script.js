// Inject the home script into the page

html = `
<div onclick="window.location.href = 'main.html'" style="postion: fixed; top: 10px; z-index: 1111; left: 10px; border-radius: 5px; padding: 5px 10px; border-style: solid; border-color: skyblue; color: white; margin-bottom: 5px;">
    Home
</div>
`;


// Onload of doucment

window.onload = () => {
    
document.body.innerHTML += html
}