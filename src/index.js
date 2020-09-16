import { loadNavBar, loadFooter, loadHome } from "./home.js";
import { loadMenu } from "./menu.js";
import { loadContact } from "./contact.js";

const content = document.getElementById("content");

const render = (e) => {
  content.innerHTML = "";
  loadNavBar();
  if (e.id == "Home") {
    console.log(e);
    loadHome();
  } else if (e.id == "Menu") {
    loadMenu();
  } else if (e.id == "Contact") {
    loadContact();
  }
  loadFooter();
};

export { render };
