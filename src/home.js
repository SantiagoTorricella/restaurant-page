let loadHome = () => {
  const content = document.getElementById("content");
  const header = document.createElement("div");
  const main = document.createElement("div");

  // Setting classes //
  header.classList.add("header");
  main.classList.add("main");

  // Starting to create the main header //
  const img1 = document.createElement("img");
  const img2 = document.createElement("img");
  const title = document.createElement("h1");

  img1.classList.add("header-top");
  img2.classList.add("header-top");
  title.classList.add("header-top");

  img1.src = "./images/empanada1.jpg";
  img2.src = "./images/empanada1.jpg";
  title.innerText = "Empanadas Cafe";

  header.appendChild(img1);
  header.appendChild(title);
  header.appendChild(img2);

  const home = document.createElement("div");
  const menu = document.createElement("div");
  const contact = document.createElement("div");

  home.classList.add("header-options");
  menu.classList.add("header-options");
  contact.classList.add("header-options");

  home.innerText("Home");
  menu.innerText("Menu");
  contact.innerText("Contact");

  header.appendChild(home);
  header.appendChild(menu);
  header.appendChild(contact);

  // Starting main content //

  const mainTitle = document.createElement("h1");
  const box1 = document.createElement("div");
  const box2 = document.createElement("div");
  const box2Header = document.createElement("h3");

  mainTitle.innerText = "Our Services";
  main.appendChild(mainTitle);

  box2Header.innerText = "Schedules";
  box2.appendChild(box2Header);

  box1.classList.add("main-box");
  box2.classList.add("main-box");

  box1.innerText =
    "We provide the best empanadas on the market for our customers so they can enjoy a little portion from our homeland Argentina. With a wide variety of empanadas you can choose the ones that best suits your taste. 🇦🇷🇦🇷🇦🇷";

  const monday = document.createElement("span");
  const tuesday = document.createElement("span");
  const wednesday = document.createElement("span");
  const thursday = document.createElement("span");
  const friday = document.createElement("span");
  const saturday = document.createElement("span");
  const sunday = document.createElement("span");

  monday.innerText = "Monday: 10:00AM / 20:00PM";
  tuesday.innerText = "Tuesday: 10:00AM / 20:00PM";
  wednesday.innerText = "Wednesday: 10:00AM / 20:00PM";
  thursday.innerText = "Thursday: 10:00AM / 20:00PM";
  friday.innerText = "Friday: 10:00AM / 20:00PM";
  saturday.innerText = "Saturday: 18:00PM / 21:00AM ";
  sunday.innerText = "Sunday: Closed";

  box2.appendChild(monday);
  box2.appendChild(tuesday);
  box2.appendChild(wednesday);
  box2.appendChild(thursday);
  box2.appendChild(friday);
  box2.appendChild(saturday);
  box2.appendChild(sunday);

  // Append all elements //
  content.appendChild(header);
  content.appendChild(main);
};
