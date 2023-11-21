const color = document.getElementById("color");
const simpleColors = ["yellow", "blue", "red", "green", "purple", "aqua", "orange"];
const simpleButton = document.getElementById("btn-simple");
function simpleRandom() {
    return Math.floor (Math.random() * simpleColors.length);
};
simpleButton.addEventListener("click", function(){
    console.log("work");
})