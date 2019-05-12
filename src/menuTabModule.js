function loadMenu() {
    let menuNavItem = document.querySelector('#menu');
    menuNavItem.style.backgroundColor = "#999";

    let contactNavItem = document.querySelector('#contact');
    contactNavItem.style.backgroundColor = "#333";

    let aboutNavItem = document.querySelector('#about');
    aboutNavItem.style.backgroundColor = "#333";

    let menuItem1 = addItemToMenu('images/cheeseburger.jpg', 'Chesse Burger', '$3');
    let menuItem2 = addItemToMenu('images/pizza.jpg', 'Pizza', '$5');
    let menuItem3 = addItemToMenu('images/chocolatepestry.jpg', 'Chocolate Pestry', '$10');

    const contentDiv = document.querySelector('#content');
    contentDiv.textAlign = "center";

    if (contentDiv.firstChild) {
        contentDiv.removeChild(contentDiv.lastChild);
    }
    
    const container = document.createElement('div');
    container.style.maxWidth = "85%";
    container.style.margin = "0 auto";

    container.appendChild(menuItem1);
    container.appendChild(menuItem2);
    container.appendChild(menuItem3);
    contentDiv.appendChild(container);
}

function addItemToMenu(imageUrl, itemName, itemPrice) {
    const menuItemContainer = document.createElement('div');
    menuItemContainer.style.display = "inline-block";
    menuItemContainer.style.maxWidth = "33%";
    menuItemContainer.style.textAlign = "center";
    menuItemContainer.style.margin = "30px";

    const imgElement = document.createElement('img');
    imgElement.setAttribute('src', imageUrl);
    imgElement.style.height = "200px";

    const nameElement = document.createElement('h2');
    nameElement.innerHTML = itemName;
    nameElement.style.fontSize = "2rem";
    nameElement.style.margin = "10px 0";

    const priceElement = document.createElement('span');
    priceElement.innerHTML = itemPrice;
    priceElement.style.fontSize = "1.5rem";

    menuItemContainer.appendChild(imgElement);
    menuItemContainer.appendChild(nameElement);
    menuItemContainer.appendChild(priceElement);

    return menuItemContainer;
}

export { loadMenu };