export const getContent = (id) => {
        const content = document.getElementById(id);
        return content;
};

export const createElement = (tag, className = "", textContent = "") => {
    const element = document.createElement(tag);
    if (className) {
        element.setAttribute("class", className);
    }
    if (textContent) {
        element.textContent = textContent;
    }
    return element;
};

export const makeContainer = (id, className) => {
    const container = document.createElement("div");
    container.setAttribute("id", id);
    container.setAttribute("class", className);
    return container;
};

export const appendElements = (parent, ...children) => {
    children.forEach(child => parent.appendChild(child));
};

export const clearContent = (id) => {
    document.getElementById(id).innerHTML = "";
};

export const createImage = (className, path, alt) => {
    const image = document.createElement("img");
    image.src = path;
    image.alt = alt;
    if (className) {
        image.setAttribute("class", className);
    }
    return image;
};