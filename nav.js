let navbar = document.createElement("ul");
navbar.setAttribute("id", "navbar");

let menu = document.createElement("ul");
menu.setAttribute("id", "menu");

const THEME_KEY = "studio-namma-theme";

function applyTheme(themeName) {
  const isDark = themeName === "dark";
  document.body.classList.toggle("dark-mode", isDark);
  document.body.setAttribute("data-theme", themeName);

  const themeToggle = document.getElementById("dark-mode-toggle");
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
createListElement("APPROACH");
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

let li1 = document.createElement("li");
li1.innerText = "STUDIO NAMMA";

let li2 = document.createElement("li");
li2.innerText = "DARK MODE";
li2.id = "dark-mode-toggle";
li2.style.cursor = "pointer";

let li3 = document.createElement("li");
li3.innerText = "MENU";

let li4 = document.createElement("li");
li4.innerText = "LET'S TALK!";

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

mouseEffect(li3);
mouseEffect(li4);

li3.addEventListener("click", () => {
  if (li3.innerText == "MENU" || li3.innerText == "OPEN") {
    menu.classList.add("show");
    li3.innerText = "CLOSE";
  } else {
    menu.classList.remove("show");
    li3.innerText = "OPEN";
  }
});

li2.addEventListener("click", () => {
  const nextTheme = document.body.classList.contains("dark-mode") ? "light" : "dark";
  applyTheme(nextTheme);
});

navbar.append(li1, li2, li3, li4);
document.body.append(navbar);

const savedTheme = localStorage.getItem(THEME_KEY) || "light";
applyTheme(savedTheme);