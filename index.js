var randomnum1 = Math.floor(Math.random() * 6) + 1;
var randomnum2 = Math.floor(Math.random() * 6) + 1;
if (randomnum1 > randomnum2) {
  document.querySelector("h1").textContent = "๐Player 1 Wins!!๐";
} else if (randomnum2 > randomnum1) {
  document.querySelector("h1").textContent = "๐Player 2 Wins!!๐";
} else {
  document.querySelector("h1").textContent = "๐DRAW๐";
}

var source1 = "images/dice" + randomnum1 + ".png";
var source2 = "images/dice" + randomnum2 + ".png";
document.querySelector("img.img1").setAttribute("src", source1);

document.querySelector("img.img2").setAttribute("src", source2);
