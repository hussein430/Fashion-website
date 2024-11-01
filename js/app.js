"use strict";

// Selectors
const introductionImage = document.querySelector(".introduction-image");
const settingBox = document.querySelector(".setting-box");
const toggleSetting = document.querySelector(".toggle-setting");
const gearIcon = document.querySelector(".toggle-setting .fa-gear");
const colorItems = document.querySelectorAll(".colors-list li");

// Show the setting box
toggleSetting.addEventListener("click", function () {
  settingBox.classList.toggle("open");
  gearIcon.classList.toggle("fa-spin");
});

// Change the main color of the page
colorItems.forEach((item) => {
  item.addEventListener("click", function () {
    // Get the data-color attribute
    const newColor = item.getAttribute("data-color");

    // Set the --main-color variable to the selected color
    document.documentElement.style.setProperty("--main-color", newColor);

    // Remove 'active' class from all items and add it to the clicked item
    colorItems.forEach((li) => li.classList.remove("active"));
    item.classList.add("active");
  });
});

// Get the images
const images = [
  "../imgs/header1.jpg",
  "../imgs/header2.jpg",
  "../imgs/header3.jpg",
  "../imgs/header4.jpg",
];

// Change the images on the heading
let currentIndex = 0;

function changeImage() {
  currentIndex = (currentIndex + 1) % images.length;
  introductionImage.style.backgroundImage = `url('${images[currentIndex]}')`;
}

setInterval(changeImage, 4000);
