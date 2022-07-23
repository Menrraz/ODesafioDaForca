var letrasChutadas = []
var vidas = 6
var palavra = ['_', '_', '_', '_', '_', '_', '_']
var palavraCerta = ['a', 'b', 'a', 'c', 'a', 'x', 'i']
class Forca {
  chutar(letra) {
    let acertos = 0
    // Há somente 1 letra e a letra ainda não foi chutada?
    if (letra.length == 1 && letrasChutadas.indexOf(letra) == -1) {
      letrasChutadas.push(letra)
      // A letra está certa?
      for (let i = 0; i < palavraCerta.length+1; i++) {
        if (palavraCerta[i] == letra) {
          palavra[i] = letra
          acertos++
        }
      }
      // Não houve acertos?
      if (acertos == 0) {
        vidas--
      }
    }
  }
  buscarEstado() {
    let chutesCertos = 0
    let estado = 'aguardando chute'
    estado = vidas == 0 ? 'perdeu': estado
    for (let i = 0; i < palavra.length; i++) {
      if (palavra[i] !== "_") {
        chutesCertos++
      }
    }
    estado = chutesCertos == palavraCerta.length ? 'ganhou': estado
    return estado; 
  } // Possiveis valores: "perdeu", "aguardando chute" ou "ganhou"

  buscarDadosDoJogo() {
      return {
          letrasChutadas, // Deve conter todas as letras chutadas
          vidas, // Quantidade de vidas restantes
          palavra// Deve ser um array com as letras que já foram acertadas ou o valor "_" para as letras não identificadas
      }
  }
  
}

module.exports = Forca;
