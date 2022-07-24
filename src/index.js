const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    ' ': ' ',
};

function decode(expr) {
    
    const arrOfTens = expr.match(/.{1,10}/g);

    let arrOfMorse = arrOfTens.map(makeMorse)

    let arrOfLetters = arrOfMorse.map(makeLetter)

    function makeMorse (elem) {
        const initStr = elem.replace(/00/g, '');
        const strWithoutStars = initStr.replaceAll('**********', ' ');
        const morseStr1 = strWithoutStars.replace(/10/g, '.');
        const morseStr2 = morseStr1.replace(/11/g, '-');
        return morseStr2
    }

    function makeLetter (elem) {
        return MORSE_TABLE[elem]
    }

    return arrOfLetters.join('')
}

module.exports = {
    decode
}
