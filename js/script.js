
/*-------- pari e dispari-------------- */

var pariDispari = prompt('Pari o dispari?');


/* capitalize */

var maiuscola = capitalize(pariDispari);


/* controllo */

if(maiuscola == 'Pari' || maiuscola == 'Dispari'){

    var numero = parseInt(prompt('Inserisci un numero da 1 a 5:'));
    

   /* controllo numero */

  if(numero <= 0 || numero > 5){
    alert('Attenzione! Inserisci un numero da 1 a 5');
   } else{

    /* numero random*/

   var numeroRandom = getRndInteger(1,5);
   

   /* somma numeri*/

   var somma = numero + numeroRandom;
   

   var risultato = pariODispari(somma);
   

   }

} else{
    alert('Attenzione! devi inserire pari o dispari (inserire tutto in minuscolo)');
}


if(risultato == true){
    document.getElementById('esito').innerHTML = 'COMPLIMENTI! HAI VINTO.';
}else if(risultato == false){
    document.getElementById('esito').innerHTML = 'MI DISPIACE! HAI PERSO.';
}



/* funzioni */

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function capitalize(nome){
    return nome.charAt(0).toUpperCase()+ nome.slice(1);
}

function pariODispari(x){

    if(x % 2 == 0){
        return true;
    } else{
        return false;
    }
}

