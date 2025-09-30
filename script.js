"use strict";

const buttons = document.querySelectorAll(".btn");
const paragrapghs = document.querySelectorAll(".paragraph");
buttons.forEach((btn, i) => {
  btn.addEventListener("click", function () {
    if (btn.src.includes("icon-plus.svg")) {
      btn.src = "images/icon-minus.svg";
    } else {
      btn.src = "images/icon-plus.svg";
    }
    paragrapghs[i].classList.toggle("hidden");
  });
});
