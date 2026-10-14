
let days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
];

let gamingHours = [2, 2, 3, 3, 1, 4, 5];

let timeLimit = 2;
let totalTime = 0;
let exceededCount = 0;

for (let i = 0; i < gamingHours.length; i++) {
    totalTime += gamingHours[i];

    if (gamingHours[i] > timeLimit) {
        exceededCount++;
    }
}

document.getElementById("totalTime").innerHTML =
    "Total gaming time: " + totalTime + " hours";

document.getElementById("exceededLimit").innerHTML =
    "Number of times the time limit was exceeded: " + exceededCount;
