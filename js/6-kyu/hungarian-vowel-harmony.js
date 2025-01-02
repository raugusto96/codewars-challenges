/**
 * Converte uma palavra válida em húngaro para o caso instrumental, aplicando as regras de harmonia vocálica
 * e duplicação correta de consoantes ou dígrafos finais.
 *
 * @param {string} word - A palavra em húngaro para ser transformada no caso instrumental.
 * @returns {string} - A palavra no caso instrumental, com o sufixo correto aplicado.
 *
 * Regras:
 * 1. Se a palavra termina com uma vogal:
 *    - Converta a vogal final para sua versão longa (ex: 'a' → 'á', 'e' → 'é').
 *    - Adicione o sufixo:
 *      - '-vel', se a vogal final for uma vogal frontal.
 *      - '-val', se a vogal final for uma vogal posterior.
 *
 * 2. Se a palavra termina com uma consoante ou dígrafo:
 *    - Se for um dígrafo ('sz', 'zs', 'cs'):
 *      - Insira uma duplicação do primeiro caractere do dígrafo no local correto.
 *      - Exemplo: 'rács' → 'ráccs'.
 *    - Se for uma consoante simples:
 *      - Duplicar a última consoante.
 *    - Adicione o sufixo:
 *      - '-el', se a última vogal da palavra for frontal.
 *      - '-al', se a última vogal da palavra for posterior.
 */
function instrumental(word) {
    // Lista de vogais frontais e posteriores
    const frontVowels = ["e", "é", "i", "í", "ö", "ő", "ü", "ű"];
    const backVowels = ["a", "á", "o", "ó", "u", "ú"];

    // Função para verificar se uma vogal é frontal
    function isFrontVowel(vowel) {
        return frontVowels.includes(vowel);
    }

    // Função para converter uma vogal curta em sua versão longa
    function toLongVowel(vowel) {
        const conversion = {
            a: "á",
            e: "é",
            i: "í",
            o: "ó",
            u: "ú",
            ö: "ő",
            ü: "ű",
        };
        return conversion[vowel] || vowel;
    }

    // Caracteres finais da palavra
    const lastChar = word[word.length - 1];
    const lastTwoChars = word.slice(-2);

    // Caso 1: A palavra termina com uma vogal
    if (frontVowels.includes(lastChar) || backVowels.includes(lastChar)) {
        const longVowel = toLongVowel(lastChar);
        if (isFrontVowel(lastChar)) {
            return word.slice(0, -1) + longVowel + "vel";
        } else {
            return word.slice(0, -1) + longVowel + "val";
        }
    }

    // Caso 2: A palavra termina com uma consoante ou dígrafo
    let modifiedWord = word;

    // Identificar e tratar dígrafos ('sz', 'zs', 'cs')
    if (["sz", "zs", "cs"].includes(lastTwoChars)) {
        // Duplicar o primeiro caractere do dígrafo no local correto
        const firstCharOfDigraph = lastTwoChars[0];
        modifiedWord = word.slice(0, -2) + firstCharOfDigraph + lastTwoChars;
    } else {
        // Duplicar a última consoante
        modifiedWord += lastChar;
    }

    // Identificar a última vogal da palavra original para harmonia vocálica
    const vowelsInWord = word
        .split("")
        .filter(
            (char) => frontVowels.includes(char) || backVowels.includes(char)
        );
    const lastVowel = vowelsInWord[vowelsInWord.length - 1];

    // Adicionar o sufixo correto com base na última vogal
    if (isFrontVowel(lastVowel)) {
        return modifiedWord + "el";
    } else {
        return modifiedWord + "al";
    }
}

// Testes
console.log(instrumental("fa")); // "fával"
console.log(instrumental("teve")); // "tevével"
console.log(instrumental("betű")); // "betűvel"
console.log(instrumental("ablak")); // "ablakkal"
console.log(instrumental("szék")); // "székkel"
console.log(instrumental("otthon")); // "otthonnal"
console.log(instrumental("kar")); // "karral"
console.log(instrumental("rács")); // "ráccsal"
console.log(instrumental("kosz")); // "kosszal"
console.log(instrumental("gonosz")); // "gonosszal"
console.log(instrumental("virág")); // "virággal"
