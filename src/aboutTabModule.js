function loadAboutText() {
    const contentDiv = document.querySelector('#content');

    if (contentDiv.firstChild) {
        contentDiv.removeChild(contentDiv.lastChild);
    }

    let menuNavItem = document.querySelector('#menu');
    menuNavItem.style.backgroundColor = "#333";

    let contactNavItem = document.querySelector('#contact');
    contactNavItem.style.backgroundColor = "#333";

    let aboutNavItem = document.querySelector('#about');
    aboutNavItem.style.backgroundColor = "#999";

    const container = document.createElement('div');
    const aboutText = document.createElement('p');
    aboutText.innerHTML = `Since 1976, we have been offering Delicious & Tasty Food in the New York City.`;
    aboutText.style.margin = "100px 0";
    container.appendChild(aboutText);
    contentDiv.appendChild(container);
}

export { loadAboutText };