//Deklaration

const schereButton = document.getElementById("schere-button");
const steinButton = document.getElementById("stein-button");
const papierButton = document.getElementById("papier-button");
const resultP = document.getElementById("outcome");
const resultPc = document.getElementById("pc");

var options = ["Schere","Stein","Papier"];

var current = undefined;
var currentPC = undefined;

//Utility Fuktionen

function test(param) {
    console.log(param || "test");
}

//Script

function randomNum(p) {
    var rndNum;
    return rndNum = Math.floor(Math.random()*p);
}

function checkForWin(params) {
    optionchecker(randomNum(3));
    var outcome;
    if (current == "Schere" && currentPC == "Stein") {
        outcome = "Loose"
    }else if (current == "Schere" && currentPC == "Papier") {
        outcome = "Win"}
    else if (current == "Papier" && currentPC == "Schere") {
        outcome = "Loose"}
    else if (current == "Papier" && currentPC == "Stein") {
        outcome = "Win"}
    else if (current == "Stein" && currentPC == "Schere") {
        outcome = "Win"}
    else if (current == "Stein" && currentPC == "Papier") {
        outcome = "Loose"}
    else if (current == "Schere" && currentPC == "Papier") {
        outcome = "Win"}
    else if (current == currentPC) {
        outcome = "Draw"}

    resultP.innerText = outcome;
    resultPc.innerText = "Der Pc hat " + currentPC + " gewählt";
}

function optionchecker(n) {
    currentPC = options[n];
    return currentPC;
}


schereButton.addEventListener("click",()=>{ current = "Schere"; checkForWin() })
steinButton.addEventListener("click",()=>{ current = "Stein"; checkForWin()})
papierButton.addEventListener("click",()=>{ current = "Papier"; checkForWin() })




