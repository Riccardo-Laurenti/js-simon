/*
 Descrizione:
 
 Visualizzare in pagina 5 numeri casuali diversi. Da lì parte un timer di 30 secondi.
 Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
 Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

Bonus:
Mostriamo il countdown dei 30 secondi in pagina

Facciamo inserire i numeri all'utente tramite 5 campi di input invece che via prompt :faccia_leggermente_sorridente:

Consigli del giorno:
 Pensate prima in italiano.
 Dividete in piccoli problemi la consegna.
 Individuate gli elementi di cui avete bisogno per realizzare il programma.
*/


//Genero costante
const genRandom = randomUniqueNum(100, 5)

console.log(genRandom);

//prendo elemento dal dom
const dadRandom = document.querySelector("ul");

for (let index = 0; index < genRandom.length; index++) {
    let num = genRandom[index];
    let numContainer = `<li>${num}</li>`
    dadRandom.innerHTML += numContainer;
    
}


let misssec = 3;

let time = setInterval(
function () {
  if (misssec === 0) {
    dadRandom.classList.add("my-disp-none");
    clearInterval(time);

  }
  else{
    misssec--
    console.log(misssec);
  }
},
1000

)

let sec = setTimeout(
function () {
   
    let txtNumb1 = parseInt(prompt("scrivi il primo numero"));
    let txtNumb2 = parseInt(prompt("scrivi il secondo numero"));
    let txtNumb3 = parseInt(prompt("scrivi il terzo numero"));
    let txtNumb4 = parseInt(prompt("scrivi il quarto numero"));
    let txtNumb5 = parseInt(prompt("scrivi il quinto numero")); 
    
    console.log(txtNumb1);
    console.log(txtNumb2);
    console.log(txtNumb3);
    console.log(txtNumb4);
    console.log(txtNumb5);

    arreyNumUtente = [txtNumb1, txtNumb2, txtNumb3, txtNumb4, txtNumb5]
    console.log(arreyNumUtente);


   let strinRandomNum = genRandom.join(); 
   console.log(strinRandomNum);

   let strinNumUtente = arreyNumUtente.join();
    
if (strinRandomNum === strinNumUtente) {
    console.log("Hai vinto");
}
else{
    console.log("Hai perso");
}
  
},
5000

) 



/* funzioni */

function randomUniqueNum(range, outputCount) {

    let arr = []
    for (let i = 1; i <= range; i++) {
      arr.push(i)
    }
  
    let result = [];
  
    for (let i = 1; i <= outputCount; i++) {
      const random = Math.floor(Math.random() * (range - i));
      result.push(arr[random]);
      arr[random] = arr[range - i];
    }
  
    return result;
  }

