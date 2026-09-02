let navbar = document.createElement("ul");
navbar.setAttribute("id", "nav");

let menu = document.createElement("ul");
menu.setAttribute("id", "navMenu");

const THEME_KEY = "studio-namma-theme";

function applyTheme(themeName) {
  const isDark = themeName === "dark";
  document.body.classList.toggle("dark-mode", isDark);
  document.body.setAttribute("data-theme", themeName);

  const themeToggle = document.getElementById("themeBtn");
  if (themeToggle) {
    themeToggle.innerText = isDark ? "LIGHT MODE" : "DARK MODE";
  }

  localStorage.setItem(THEME_KEY, themeName);
}

function createListElement(value) {
  let li = document.createElement("li");
  li.innerText = value;
  menu.append(li);

  document.body.append(menu);
  return li;
}

let homeLink = createListElement("HOME");
createListElement("");
let workLink = createListElement("WORK");
let servicesLink = createListElement("SERVICES");
createListElement("STUDIO");
createListElement("PLANS");
let approachLink = createListElement("APPROACH");
createListElement("NEWS");

homeLink.addEventListener("click", () => {
  window.location.href = "./home.html";
});

workLink.addEventListener("click", () => {
  window.location.href = "./work.html";
});

servicesLink.addEventListener("click", () => {
  window.location.href = "./services.html";
});

approachLink.addEventListener("click", () => {
  window.location.href = "./approach.html";
});

let brandName = document.createElement("li");
brandName.innerText = "STUDIO NAMMA";

let themeBtn = document.createElement("li");
themeBtn.innerText = "DARK MODE";
themeBtn.id = "themeBtn";
themeBtn.style.cursor = "pointer";

let menuBtn = document.createElement("li");
menuBtn.innerText = "MENU";

let talkBtn = document.createElement("li");
talkBtn.innerText = "LET'S TALK!";

function mouseEffect(element) {
  element.addEventListener("mouseenter", () => {
    if (element.innerText == "MENU") {
      element.innerText = "OPEN";
    } else if (element.innerText == "LET'S TALK!") {
      element.innerText = "CONTACT US";
    }
  });

  element.addEventListener("mouseout", () => {
    if (element.innerText == "OPEN") {
      element.innerText = "MENU";
    } else if (element.innerText == "CONTACT US") {
      element.innerText = "LET'S TALK!";
    }
  });
}

mouseEffect(menuBtn);
mouseEffect(talkBtn);

menuBtn.addEventListener("click", () => {
  if (menuBtn.innerText == "MENU" || menuBtn.innerText == "OPEN") {
    menu.classList.add("show");
    menuBtn.innerText = "CLOSE";
  } else {
    menu.classList.remove("show");
    menuBtn.innerText = "OPEN";
  }
});

themeBtn.addEventListener("click", () => {
  const nextTheme = document.body.classList.contains("dark-mode") ? "light" : "dark";
  applyTheme(nextTheme);
});

navbar.append(brandName, themeBtn, menuBtn, talkBtn);
document.body.append(navbar);

const savedTheme = localStorage.getItem(THEME_KEY) || "light";
applyTheme(savedTheme);