<<<<<<< HEAD
window.addEventListener("load", init);


function ID(nev) {
    return document.getElementById(nev);
}
function $(nev) {
    return document.querySelectorAll(nev);
}
function init() {
    var kepElemCim = document.querySelectorAll("img");
    var kepElem = $("img");
    for (var i = 0; i < kepElem.length; i++) {
        kepElem[i].addEventListener("mouseover", formazFel);
        kepElem[i].addEventListener("mouseout", formazLe);
    }

    document.title = 'Kovács Dániel Csaba, Bogdán Gábor, Katona János ';
            var eleresek = new array;
    eleresek.push(this.src);


}

function formazFel() {
=======
window.addEventListener("load",init);

function ID(nev){
    return document.getElementById(nev);
}
function $(nev){
    return document.querySelectorAll(nev);
}


function init(){
    var kepElemCim=document.querySelectorAll("img");
    var kepElem=$("img");
    for (var i = 0; i < kepElem.length; i++) {
        kepElem[i].addEventListener("mouseover",formazFel);
        kepElem[i].addEventListener("mouseout",formazLe);  
    }
    
}


function formazFel(){
>>>>>>> 312b74b035de61cf8cbcaf36faa38416cbe46fd8
    this.classList.add("kiemel");
}

function formazLe() {
    this.classList.remove("kiemel");
}