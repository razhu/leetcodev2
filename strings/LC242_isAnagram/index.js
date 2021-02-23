function isAnagram(s, t) {
    if (s.length !== t.length) return false
    let sw = {}
    for (let i = 0; i < s.length; i++) {
        const e = s[i];
        sw[e] = sw[e] + 1 || 1
    }
    for (let j = 0; j < t.length; j++) {
        const e2 = t[j];
        if (!sw[e2]) {
            return false
        } else {
            sw[e2]--
        }
    }
    return true
}

module.exports = isAnagram;
