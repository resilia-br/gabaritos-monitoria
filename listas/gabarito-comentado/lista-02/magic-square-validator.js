function isMagical(square) {
  // Verificar linhas
  for (let y = 0; y < 3; y += 3) {
    if (square[0 + y] + square[1 + y] + square[2 + y] !== 15) return false;
  }
  // Verificar diagonoal principal
  if (square[0] + square[4] + square[8] !== 15) return false;

  // Verificar colunas
  for (let x = 0; x < 3; x++) {
    if (square[0 + x] + square[3 + x] + square[6 + x] !== 15) return false;
  }

  // Check distinct
  if (new Set(square).size !== 9) return false;

  return true;
}
