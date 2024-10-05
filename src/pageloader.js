import homePage from '../src/home.js'
import contactPage from './contact.js'
import menuPage from '../src/menu.js'
homePage();
const pageLoader = () => {
   const navButtons = document.querySelectorAll('.navbutton');
   const pages = { 
      homePage,
      contactPage,
      menuPage
    };
    navButtons.forEach(button => {
      button.addEventListener('click', () => {
         const pageName = button.getAttribute('data-page');
         if (pages[pageName]) {
            pages[pageName]();
         }
      });
   });
}


export default pageLoader;