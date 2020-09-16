const loadMenu = () => {
  const divMenu = document.createElement("div");
  divMenu.id = "menu";

  //Array containinng Menu Items
  const items = [
    {
      name: "Tacos",
      image: "../images/tacos.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, beatae earum.",
    },
    {
      name: "Enchiladas",
      image: "../images/enchiladas.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, beatae earum.",
    },
    {
      name: "Tortas",
      image: "../images/torta.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, beatae earum.",
    },
    {
      name: "Burritos",
      image: "../images/burritos.jpeg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, beatae earum.",
    },
    {
      name: "Sopes",
      image: "../images/sopes.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, beatae earum.",
    },
    {
      name: "Flautas",
      image: "../images/flautas.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, beatae earum.",
    },
  ];

  //for each item in the array it creates the necessary html tags and style, then they get added to container div
  function addItems(item) {
    let divItem = document.createElement("div");
    let divTitle = document.createElement("div");
    let title = document.createElement("h2");
    let divDescription = document.createElement("div");
    let divImage = document.createElement("div");
    let divText = document.createElement("div");
    let image = document.createElement("img");
    let paragraph = document.createElement("p");
    divItem.className = "item";
    divTitle.className = "title";
    divDescription.className = "description";
    divImage.className = "picture";
    divText.className = "text";
    title.innerText = item.name;
    image.src = item.image;
    paragraph.innerText = item.description;
    divText.appendChild(paragraph);
    divImage.appendChild(image);
    divDescription.appendChild(divImage);
    divDescription.appendChild(divText);
    divTitle.appendChild(title);
    divItem.appendChild(divTitle);
    divItem.appendChild(divDescription);

    return divItem;
  }

  for (var i = 0; i < items.length; i++) {
    divMenu.appendChild(addItems(items[i]));
  }

  content.appendChild(divMenu);
};

export { loadMenu };
