import steakIcon from './images/steakicon3.png';
import { makeContainer, createElement, appendElements, getContent, clearContent, createImage } from './base.js';
const menuPage = () => {
    const content = getContent("content");
    clearContent("content");

    const getMainDishes = () => {
        const mainDishes = {
            "Tomahawk Ribeye Steak": {
                description: "Ribeye, gegrillt auf offener Flamme, Kräuterbutter",
                price: "€32,00"
            },
            "BBQ Glazed Baby Back Ribs": {
                description: "Zarte Schweinerippchen, hausgemachte BBQ-Glasur, serviert mit Maisbrot",
                price: "€24,00"
            },
            "Grilled Portobello Mushroom": {
                description: "Riesige Portobello-Pilze, serviert auf einem Bett aus gegrilltem Gemüse",
                price: "€18,00"
            }
        };
        return mainDishes;
    };
    const getSideDishes = () => {
        const sideDishes = {
            "Truffle Parmesan Fries": {
                description: "Pommes, Trüffelöl, frischer Parmesan, Kräuter",
                price: "€4,50"
            },
            "Creamed Spinach": {
                description: "Frischer Spinat, Knoblauch, Sahne, Muskat",
                price: "€3,50"
            }
        };
        return sideDishes;
    };
    const getBeverages = () => {
        const beverages = {
            "Smoky Bourbon Lemonade": {
                description: "Bourbon Whiskey, Zitronensaft, Ahornsirup, geräuchertes Wasser",
                price: "€7,50"
            },
            "House Red Wine (Cabernet Sauvignon)": {
                description: "Tiefroter Cabernet Sauvignon, Aromen von dunklen Früchten, Eiche",
                price: "€6,00"
            },
            "Classic Root Beer Float": {
                description: "Hausgemachtes Root Beer, Vanilleeis",
                price: "€5,00"
            }
        };
        return beverages;
    };
    
    const generateMenuItems = (menuCategory, categoryName, parentContainer) => {
        const menuItems = menuCategory();

        Object.keys(menuItems).forEach(itemName => {
            const item = menuItems[itemName];
            const itemContainer = makeContainer("","menu-item");
            const itemTitle = createElement("span", "menuItemTitle", itemName);
            const itemDescription = createElement("p", "", item.description);
            const itemPrice = createElement("span", "menu-item-price", item.price);
            appendElements(itemContainer, itemTitle, itemDescription, itemPrice);
            appendElements(parentContainer, itemContainer);
        });
    };
    const mainDishContainer = makeContainer("main-dishes-container", "menuContainer");
    const sideDishContainer = makeContainer("side-dishes-container", "menuContainer");
    const beverageContainer = makeContainer("beverages-container", "menuContainer");
    const mainDishTitle = createElement("span", "menuCategoryTitle", "Main Dishes");
    const sideDishTitle = createElement("span", "menuCategoryTitle", "Side Dishes");
    const beverageTitle = createElement("span", "menuCategoryTitle", "Beverages");
    const heading = createElement("div","heading");
    const iconBefore = createImage("icon", steakIcon, "Steak Icon");
    const iconAfter = createImage("icon", steakIcon, "Steak Icon");
    const text = createElement("span","","Menu");
    appendElements(heading,iconBefore,text,iconAfter);
    appendElements(mainDishContainer, mainDishTitle);
    appendElements(sideDishContainer, sideDishTitle);
    appendElements(beverageContainer, beverageTitle);
    generateMenuItems(getMainDishes, "main-dish", mainDishContainer);
    generateMenuItems(getSideDishes, "side-dish", sideDishContainer);
    generateMenuItems(getBeverages, "beverage", beverageContainer);
    appendElements(content,heading, mainDishContainer, sideDishContainer, beverageContainer);
}
export default menuPage;