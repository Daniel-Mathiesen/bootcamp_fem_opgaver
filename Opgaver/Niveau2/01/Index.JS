let ButtonContainer = document.querySelector("#buttons");
let buttons = document.querySelectorAll("button");

ButtonContainer.addEventListener("click", (event) => {
    if(event.target.localName == "button"){
        buttons.forEach(button => button.removeAttribute("style"));
        event.target.style.backgroundColor = "green";
    };
});