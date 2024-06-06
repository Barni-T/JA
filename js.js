console.log("Készítette: Tóth Barnabás Zsolt);
const nev = window.prompt("Hogy hívnak?");
let navbar_li = document.getElementById("navbar_li");
let navbar_content = document.getElementById("navbar_content");
let klikk = true;
navbar_li.addEventListener("click", (e) => {
    if(klikk){
        document.getElementById("navbar_content").style.display = "block";
        document.getElementById("navbar_content").style.position = "absolute";
        klikk = false;
    }
    else{
        document.getElementById("navbar_content").style.display = "none";
        klikk = true;
    }
})
navbar_content.addEventListener("click", (e) => {
    navbar_content.style.display = "none";
    klikk = true;
})
let next = document.getElementById("next");
let jelzes = true;
let jatek = false;
let kerdes_mehet = false;
let jatek_pont = 0;
next.addEventListener("click", (e) => {
    if(jatek){
        next.style.display = "none";
        jatek = false;
        document.getElementById("jatek").style.display = "flex";
        document.getElementById("time").style.display="block";
        setInterval(time,1000)
        document.getElementById("eredmeny").innerText = jatek_pont + "/5";
        Elso();
    }
    if(kerdes_mehet){
        kerdes_mehet = false;
        jatek = true;
        document.getElementById("tomb").style.display = "none";
        document.getElementById("kerdesek").style.display = "block";
        next.style.display = "none";
        next.style.bottom="0px";
    }
    if(jelzes){
        jelzes = false;
        kerdes_mehet = true;
        window.alert("Már nem fog tudni a szöveghez visszatérni!");
    }
})
let kesz = document.getElementById("kesz");
let jo = document.getElementById("jo");
let rossz1 = document.getElementById("rossz1");
let rossz2 = document.getElementById("rossz2");
let pontok = 0;
let pont = 0;
jo.addEventListener("click", (e) => {
    pont = 1;
})
rossz1.addEventListener("click", (e) => {
    pont = 0;
})
rossz2.addEventListener("click", (e) => {
    pont = 0;
})
let kerdes_jelzes = true;
let ellenorzes = false;
kesz.addEventListener("click", (e) => {
    if(ellenorzes){
        let elso = document.getElementById("elso").value;
        let masodik = document.getElementById("masodik").value;
        let negyedik = document.getElementById("negyedik").value;
        let otodik = document.getElementById("otodik").value;
        if(elso == "görögkeleti"){
            pontok++;
        }
        if(masodik == "öreg Dörmögő"){
            pontok++;
        }
        if(negyedik == "internátus igazgatója"){
            pontok++;
        }
        if(otodik == "Nincsen apám se anyám"){
            pontok++;
        }
        pontok += pont;
        document.getElementById("osszes").style.display = "none";
        document.getElementById("eredmeny").innerText = pontok + "/5";
        kesz.style.display = "none";
        next.style.display = "block";
        next.style.marginTop = "20vh";
        next.innerText = "Játék indítása";
    }
    if(kerdes_jelzes){
        kerdes_jelzes = false;
        ellenorzes = true;
        window.alert("Már nem fog tudni a kérdésekhez visszatérni!");
    }
})
let kerdes = document.getElementById("kerdes1");
let valasz1 = document.getElementById("valasz1");
let valasz2 = document.getElementById("valasz2");
let elso_kesz = false;
let elso_mehet = true;
let masodik_mehet = false;
let harmadik_mehet = false;
let negyedik_mehet = false;
let otodik_mehet = false;
let vegevan = false;
let alkalom1 =  true;
let alkalom2 =  true;
let alkalom3 =  true;
let alkalom4 =  true;
let alkalom5 =  true;
function Elso(){            
            valasz1.addEventListener("click", (e) => {
                if(alkalom1){
                    valasz1.style.border = "3px red solid";
                    document.getElementById("eredmeny").innerText = jatek_pont + "/5";
                    alkalom1 = false;
                    setTimeout(Masodik, 2000);
                }
            })
            valasz2.addEventListener("click", (e) => {
                if(alkalom1){
                    valasz2.style.border = "3px green solid";
                    jatek_pont++;
                    document.getElementById("eredmeny").innerText = jatek_pont + "/5";
                    alkalom1 = false;
                    setTimeout(Masodik, 2000);
                }
            })
}
function Masodik(){
    kerdes.style.display = "none";
    valasz1.style.display = "none";
    valasz2.style.display = "none";
    document.getElementById("kerdes2").style.display = "block";
    document.getElementById("valasz3").style.display = "block";
    document.getElementById("valasz4").style.display = "block";
    document.getElementById("valasz3").addEventListener("click", (e) => {
        if(alkalom2){
            document.getElementById("valasz3").style.border = "3px green solid";
            jatek_pont++;
            document.getElementById("eredmeny").innerText = jatek_pont + "/5";
            alkalom2 = false;
            setTimeout(Harmadik, 2000);
        }
    })
    document.getElementById("valasz4").addEventListener("click", (e) => {
        if(alkalom2){
            document.getElementById("valasz4").style.border = "3px red solid";
            document.getElementById("eredmeny").innerText = jatek_pont + "/5";
            alkalom2 = false;
            setTimeout(Harmadik, 2000);
        }
    })
}
function Harmadik(){
    document.getElementById("kerdes2").style.display = "none";
    document.getElementById("valasz3").style.display = "none";
    document.getElementById("valasz4").style.display = "none";
    document.getElementById("kerdes3").style.display = "block";
    document.getElementById("valasz5").style.display = "block";
    document.getElementById("valasz6").style.display = "block";
    document.getElementById("valasz5").addEventListener("click", (e) => {
        if(alkalom3){
            document.getElementById("valasz5").style.border = "3px green solid";
            jatek_pont++;
            document.getElementById("eredmeny").innerText = jatek_pont + "/5";
            alkalom3 = false;
            setTimeout(Negyedik, 2000);
        }
    })
    document.getElementById("valasz6").addEventListener("click", (e) => {
        if(alkalom3){
            document.getElementById("valasz6").style.border = "3px red solid";
            document.getElementById("eredmeny").innerText = jatek_pont + "/5";
            alkalom3 = false;
            setTimeout(Negyedik, 2000);
        }
    })
}
function Negyedik(){
    document.getElementById("kerdes3").style.display = "none";
    document.getElementById("valasz5").style.display = "none";
    document.getElementById("valasz6").style.display = "none";
    document.getElementById("kerdes4").style.display = "block";
    document.getElementById("valasz7").style.display = "block";
    document.getElementById("valasz8").style.display = "block";
    document.getElementById("valasz8").addEventListener("click", (e) => {
        if(alkalom4){
            document.getElementById("valasz8").style.border = "3px green solid";
            jatek_pont++;
            document.getElementById("eredmeny").innerText = jatek_pont + "/5";
            alkalom4 = false;
            setTimeout(Otodik, 2000);
        }
    })
    document.getElementById("valasz7").addEventListener("click", (e) => {
        if(alkalom4){
            document.getElementById("valasz7").style.border = "3px red solid";
            document.getElementById("eredmeny").innerText = jatek_pont + "/5";
            alkalom4 = false;
            setTimeout(Otodik, 2000);
        }
    })
}
function Otodik(){
    document.getElementById("kerdes4").style.display = "none";
    document.getElementById("valasz7").style.display = "none";
    document.getElementById("valasz8").style.display = "none";
    document.getElementById("kerdes5").style.display = "block";
    document.getElementById("valasz9").style.display = "block";
    document.getElementById("valasz10").style.display = "block";
    document.getElementById("valasz10").addEventListener("click", (e) => {
        if(alkalom5){
            document.getElementById("valasz10").style.border = "3px green solid";
            jatek_pont++;
            document.getElementById("eredmeny").innerText = jatek_pont + "/5";
            alkalom5 = false;
            setTimeout(vege, 2000)
        }
    })
    document.getElementById("valasz9").addEventListener("click", (e) => {
        if(alkalom5){
            document.getElementById("valasz9").style.border = "3px red solid";
            document.getElementById("eredmeny").innerText = jatek_pont + "/5";
            alkalom5 = false;
            setTimeout(vege, 2000);
        }
    })
}
function vege(){
    vegevan = true;
    document.getElementById("kerdes5").style.display = "none";
    document.getElementById("valasz9").style.display = "none";
    document.getElementById("valasz10").style.display = "none";
    document.getElementById("eredmeny").style.marginTop = "2vh";
    document.getElementById("eredmeny").style.fontSize = "4rem";
    document.getElementById("time").style.position = "relative";
    document.getElementById("time").style.fontSize = "4rem";
    document.getElementById("time").style.textAlign = "center";
    document.getElementById("time").style.marginTop = "5vh";
    document.getElementById("fin").style.display="block";
    document.getElementById("fin").style.marginTop="20vh";
    document.getElementById("nev").innerText=nev;
    document.getElementById("jatek").style.height = "20vh";
    document.getElementById("eredmeny").innerText = "Eredmény: " + jatek_pont + "/5";
}
let test = document.getElementById("test");
let mehet1 = true;
test.addEventListener("click",(e)=>{
    if(mehet1){
        test.style.width="35vw";
        test.style.borderBottom="0px";
        test.style.borderRight="2px solid black";
        document.getElementById("reszlet").innerText = "Kattintson a részletek elrejtéséért";
        mehet1 = false;
    }
    else{
        test.style.width="99%";
        test.style.borderRight="0px";
        test.style.borderBottom="2px solid black";
        document.getElementById("reszlet").innerText = "Kattintson a részletekért";
        mehet1 = true;
    }})
test.addEventListener("mouseover", (e) => {
    document.getElementById("reszlet").style.opacity = 1;
})
test.addEventListener("mouseleave", (e) => {
    document.getElementById("reszlet").style.opacity = 0;
})
let test2 = document.getElementById("test2");
let mehet2 = true;
test2.addEventListener("click",(e)=>{
    if(mehet2){
        test2.style.width="35vw";
        test2.style.borderBottom="0px";
        test2.style.borderRight="2px solid black";
        document.getElementById("reszlet2").innerText = "Kattintson a részletek elrejtéséért";
        mehet2 = false;
    }
    else{
        test2.style.width="99%";
        test2.style.borderRight="0px";
        test2.style.borderBottom="2px solid black";
        document.getElementById("reszlet2").innerText = "Kattintson a részletekért";
        mehet2 = true;
    }
})
test2.addEventListener("mouseover", (e) => {
    document.getElementById("reszlet2").style.opacity = 1;
})
test2.addEventListener("mouseleave", (e) => {
    document.getElementById("reszlet2").style.opacity = 0;
})
let test3 = document.getElementById("test3");
let mehet3 = true;
test3.addEventListener("click",(e)=>{
    if(mehet3){
        test3.style.width="35vw";
        document.getElementById("kotetei").style.marginLeft="0vw";
        test3.style.borderBottom="0px";
        test3.style.borderRight="2px solid black";
        document.getElementById("reszlet3").innerText = "Kattintson a részletek elrejtéséért";
        mehet3 = false;
    }
    else{
        test3.style.width="99%";
        document.getElementById("kotetei").style.marginLeft="0vw";
        test3.style.borderRight="0px";
        test3.style.borderBottom="2px solid black";
        document.getElementById("reszlet3").innerText = "Kattintson a részletekért";
        mehet3 = true;
    }
})
test3.addEventListener("mouseover", (e) => {
    document.getElementById("reszlet3").style.opacity = 1;
})
test3.addEventListener("mouseleave", (e) => {
    document.getElementById("reszlet3").style.opacity = 0;
})
let test4 = document.getElementById("test4");
let mehet4 = true;
test4.addEventListener("click",(e)=>{
    if(mehet4){
        test4.style.width="35vw";
        test4.style.borderBottom="0px";
        test4.style.borderRight="2px solid black";
        document.getElementById("reszlet4").innerText = "Kattintson a részletek elrejtéséért";
        mehet4 = false;
    }
    else{
        test4.style.width="99%";
        test4.style.borderRight="0px";
        test4.style.borderBottom="2px solid black";
        document.getElementById("reszlet4").innerText = "Kattintson a részletekért";
        mehet4 = true;
    }
})
test4.addEventListener("mouseover", (e) => {
    document.getElementById("reszlet4").style.opacity = 1;
})
test4.addEventListener("mouseleave", (e) => {
    document.getElementById("reszlet4").style.opacity = 0;
})
let test5 = document.getElementById("test5");
let mehet5 = true;
test5.addEventListener("click",(e)=>{
    if(mehet5){
        test5.style.width="35vw";
        test5.style.borderBottom="0px";
        test5.style.borderRight="2px solid black";
        document.getElementById("reszlet5").innerText = "Kattintson a részletek elrejtéséért";
        mehet5 = false;
    }
    else{
        test5.style.width="99%";
        test5.style.borderRight="0px";
        test5.style.borderBottom="2px solid black";
        document.getElementById("reszlet5").innerText = "Kattintson a részletekért";
        mehet5 = true;
    }
})
test5.addEventListener("mouseover", (e) => {
    document.getElementById("reszlet5").style.opacity = 1;
})
test5.addEventListener("mouseleave", (e) => {
    document.getElementById("reszlet5").style.opacity = 0;
})
let mp = Number(0);
let final_time = Number(0);
function time(){
    if(!vegevan){
        mp++;
        document.getElementById("s").innerText=mp+"s";
    }
    else{
        final_time = mp;
        document.getElementById("s").innerText=mp+"s";
    }
}
let secret = document.getElementById("secret");
secret.addEventListener("click", (e) => {
    document.getElementById("valasz").style.fontWeight = "bold";
    document.getElementById("valasz10").style.fontWeight = "bold";
})
