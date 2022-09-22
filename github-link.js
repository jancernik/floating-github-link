const fontAwesomeJsSource = "https://kit.fontawesome.com/75e6554cbc.js";
const cssSource = "https://cdn.jsdelivr.net/gh/cernikkk/floating-github-link@main/github-link-style.css";

const head = document.querySelector("head");

if (!checkIfElementExists("script", "src", fontAwesomeJsSource)) {
  const fontAwesome = document.createElement("script");
  fontAwesome.setAttribute("src", fontAwesomeJsSource);
  fontAwesome.setAttribute("crossorigin", "anonymous");
  head.append(fontAwesome);
}

if (!checkIfElementExists("link", "href", cssSource)) {
  const githubLinkStyle = document.createElement("link");
  githubLinkStyle.setAttribute("rel", "stylesheet");
  githubLinkStyle.setAttribute("href", cssSource);
  head.append(githubLinkStyle);
}

window.addEventListener("load", function () {
  if (checkIfElementExists("a", "class", "github-link")) {
    const githubLink = document.querySelector(".github-link");
    if (!githubLink.hasAttribute("target")) {
      githubLink.setAttribute("target", "_blank");
    }
  }
});

function checkIfElementExists(target, attribute, attributeContent) {
  const elements = document.querySelectorAll(target);
  for (let i = 0; i < elements.length; i++) {
    if (elements[i].getAttribute(attribute).includes(attributeContent))
      return true;
  }
  return false;
}
