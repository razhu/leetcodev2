function isValid(s) {
    // method to use: stack
    let respuesta = false
    const simbolos = {
        '{': '}',
        '[': ']',
        '(': ')',
    }
    let miStack = []
    for (let i = 0; i < s.length; i++) {
        const e = s[i];
        if (!simbolos[e]) { // no existe
            if (simbolos[e] === e) {
                return false
            }
        }
        
    }

    return true
}

module.exports = isValid;
