var btnTraslate = document.querySelector("#btn-translate")
var txtInput = document.querySelector("#txt-input")
var outputDiv = document.querySelector("#output")

// var serverUrl = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"
var serverUrl = "https://api.funtranslations.com/translate/minion.json"

function getTranslation(text){
    return serverUrl + "?" + "text=" + text
}


function errorHandler(error){
    console.log("error occured", error)
}

function clickHandler(){
    // outputDiv.innerText = "sadasdsa "+ txtInput.value
    var InputText = txtInput.value
    fetch(getTranslation(InputText))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated
        outputDiv.innerText = translatedText
    })
    .catch(errorHandler)
};

btnTraslate.addEventListener("click", clickHandler)
