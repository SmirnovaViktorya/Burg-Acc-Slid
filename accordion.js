let accord = document.querySelector(".accordionList");

accord.addEventListener("click", function (event) {
  let el;
  if (event.target.tagName == "LI") {
    el = event.target;
  } else {
    el = event.target.parentElement;
  }
  let check = el.children[1];
  let text = el.nextElementSibling;

  if (check.classList.contains("checkT")) {
    check.classList.remove("checkT");
    check.classList.add("checkF");
  } else {
    check.classList.add("checkT");
    check.classList.remove("checkF");
  }
  text.hidden = !text.hidden;
  let arr = Array.from(el.parentElement.children);
  arr = arr.filter((i) => i.tagName == "P" && i != text);
  for (let i = 0; i < arr.length; i++) {
    arr[i].hidden = true;
    let ch = arr[i].previousElementSibling.children[1];
    ch.classList.add("checkT");
    ch.classList.remove("checkF");
  }
});

