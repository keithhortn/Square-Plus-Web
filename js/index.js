"use strict";

// Hero Gif
window.onload = function () {
  // Array of gif
  const gifs = [
    "/media/poliander-sale.gif",
    "/media/collection-sale.gif",
    "/media/shoe-sale.gif",
  ];

  let heroContainer = document.querySelector(".hero-container");

  const switchGifs = (gif, container, step) => {
    gif.forEach((image, index) =>
      setTimeout(() => {
        container.style.backgroundImage = `url(${image})`;
      }, step * (index + 1))
    );
    setTimeout(() => switchGifs(gif, container, step), step * gif.length);
  };

  switchGifs(gifs, heroContainer, 4000);
};

// Loading Spinner
window.addEventListener("load", hideSpinner);
function hideSpinner() {
  const loadingSpinner = document.querySelector("#loading");
  loadingSpinner.style.display = "none";
}

// Essential Section
const clothingBox = document.querySelector(".clothing");
const shoesBox = document.querySelector(".shoes");
const bagsBox = document.querySelector(".bags");
const accessoriesBox = document.querySelector(".accessories");

clothingBox.style.backgroundImage = "url(/images/es-clothing.jpg)";
// clothingBox.style.gridArea = "1 / span 1";
shoesBox.style.backgroundImage = "url(/images/es-shoes.jpg)";
// shoesBox.style.gridArea = "2 / span 1";
bagsBox.style.backgroundImage = "url(/images/es-bags.jpg)";
// bagsBox.style.gridArea = "1 / span 1";
accessoriesBox.style.backgroundImage = "url(/images/es-accessories.jpg)";
// accessoriesBox.style.gridArea = "2 / span 1";

// window.onload = function () {
//   // Array of gif
//   const bgifs = [
//     "/images/bottom-gif1.jpg",
//     "/images/bottom-gif2.jpg",
//     "/images/bottom-gif3.jpg",
//     "/images/bottom-gif4.jpg",
//   ];

//   let bgContainer = document.querySelector(".bottom-gif-container");

//   const switchBGifs = (gif, container, step) => {
//     gif.forEach((image, index) =>
//       setTimeout(() => {
//         container.style.backgroundImage = `url(${image})`;
//       }, step * (index + 1))
//     );
//     setTimeout(() => switchBGifs(gif, container, step), step * gif.length);
//   };

//   switchBGifs(bgifs, bgContainer, 1000);
// };