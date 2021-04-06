// styling mobile menu
let menubtn = document.querySelector(".menu-btn");
let mobileMenu = document.querySelector(".nav-menu");
menubtn.addEventListener("click", () => {
  if (mobileMenu.style.display === "none") {
    mobileMenu.style.display = "block";
    // mobileMenu.style.height = "100vh";
    mobileMenu.style.fontSize = "22px";
    mobileMenu.style.textAlign = "left";

    mobileMenu.children[5].style.width = "50%";
    mobileMenu.children[5].style.margin = "10%  0";
  } else {
    mobileMenu.style.display = "none";
  }
});

// login message
let loginBtn = document.querySelector(".login-btn");
let loginMessage = document.querySelector(".login-message");
let loginForm = document.querySelector(".login-form");
let loginPopup = document.querySelector("#id01");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  loginMessage.style.display = "block";
  loginPopup.style.display = "none";

  // getting the inputed username
  let userName = document.querySelector(".username").value;

  // creating a template with username
  let welcomeMessage = document.createTextNode(
    `Congrats ${userName}, You are now logged into prodotype. 
     As a registered user, you can now browse the site fully without limitations.`
  );

  // getting welcome text paragraph
  let welcometext = document.querySelector(".welcome");

  welcometext.appendChild(welcomeMessage);
});

// close btn
let loginMessageClose = document.querySelector(".close-btn");
loginMessageClose.addEventListener("click", () => {
  loginMessage.style.display = "none";
});
