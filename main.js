const underConstruction = document.querySelectorAll(".under-construction");

console.log(underConstruction);
console.log([...underConstruction]);

[...underConstruction].forEach((node) => node.addEventListener("click", function() {
  alert('Still Under Construction');
}));