function loadContactForm() {
    const contentDiv = document.querySelector('#content');

    if (contentDiv.firstChild) {
        contentDiv.removeChild(contentDiv.lastChild);
    }

    let menuNavItem = document.querySelector('#menu');
    menuNavItem.style.backgroundColor = "#333";

    let contactNavItem = document.querySelector('#contact');
    contactNavItem.style.backgroundColor = "#999";

    let aboutNavItem = document.querySelector('#about');
    aboutNavItem.style.backgroundColor = "#333";

    const container = document.createElement('div');
    const heading = document.createElement('h2');
    heading.innerHTML = "How may we help you?";

    const form = document.createElement('form');
    form.style.maxWidth = "50%";
    form.style.margin = "0 auto";

    const nameInput = document.createElement('input');
    nameInput.setAttribute("placeholder", "Your name");
    nameInput.style.width = "100%";
    nameInput.style.marginBottom = "10px";
    nameInput.style.height = "40px";
    nameInput.style.padding = "10px";
    nameInput.style.border = "0";
    nameInput.style.borderRadius = "5px";

    const emailInput = document.createElement('input');
    emailInput.setAttribute("type", "email");
    emailInput.setAttribute("placeholder", "Your email");
    emailInput.style.width = "100%";
    emailInput.style.marginBottom = "10px";
    emailInput.style.height = "40px";
    emailInput.style.padding = "10px";
    emailInput.style.border = "0";
    emailInput.style.borderRadius = "5px";

    const phoneInput = document.createElement('input');
    phoneInput.setAttribute("type", "phone");
    phoneInput.setAttribute("placeholder", "Your phone");
    phoneInput.style.width = "100%";
    phoneInput.style.marginBottom = "10px";
    phoneInput.style.height = "40px";
    phoneInput.style.padding = "10px";
    phoneInput.style.border = "0";
    phoneInput.style.borderRadius = "5px";

    const subjectInput = document.createElement('input');
    subjectInput.setAttribute("placeholder", "Subject");
    subjectInput.style.width = "100%";
    subjectInput.style.marginBottom = "10px";
    subjectInput.style.height = "40px";
    subjectInput.style.padding = "10px";
    subjectInput.style.border = "0";
    subjectInput.style.borderRadius = "5px";

    const message = document.createElement('textarea');
    message.setAttribute("placeholder", "Message");
    message.style.width = "100%";
    message.style.marginBottom = "10px";
    message.style.height = "80px";
    message.style.padding = "10px";
    message.style.border = "0";
    message.style.borderRadius = "5px";

    const sendButton = document.createElement('button');
    sendButton.innerHTML = "Send";
    sendButton.style.width = "100%";
    sendButton.style.height = "40px";
    sendButton.style.backgroundColor = "#333";
    sendButton.style.color = "#fff";
    sendButton.style.border = "1px solid #444";
    sendButton.style.fontSize = "1rem";

    form.appendChild(nameInput);
    form.appendChild(emailInput);
    form.appendChild(phoneInput);
    form.appendChild(subjectInput);
    form.appendChild(message);
    form.appendChild(sendButton);
    container.appendChild(form);
    contentDiv.appendChild(container);
}

export { loadContactForm };