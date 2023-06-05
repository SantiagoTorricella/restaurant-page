import empanada1 from "./images/empanada.png";
import empanada2 from "./images/empanada1.png";
import criolla from "./images/menuempanada1.png";
import jyq from "./images/menuempanada2.png";
import humita from "./images/menuempanada3.png";
import pollo from "./images/menuempanada4.png";
import loadHome from "./home";
import loadContact from "./contact";

let loadMenu = () => {
  const content = document.getElementById("content");
  const header = document.createElement("div");
  const headerTop = document.createElement("div");
  const headerOptions = document.createElement("div");
  const main = document.createElement("div");

  // Setting classes //
  header.classList.add("header");
  main.classList.add("main-card-menu");
  headerTop.classList.add("header-top");
  headerOptions.classList.add("header-options");

  header.appendChild(headerTop);
  header.appendChild(headerOptions);

  // Starting to create the main header //
  const img1 = document.createElement("img");
  img1.src = empanada1;
  img1.classList.add("empanadas-header");
  const img2 = document.createElement("img");
  img2.src = empanada2;
  img2.classList.add("empanadas-header");
  const title = document.createElement("h1");

  title.innerText = "Empanadas Cafe";

  headerTop.appendChild(img1);
  headerTop.appendChild(title);
  headerTop.appendChild(img2);

  const home = document.createElement("div");
  const menu = document.createElement("div");
  const contact = document.createElement("div");

  home.classList.add("header-options");
  menu.classList.add("header-options");
  contact.classList.add("header-options");

  home.innerText = "Home";
  menu.innerText = "Menu";
  contact.innerText = "Contact";

  headerOptions.appendChild(home);
  headerOptions.appendChild(menu);
  headerOptions.appendChild(contact);

  // Starting main content //

  //Empanada Generator
  let empanadaGenerator = (name, img, desc, price) => {
    const cardMenu = document.createElement("div");
    cardMenu.classList.add("main-box-menu");

    const titleCard = document.createElement("h1");
    titleCard.innerText = name;

    const imageCard = document.createElement("img");
    imageCard.classList.add("imgCardMenu");
    imageCard.src = img;

    const descCard = document.createElement("p");
    descCard.innerText = desc;

    const priceCard = document.createElement("h3");
    priceCard.innerText = price;

    cardMenu.appendChild(titleCard);
    cardMenu.appendChild(imageCard);
    cardMenu.appendChild(descCard);
    cardMenu.appendChild(priceCard);

    return cardMenu;
  };

  //Create Empanadas
  let empanadas = [
    empanadaGenerator(
      "Criolla",
      criolla,
      "Fried empanada of meat, a classic",
      "$4.99"
    ),
    empanadaGenerator(
      "Jamon y Queso",
      jyq,
      "Fried empanada with ham and cheese",
      "$5.99"
    ),
    empanadaGenerator(
      "Humita",
      humita,
      "Fried empanada with cheese and corn",
      "$7.99"
    ),
    empanadaGenerator(
      "Pollo",
      pollo,
      "Fried empanada with with chicken and vegetables",
      "$5.99"
    ),
  ];

  empanadas.forEach((empanada) => {
    main.appendChild(empanada);
  });

  // Append all elements //
  content.appendChild(header);
  content.appendChild(main);

  home.addEventListener("click", () => {
    content.innerHTML = "";
    loadHome();
  });

  contact.addEventListener("click", () => {
    content.innerHTML = "";
    loadContact();
  });
};

export default loadMenu;
