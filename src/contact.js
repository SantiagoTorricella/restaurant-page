import empanada1 from "./images/empanada.png";
import empanada2 from "./images/empanada1.png";
import loadHome from "./home";
import loadMenu from "./menu";

let loadContact = () => {
  const content = document.getElementById("content");
  const header = document.createElement("div");
  const headerTop = document.createElement("div");
  const headerOptions = document.createElement("div");
  const main = document.createElement("div");

  // Setting classes //
  header.classList.add("header");
  main.classList.add("main");
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

  //Main contact content

  let contactCard = (contactName, number, mail) => {
    const contactBox = document.createElement("div");
    contactBox.classList.add("main-box");

    const conName = document.createElement("h1");
    conName.innerText = contactName;

    const conNumber = document.createElement("h2");
    conNumber.innerText = "Phone:" + " " + number;

    const conMail = document.createElement("div");
    conMail.innerText = "Email:" + " " + mail;

    contactBox.appendChild(conName);
    contactBox.appendChild(conNumber);
    contactBox.appendChild(conMail);

    return contactBox;
  };

  let contactCards = [
    contactCard(
      "Customer service",
      "0800-111-111",
      "ourcustomermail@zzzzzz.com"
    ),
  ];

  contactCards.forEach((contacts) => {
    main.appendChild(contacts);
  });

  content.appendChild(header);
  content.appendChild(main);

  home.addEventListener("click", () => {
    content.innerHTML = "";
    loadHome();
  });
  menu.addEventListener("click", () => {
    content.innerHTML = "";
    loadMenu();
  });
};

export default loadContact;
