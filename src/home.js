import { render } from "./index.js";

const homePage = () => {
  loadNavBar();
  loadHome();
  loadFooter();
};

//creates and loads navbar that includes logo and sections selection list
const loadNavBar = () => {
  const navSectionsDiv = document.createElement("div");
  const logoDiv = document.createElement("div");
  const logo = document.createElement("img");
  const navBar = navSectionsDiv.cloneNode(false);
  const navSectionsList = document.createElement("ul");
  const options = ["Home", "Menu", "Contact"];
  logoDiv.id = "logo";
  logo.src = "../images/taco.svg";
  logoDiv.appendChild(logo);
  navBar.id = "navbar";
  navBar.appendChild(navSectionsDiv);
  navSectionsDiv.id = "links";
  navSectionsDiv.appendChild(logoDiv);
  navSectionsDiv.appendChild(navSectionsList);
  function addOptions(option) {
    let section = document.createElement("li");
    section.className = "sections";
    section.id = option;
    section.innerText = option;
    section.addEventListener("click", function () {
      render(section);
    });
    return section;
  }
  for (var i = 0; i < options.length; i++) {
    navSectionsList.appendChild(addOptions(options[i]));
  }
  content.appendChild(navBar);
};

//creates and loads inital home section that includes About Us information
const loadHome = () => {
  const restaurantTitleDiv = document.createElement("div");
  const titleHeader = document.createElement("h1");
  const secondHeader = document.createElement("h2");
  const paragraph = document.createElement("p");
  titleHeader.textContent = "Lonely Tacos";
  secondHeader.textContent = "Who we are?";
  paragraph.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum facilis esse fugit animi sapiente, omnisporro blanditiis odit earum vero reprehenderit, ratione asperiores dignissimos aliquid est nesciunt nemomaiores dolore?";
  restaurantTitleDiv.id = "restaurantTitle";
  restaurantTitleDiv.appendChild(titleHeader);
  restaurantTitleDiv.appendChild(secondHeader);
  restaurantTitleDiv.appendChild(paragraph);
  content.appendChild(restaurantTitleDiv);
};

//creates and loads footer section with creators Github page link
const loadFooter = () => {
  const div = document.createElement("div");
  const footer = document.createElement("div");
  div.innerHTML = `<div> Made by <a href="https://www.github.com/israelone"><i class="fab fa-github"></i></a></div>`;
  footer.id = "footer";
  footer.appendChild(div);
  content.appendChild(footer);
};

homePage();

export { loadNavBar, loadFooter, loadHome };
