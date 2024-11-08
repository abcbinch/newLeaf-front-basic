let colorBtn = document.querySelector("button");
let bgrColor = document.querySelector("body");
let rgbColor = document.querySelector("h2");

function changeColor() {
  let colorCode1 = Math.floor(Math.random() * 256);
  let colorCode2 = Math.floor(Math.random() * 256);
  let colorCode3 = Math.floor(Math.random() * 256);
  let randomColor =
    "rgb(" + colorCode1 + "," + colorCode2 + "," + colorCode3 + ")";

  bgrColor.style.background = randomColor;

  rgbColor.innerText = randomColor;

  console.log(randomColor);
  console.log(rgbColor.innerText);
}

colorBtn.addEventListener("click", changeColor);
