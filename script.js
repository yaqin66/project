let menu= document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.addEventListener("click", function () {
    navbar.classList.toggle("active");
});


window.onscroll = () => {
    navbar.classList.remove("active");
};

// const menu = document.querySelector("#menu-icon");
// const navbar = document.querySelector(".navbar");

// menu.addEventListener("click", toggleNavbar);

// function toggleNavbar() {
//   navbar.classList.toggle("active");

// }

// window.addEventListener("scroll", hideNavbar);

// function hideNavbar() {
//   if (navbar.classList.contains("active")) {
//     navbar.classList.remove("active");
//   }
// }