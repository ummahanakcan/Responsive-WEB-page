$(".nav-icon").click(function () {
  $(".nav-links").toggleClass("responsive");
  return false;
});

const wrapper = document.querySelector(`.wrapper`);
const loginLink = document.querySelector(`.login-link`);
const registerLink = document.querySelector(`.register-link`);
const btnPopup = document.querySelector(`.btnLogin-popup`);
const ıconClose = document.querySelector(`.icon-close`);

registerLink.addEventListener("click", () => {
  wrapper.classList.add("active");
});

loginLink.addEventListener("click", () => {
  wrapper.classList.remove("active");
});

btnPopup.addEventListener("click", () => {
  wrapper.classList.add("active-popup");
});

ıconClose.addEventListener("click", () => {
  wrapper.classList.remove("active-popup");
});

window.onscroll = function () {
  var navbar2 = document.getElementById("nav1");
  navbar1 = document.querySelector(".navbar");
  if (this.scrollY > 430) {
    navbar2.classList.add("sticky");
  } else {
    navbar2.classList.remove("sticky");
  }
};
