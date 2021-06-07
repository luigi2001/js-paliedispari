
/*-------- pari e dispari-------------- */

/*var pariDispari = prompt('Pari o dispari?');


var maiuscola = pariDispari.toUpperCase();


if(maiuscola == 'PARI' || maiuscola == 'DISPARI'){

    var numero = parseInt(prompt('Inserisci un numero da 1 a 5:'));

    
  if(numero <= 0 || numero > 5){
    alert('Attenzione! Inserisci un numero da 1 a 5');
   } else{

    var numeroRandom = randomNumber(1,5);
    
   
    var somma = numero + numeroRandom;
    
   

    var risultato = pariODispari(somma);
   

   }

} else{
    alert('Attenzione! devi inserire pari o dispari');
}


if(risultato == true){
    document.getElementById('esito').innerHTML = 'COMPLIMENTI! HAI VINTO.';
}else if(risultato == false){
    document.getElementById('esito').innerHTML = 'MI DISPIACE! HAI PERSO.';
}*/




/* ------- Palindroma ---------*/

var parola = prompt('inserisci una parola:');

var esito = palindroma(parola);

if(parola < 0 || parola >= 0){
    alert('Attenzione! Inserire solo parole.')
}else{

    var risposta = 'la parola inserita non è palindroma';

    if(parola == esito){
      risposta = 'la parola inserita è palindroma';
    }

    document.getElementById('esito').innerHTML = risposta;
}





/* funzioni */

/* pari e dispari*/

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function pariODispari(x){

    if(x % 2 == 0){
        return true;
    } else{
        return false;
    }
}

/* Palidroma*/

function palindroma(y){

    var reverse = '';

    for (var i = y.length - 1; i >= 0; i--) {
        reverse += y[i];
    }

    return reverse;
}