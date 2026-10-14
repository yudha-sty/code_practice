
let x = 5;
let y = 3;
let position;

if (x > 0 && y > 0) {
    position = "Top Right";
} else if (x > 0 && y < 0) {
    position = "Bottom Right";
} else if (x < 0 && y > 0) {
    position = "Top Left";
} else if (x < 0 && y < 0) {
    position = "Bottom Left";
} else {
    position = "Middle";
}

document.getElementById("result").innerHTML =
    "X: " + x + "<br>" +
    "Y: " + y + "<br>" +
    "Player Position: " + position;
