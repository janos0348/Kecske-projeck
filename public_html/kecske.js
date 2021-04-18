window.addEventListener("load", init);


function ID(nev) {
    return document.getElementById(nev);
}
function $(nev) {
    return document.querySelectorAll(nev);
}
var kepElem = $("img");
    var kepek = [];
function init() {
var kepElem = $("img");
    var kepElemCim = document.querySelectorAll("img");
    var kepek = [];
    //var kepek = ["kepek/kecske2.png", "kepek/kaposzta.png", "kepek/farkas.png"];
    for (var i = 0; i < kepElem.length; i++) {
        kepElem[i].addEventListener("mouseover", formazFel);
        kepElem[i].addEventListener("mouseout", formazLe);
        kepElem[i].addEventListener("click", hozzaad);
    }
    //console.log(kepElem[0].src);
    //console.log(kepek);
    document.title = 'Kovács Dániel Csaba, Bogdán Gábor, Katona János ';
    ID("keszitok").innerHTML = 'Készítők: Kovács Dániel Csaba, Bogdán Gábor, Katona János ';
    //ID('keszitok')style.fontSize="20px";

}
console.log(kepek);
function hozzaad(){
    var kecskein = false;
    var kaposztain = false;
    var farkasin = false;
    var elem = ['<img src="kepek/kecske2.png" alt="kecske">', '<img src="kepek/kaposzta.png" alt="kaposzta">', '<img src="kepek/farkas.png" alt="farkas">'];
    kepek.push(this.src);
    this.style.display = "none";
    if (this.src === "http://localhost:8383/Kecske/kepek/kecske2.png") {
        $("article div").innerHtml+=elem[0];
            kecskein = true;
        if (kaposztain === true){
            alert("A kecske elfogyasztotta a káposztát");
        }else if (farkasin === true){
            alert("A kecskét elfogyasztotta a farkas");
        }
    }else if (this.src === "http://localhost:8383/Kecske/kepek/kaposzta.png") {
        ID("csonak").innerHtml=elem[1];  
        if (kecskein === true){
            alert("A kecske elfogyasztotta a káposztát");
        }
        kaposztain = true;
    }else{
        ID("csonak").innerHtml=elem[2];  
        if (kecskein === true){
            alert("A kecskét elfogyasztotta a farkas");
        }
        farkasin = true;
    }

}
function formazFel() {
    this.classList.add("kiemel");
}

function formazLe() {
    this.classList.remove("kiemel");
}