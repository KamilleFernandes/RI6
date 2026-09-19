import * as readline from 'readline';
import Mensagens from './mensagens';
import Calculo from './calculo';
import Multiplicacao from './multiplicacao';
import Soma from './soma';
import Subtracao from './subtracao';
import Divisao from './divisao';
import Potenciacao from './potenciacao';
import Radiciacao from './radiciacao';
import Bhaskara from './bhaskara';

let mensagens = new Mensagens()

let iniciar = () => {
  let leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  leitor.question(`Quais são seus números e a operação desejada?\n`, (valor) => {
    let instrucoes = valor.split(' ')
    let operacao = instrucoes[instrucoes.length - 1]

    let numero1 = Number(instrucoes[0])
    let numero2 = Number(instrucoes[1])
    let numero3: number | undefined
    if (instrucoes.length > 3) {
        numero3 = Number(instrucoes[2])
    }

    if (instrucoes.length == 1) {
      operacao = instrucoes[0]
    }

    console.log(`Estas foram suas instruções: ${instrucoes}\n`)

    let calculo: Calculo

    switch (operacao) {
      case 'Somar':
        calculo = new Soma()
        console.log(`O resultado da operação é: ${calculo.calcular(numero1, numero2)}\n`)
        break;
      case 'Subtrair':
        calculo = new Subtracao()
        console.log(`O resultado da operação é: ${calculo.calcular(numero1, numero2)}\n`)
        break;
      case 'Multiplicar':
        calculo = new Multiplicacao()
        console.log(`O resultado da operação é: ${calculo.calcular(numero1, numero2)}\n`)
        break;
      case 'Dividir':
        calculo = new Divisao()
        console.log(`O resultado da operação é: ${calculo.calcular(numero1, numero2)}\n`)
        break;
      case 'Potenciar':
        calculo = new Potenciacao()
        console.log(`O resultado da operação é: ${calculo.calcular(numero1, numero2)}\n`)
        break;
      case 'Radiciar':
        calculo = new Radiciacao()
        console.log(`O resultado da operação é: ${calculo.calcular(numero1, numero2)}\n`)
        break;
      case 'Bhaskara':
        calculo = new Bhaskara()
        console.log(`O resultado da operação é: ${calculo.calcular(numero1, numero2, numero3)}\n`)
        break;
      case 'Sair':
        console.log(`Até uma próxima, falou...`)
        mensagens.farmandoAura()
        break;
      default:
        console.log(`Operação não entendida :(`)
    }

    leitor.close()
    if (operacao != 'Sair') {
      mensagens.comoUsar()
      iniciar()
    }
  });
}

mensagens.boasVindas()
mensagens.listarOpcoes()
mensagens.comoUsar()
iniciar()