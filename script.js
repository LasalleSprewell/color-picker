// // This block of code is to setup the Simple Color logic
// The background of the page will change according to a list of colors in the simpleColors Array

const color = document.getElementById("color");
const simpleColors = ["red","green","blue","purple","orange","yellow"];
const simpleButton = document.getElementById("btn-simple");
function simpleRandom() {
    return Math.floor (Math.random() * simpleColors.length);
}
simpleButton.addEventListener("click", function(){
  console.log(simpleRandom());
  const randomNum = simpleRandom();
  document.body.style.backgroundColor = simpleColors[randomNum];
color.textContent = simpleColors[randomNum];
});


