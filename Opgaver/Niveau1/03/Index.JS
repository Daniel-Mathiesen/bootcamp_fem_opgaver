let image = document.getElementById("holder");
let text = document.getElementById("holderText");

function skjulElementViaCssSelector(cssSelector){
    cssSelector.style.display="none";
};

skjulElementViaCssSelector(image);