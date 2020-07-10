const underConstruction = document.querySelectorAll(".under-construction");
const homePagePhoto = document.querySelector("#homepage-photo");

console.log(underConstruction);
console.log([...underConstruction]);

[...underConstruction].forEach((node) => node.addEventListener("click", function() {
  alert('Still Under Construction');
}));

let photoSources = ["sofitel.jpg", "colgate.jpg", "earlyBird.jpg"]
let currentPhotoPosition = 0

setInterval(function() {
  currentPhotoPosition += 1;
  currentPhotoPosition %= photoSources.length;
  homePagePhoto.src = photoSources[currentPhotoPosition]
  console.log('changed');
}, 3000);