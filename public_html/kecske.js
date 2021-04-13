window.addEventListener("load",init);

function ID(nev){
    return document.getElementById(nev);
}
function $(nev){
    return document.querySelectorAll(nev);
}


function init(){
    var kepElemCim=document.querySelectorAll(".kepek");
    var kepElem=$(".kepek");
    for (var i = 0; i < kepElem.length; i++) {
        kepElem[i].addEventListener("mouseover",formazFel);
        kepElem[i].addEventListener("mouseout",formazLe);  
    }
    
}


function formazFel(){
    this.classList.add("kiemel");
}

function formazLe() {
    this.classList.remove("kiemel");
}