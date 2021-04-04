// styling mobile menu
let menubtn = document.querySelector(".menu-btn");
let mobileMenu = document.querySelector(".nav-menu");
menubtn.addEventListener("click", () => {
  if (mobileMenu.style.display === "none") {
    mobileMenu.style.display = "block";
    mobileMenu.style.fontSize = "22px";
    mobileMenu.style.textAlign = "left";

    mobileMenu.children[3].style.width = "50%";
  } else {
    mobileMenu.style.display = "none";
  }
});
