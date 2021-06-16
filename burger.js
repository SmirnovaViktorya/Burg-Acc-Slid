"use strict";

let but = document.querySelector(".icon");
let section = document.querySelector("#s1");
let menu = document.querySelector(".menu");
let wrap = document.querySelector(".wrapper");

function closeMenu() {
  section.hidden = !section.hidden;
  menu.hidden = !menu.hidden;
  wrap.classList.toggle("backgrGray");
  but.classList.toggle("close");
  status = !status;
}

but.addEventListener("click", closeMenu);

document.querySelector(".menuList").addEventListener("click", function (event) {
  event.preventDefault();
  section = document.querySelector(event.target.hash);
  closeMenu();
});