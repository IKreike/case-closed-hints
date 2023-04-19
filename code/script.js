console.log ("test linking");

var kofferButton = document.querySelector("#knopkoffer");
var emailButton = document.querySelector("#knopemail");
var wachtwoordButton = document.querySelector("#knopwachtwoord");

var sudokuButton = document.querySelector("#knopSudoku");
var morseButton = document.querySelector("#knopMorse");
var binairButton = document.querySelector("#knopBinair");
var distortedButton = document.querySelector("#knopDistorted");

var puzzelButton = document.querySelector("#knopPuzzel");
var RBButton = document.querySelector("#knopRB");
var rebusButton = document.querySelector("#knopRebus");

var cheeseButton = document.querySelector("#knopCheese");
var logiButton = document.querySelector("#knopLogi");

var tekstkoffer = document.querySelector("#tekstkoffer");
var tekstemail = document.querySelector("#tekstemail");
var tekstwachtwoord = document.querySelector("#tekstwachtwoord");

kofferButton.addEventListener("click",hulpkoffer)
emailButton.addEventListener("click",hulpemail)
wachtwoordButton.addEventListener("click",hulpwachtwoord)

sudokuButton.addEventListener("click",hulpSudoku)
morseButton.addEventListener("click",hulpMorse)
binairButton.addEventListener("click",hulpBinair)
distortedButton.addEventListener("click",hulpDistorted)

puzzelButton.addEventListener("click",hulpPuzzel)
RBButton.addEventListener("click",hulpRB)
rebusButton.addEventListener("click",hulpRebus)

cheeseButton.addEventListener("click",hulpCheese)
logiButton.addEventListener("click",hulpLogi)

function hulpkoffer(){
    console.log("hulp nodig bij koffer");
    tekstkoffer.classList.remove("hidden");
    sudokuButton.classList.remove("hidden");
    morseButton.classList.remove("hidden");
    binairButton.classList.remove("hidden");
    distortedButton.classList.remove("hidden");
}

function hulpemail(){
    console.log("hulp nodig bij email");
    tekstemail.classList.remove("hidden");
    puzzelButton.classList.remove("hidden");
    RBButton.classList.remove("hidden");
    rebusButton.classList.remove("hidden");
}

function hulpwachtwoord(){
    console.log("hulp nodig bij email");
    tekstwachtwoord.classList.remove("hidden");
    cheeseButton.classList.remove("hidden");
    logiButton.classList.remove("hidden");
}



function hulpSudoku(){
    tekstSudoku1.classList.remove("hidden");
}

function hulpMorse(){
    tekstMorse1.classList.remove("hidden");
}

function hulpBinair(){
    tekstBinair1.classList.remove("hidden");
}

function hulpDistorted(){
    tekstDistorted1.classList.remove("hidden");
}



function hulpPuzzel(){
    tekstPuzzel1.classList.remove("hidden");
}
function hulpRB(){
    tekstRB1.classList.remove("hidden");
}
function hulpRebus(){
    tekstRebus1.classList.remove("hidden");
}



function hulpCheese(){
    tekstCheese1.classList.remove("hidden");
}
function hulpLogi(){
    tekstLogi1.classList.remove("hidden");
}

// var Button = document.querySelector("#knop");
// Button.addEventListener("click",hulp)
// function hulp(){
//     tekst1.classList.remove("hidden");
// }