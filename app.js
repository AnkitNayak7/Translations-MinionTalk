var btnTraslate = document.querySelector("#btn-translate")
var txtInput = document.querySelector("#txt-input")
var outputDiv = document.querySelector("#output")


function clickHandler(){
    outputDiv.innerText = "sadasdsa "+ txtInput.value
};

btnTraslate.addEventListener("click", clickHandler)
