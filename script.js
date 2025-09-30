"use strict";

const buttons = document.querySelectorAll(".btn");
const paragrapghs = document.querySelectorAll(".paragraph");
const rowHeader = document.querySelectorAll(".row-header");

rowHeader.forEach((header, i) => {
  header.addEventListener("click", function () {
    paragrapghs[i].classList.toggle("hidden");
    if (buttons[i].src.includes("icon-plus.svg")) {
      buttons[i].src = "images/icon-minus.svg";
    } else {
      buttons[i].src = "images/icon-plus.svg";
    }
  });
});
