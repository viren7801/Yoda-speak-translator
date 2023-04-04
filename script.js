var txtInput = document.querySelector("#text-input");
var btnTranslate = document.querySelector("#button-translate");
var outputDiv = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/yoda.json"

function getTranslationURL(text) {
    return serverURL + "?" + "text=" + text
}


function errorHandler(error) {
    console.log("error occured", error);
    alert("Something went wrong! try again later");
}

function clickHandler() {
    var inputText = txtInput.value;

    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json => {
        var translatedText =json.contents.translated;
        outputDiv.innerText = translatedText;
    })
    .catch(errorHandler)
}



btnTranslate.addEventListener("click", clickHandler);
