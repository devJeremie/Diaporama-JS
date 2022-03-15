/*LES TIMERS*/
//ATTENTION ILS SONT BLOQUANTS

/*console.log("Début du script !");//setTimeout
setTimeout(function() {
    console.log("J'ai atteint mes 5 sec !");
}, 5000);
console.log("Fin du script");

let nbDecompte = 0;//setIntervalle
console.log("Je continue avec l'autre timer");
let timer = setInterval(function() {
    console.log(`J'affiche un message ${nbDecompte++} !`);
   // console.log("J'affiche un message" + nbDecompte++ +  "!");Meme methode, facon différente d'ecrire
  /* console.log(prompt('Donnez un mot'));*//*mais il s'affichera toutes les 2sec donc va bloquer le setIntervalle
}, 2000);
console.log("Je finis le test");

document.addEventListener('click', function(){
    clearInterval(timer);
    console.log("Je stoppe le timer");
})*/

let adam = document.querySelector(".adam");

setTimeout(function(){
    adam.classList.toggle("jc")
},8000)

let cligno = document.querySelector(".cligno");
    setInterval(function(){
        cligno.classList.toggle("clignopen")
    },100);


const progressBar = document.querySelector("#progressBar");
//setInterval(()=>{
    let width = 0;
    /*let id = */setInterval(()=>{
    if(width >= 100) {
        width = 0;
        //clearInterval(id);
    }else {
        width++;
        progressBar.style.width = width +'%';
    }
}, 50);
//},6300);
let diapo = document.querySelectorAll(".cadre");
function repeat (){
    setTimeout(()=>{
        diapo[0].classList.remove("bebe");
        diapo[1].classList.add("clin");
        setTimeout(()=>{
           diapo[1].classList.remove("clin");
            diapo[2].classList.add("coq"); 
            setTimeout(()=>{
                diapo[2].classList.remove("coq");
                diapo[3].classList.add("kart");
                setTimeout(()=>{
                    diapo[3].classList.remove("kart");
                    diapo[0].classList.add("bebe");
               repeat ();
                },4000);
            }, 3500);
        }, 3000);
    }, 2000);
};
repeat ();
