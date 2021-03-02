for (var i = 1; i <= 100; i++) {
  var numeri = i;
  // variabile contatore

  // modifiche valori du numeri multipli 3/5
  if (numeri % 3 == 0 && numeri % 5 == 0){
    numeri = "FizzBuzz";
  }
  else if( numeri % 3 == 0 ){
  numeri = ("Fizz");
  }
  else if ( numeri % 5 == 0 ){
    numeri = ("Buzz");
  }
  // modifiche valori du numeri multipli 3/5

  // Stampa variabile e incremento valore
  document.getElementById("testo").innerHTML += numeri  + "<br>";
  console.log(numeri);
}
