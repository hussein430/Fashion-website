"use strict";

// Selectors
const introductionImage = document.querySelector(".introduction-image");
const settingBox = document.querySelector(".setting-box");
const toggleSetting = document.querySelector(".toggle-setting");
const gearIcon = document.querySelector(".toggle-setting .fa-gear");
const colorItems = document.querySelectorAll(".colors-list li");
const randomBackgroundEl = document.querySelectorAll(".random-background span");

// Show the setting box
toggleSetting.addEventListener("click", function () {
  settingBox.classList.toggle("open");
  gearIcon.classList.toggle("fa-spin");
});

// Change the main color of the page

// Save the color option to the local storage
let mainColor = localStorage.getItem("color-option");
if (mainColor !== null) {
  document.documentElement.style.setProperty("--main-color", mainColor);

  // add the active class for the selected color
  colorItems.forEach((item) => {
    item.classList.remove("active");
    if (item.dataset.color === mainColor) {
      item.classList.add("active");
    }
  });
}

// Function to change the color of the entire page

colorItems.forEach((item) => {
  item.addEventListener("click", function () {
    // Get the data-color attribute
    const newColor = item.getAttribute("data-color");

    // Set the --main-color variable to the selected color
    document.documentElement.style.setProperty("--main-color", newColor);

    // Save the color to the local storage
    localStorage.setItem("color-option", newColor);

    // Remove 'active' class from all items and add it to the clicked item
    colorItems.forEach((li) => li.classList.remove("active"));
    item.classList.add("active");
  });
});


// Turn on/off the auto background change
// Random Background Option
let backgroundOption = true;
// Remove 'active' class from all spans
randomBackgroundEl.forEach((el) => el.classList.remove("active"));

randomBackgroundEl.forEach((span) => {
  span.addEventListener("click", () => {
    // Remove 'active' class from all spans
    randomBackgroundEl.forEach((el) => el.classList.remove("active"));

    // Add 'active' class to the clicked span
    span.classList.add("active");

    // Get the selected option (yes or no)
    let option = span.dataset.background;

    // Update backgroundOption based on selection
    backgroundOption = option === "yes";

    // Save the background option in localStorage
    localStorage.setItem("background-option", backgroundOption);
  });
});

// Retrieve and apply the background option from localStorage on page load
let savedBackgroundOption = localStorage.getItem("background-option");
if (savedBackgroundOption !== null) {
  backgroundOption = savedBackgroundOption === "true";

  // Set the active class based on the saved setting
  if (backgroundOption) {
    document.querySelector(".random-background .yes").classList.add("active");
  } else {
    document.querySelector(".random-background .no").classList.add("active");
  }
}

// Get the images
const images = [
  "./imgs/header1.jpg",
  "./imgs/header2.jpg",
  "./imgs/header3.jpg",
  "./imgs/header4.jpg",
];

// Change the images on the heading
let currentIndex = 0;
function changeImage() {
  if (backgroundOption === true) {
    currentIndex = (currentIndex + 1) % images.length;
  }
  introductionImage.style.backgroundImage = `url('${images[currentIndex]}')`;
}

setInterval(changeImage, 4000);
