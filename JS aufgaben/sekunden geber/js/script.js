//Deklaration

const submitButton= document.getElementById("submitButton")
const resultText= document.getElementById("result")
var day;
var month;
var year;
var incrementer = undefined;



//Utility Funktionen

function test(param) { console.log(param || "test"); }



//script

function secondsCalc() {
    const dateGeber = document.getElementById("date-geber").value;
    var datum = new Date(dateGeber);    
    var heute = new Date();

    var result = Math.floor((heute - datum) / 1000);

    resultText.innerText = new Intl.NumberFormat('de-DE').format(result) + " Sekunden";

    
    incrementer = setInterval(() => {
        result++;
        var buffer = new Intl.NumberFormat('de-DE').format(result);
        resultText.innerText = buffer + " Sekunden"
    }, 1000);

    incrementer;}
    

//Eventlistener

submitButton.addEventListener("click",()=>{
    if(incrementer != undefined){
        clearInterval(incrementer);
    }
    secondsCalc();

});


