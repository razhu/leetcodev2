function isPalindrome(s) {
    let t = s.replace(/[^0-9a-z]/gi, '').toLocaleLowerCase()
    return t.split('').reverse().join('') === t
}


module.exports = isPalindrome;
