function algo(target, wordBank) {
    // if (wordBank.indexOf(target) === -1) return []
    if (target === '') return [[]]
    let result = []
    for (let word of wordBank) {
        if (target.indexOf(word) === 0) {
            let difference = target.slice(word.length)
            let salida = algo(difference, wordBank)
            let final = salida.map(x => [word, ...x])
            result.push(...final)
        }
    }
    return result
}

console.log(algo('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd', 'ef', 'c']));