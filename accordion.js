"use strict";

let elem = document.querySelectorAll(".accElem");

function open_close() {
  let check = this.children[1];
  let text = this.nextElementSibling;
  if (check.classList.contains("checkT")) {
    check.classList.remove("checkT");
    check.classList.add("checkF");
  } else {
    check.classList.add("checkT");
    check.classList.remove("checkF");
  }
  text.hidden = !text.hidden;
}

for (let i of elem) {
  i.addEventListener("click", open_close);
}
