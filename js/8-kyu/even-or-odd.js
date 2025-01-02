/**
 * Verifica se o número é par ou impar
 *
 * @param {number} number - O número a ser verificado.
 * @returns {string} - Um texto dizendo se é par ou impar.
 *
 * Regras:
 * 1. Verifica se o número é divisivel por 2 e de resto 0:
 *      - 'Even', se o número for par.
 *      - 'Odd', se o número for impar.
 *
 */
function evenOrOdd(number) {
    return number % 2 === 0 ? `Even` : `Odd`;
}
