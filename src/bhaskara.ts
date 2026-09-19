import Calculo from './calculo';
import Radiciacao from './radiciacao';

export default class Bhaskara extends Calculo {
    public calcular(numero1: number, numero2: number, numero3: number = 0): string{
        const delta = numero2 ** 2 - 4 * numero1 * numero3
        const raiz = new Radiciacao().calcular(delta, 2)

        if (delta < 0) {
            console.log('Não existem raízes reais para essa equação.')
            return `0`
        }

        const x1 = (-numero2 + raiz) / (2 * numero1)
        const x2 = (-numero2 - raiz) / (2 * numero1)

        return `x1: ${x1}  x2: ${x2}`
    }
}