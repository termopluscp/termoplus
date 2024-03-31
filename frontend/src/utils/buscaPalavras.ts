// BuscaPalavras.ts
import { possiveisPalavras } from '../data/Letras-e-Palavras';

function getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function buscaUmaPalavra(): string {
    const index = getRandomNumber(0, possiveisPalavras.length - 1);
    return possiveisPalavras[index];
}

export function buscaDuasPalavras(): [string, string] {
    let index1 = getRandomNumber(0, possiveisPalavras.length - 1);
    let index2 = getRandomNumber(0, possiveisPalavras.length - 1);

    while (index2 === index1) {
        index2 = getRandomNumber(0, possiveisPalavras.length - 1);
    }

    return [possiveisPalavras[index1], possiveisPalavras[index2]];
}
