document.addEventListener("DOMContentLoaded", function() {
    // Check if the simpleButton exists on the page
    const simpleButton = document.getElementById("btn-simple");
    if (simpleButton) {
        simpleButton.addEventListener("click", function() {
            const randomNum = simpleRandom();
            document.body.style.backgroundColor = simpleColors[randomNum];
              color.textContent = simpleColors[randomNum];
          });
    }

    // Check if the gradButton exists on the page
    const gradButton = document.getElementById("btn-gradient");
    if (gradButton) {
        gradButton.addEventListener("click", function() {
            const gradientVal = gradient();
            document.body.style.background = gradientVal;
            color1.textContent = getRandomHexCode();
            color2.textContent = getRandomHexCode();
        });
    }

});
const color = document.getElementById("color");
const simpleColors = ["red","green","blue","purple","orange","yellow"];
const simpleButton = document.getElementById("btn-simple");
function simpleRandom() {
    return Math.floor (Math.random() * simpleColors.length);
}


const color1 = document.getElementById("color1");
const color2 = document.getElementById("color2");

const gradButton = document.getElementById("btn-gradient");
gradButton.addEventListener("click", function(){
    const gradientVal = gradient()
    document.body.style.background = gradientVal;
    color1.textContent = getRandomHexCode();
    color2.textContent = getRandomHexCode();
});

function getRandomHexCode() {
    const characters = '0123456789ABCDEF';
    let hexCode = '#';
    for (let i = 0; i < 6; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        hexCode += characters[randomIndex];
    }

    return hexCode;
};

function gradient() {
    let color1 = getRandomHexCode();
    let color2 = getRandomHexCode();
    while (color1 === color2) {
        color2 = getRandomHexCode();
    }
    let newGradient = `linear-gradient(to right, ${color1}, ${color2})`;
    return newGradient;


};