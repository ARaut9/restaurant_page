function loadPage() {
    const contentDiv = document.querySelector('#content');
    contentDiv.style.backgroundImage = "url('chairs-menu-restaurant-6267.jpg')";

    const heading = document.createElement('h1');
    heading.innerHTML = "Dilicious Treats";

    const description = document.createElement('p');
    description.innerHTML = "Delicious Treats is a delicious restaurant in New York.";

    contentDiv.appendChild(heading);
    contentDiv.appendChild(description);
}

export { loadPage };