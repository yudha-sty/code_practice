
let nameResult = "";
for (let i = 1; i <= 20; i++) {
    nameResult += "I'm Steve<br>";
}
document.getElementById("nameResult").innerHTML = nameResult;


let numberResult = "";
for (let i = 1; i <= 20; i++) {
    numberResult += i + " ";
}
document.getElementById("numberResult").innerHTML = numberResult;


let multipleResult = "";
for (let i = 5; i <= 100; i += 5) {
    multipleResult += i + " ";
}
document.getElementById("multipleResult").innerHTML = multipleResult;
