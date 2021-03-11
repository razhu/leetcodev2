// aaabcccdeeef -> b
let encontrador = (s) => {
    let sw = {}
    for (let i = 0; i < s.length; i++) {
        if (sw[s[i]]) {
            sw[s[i]] += sw[s[i]]
        } else {
            sw[s[i]] = 1
        }
    }
    // return sw
    let sd = Object.keys(sw)
    for (let j = 0; j < sd.length; j++) {
        if (sw[sd[j]] === 1) return sd[j]
    }
    return '-'
}

console.log(encontrador('abacabad'));