"use strict";

let arr = document.querySelectorAll(".element");
arr = Array.from(arr);
let left = document.querySelector(".arrow");
let right = document.querySelector(".right");

right.addEventListener("click", () => {
    const a = arr[0].innerHTML;
    for (let i = 0; i < arr.length - 1; i++) {
        arr[i].innerHTML = arr[i + 1].innerHTML;
    }
    arr[arr.length - 1].innerHTML = a
});

left.addEventListener("click", () => {
    const a = arr[arr.length - 1].innerHTML;
    for (let i = arr.length - 1; i > 0; i--) {
        arr[i].innerHTML = arr[i - 1].innerHTML;
    }
    arr[0].innerHTML = a
});