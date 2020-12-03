function partida_dardos(radios) {
  let total = 0,
    todosMenores = true,
    tieneValores = false;
  radios.forEach((tiro) => {
    tieneValores = true;
    if (tiro > 10) {
      todosMenores = false;
    } else {
      if (tiro >= 5 && tiro <= 10) {
        total = total + 5;
        todosMenores = false;
      } else {
        total = total + 10;
      }
    }
  });
  if (todosMenores && tieneValores) {
    total = total + 100;
  }
  return total;
}

//prueba tiros
console.log(partida_dardos([1, 5, 11]));
console.log(partida_dardos([15, 20, 30]));
console.log(partida_dardos([1, 2, 3, 4]));
console.log(partida_dardos([]));
