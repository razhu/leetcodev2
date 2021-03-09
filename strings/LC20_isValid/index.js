function isValid(s) {
    // method to use: miStack
    if (s.length % 2 === 1) return false
    const simbolos = {
        '{': '}',
        '[': ']',
        '(': ')',
    }
    let miStack = []
    for (let i = 0; i < s.length; i++) {
        const e = s[i];
        if (simbolos[e]) { // no existe
            miStack.push(e)
        } else {
            if (simbolos[miStack[miStack.length - 1]] === e) {
                miStack.pop()
            } else {
                return false
            }
        }
    }
    return s.length === miStack.length || miStack.length !== 0 ? false : true
}

console.log(isValid("[[[]"));

// module.exports = isValid;
