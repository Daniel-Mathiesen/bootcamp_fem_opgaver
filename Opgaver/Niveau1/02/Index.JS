let SvarTekst = document.getElementById("Svar")

function beregnForhold(a, b){
    if(a && b!== 0){    
    var udregning = a / b;
    SvarTekst.innerHTML = udregning;
    console.table(SvarTekst)
    }
    else{
      SvarTekst.innerHTML = "ERROR 1: Divided with 0" 
      console.error("User divided with 0") 
    }
};

beregnForhold(4, 3);

