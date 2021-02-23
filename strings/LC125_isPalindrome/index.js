function isPalindrome(s) {
    s = s.replace(/[^0-9a-z]/gi, '').toLocaleLowerCase()
    let left = 0;
    let right = s.length - 1
    while (left < right) {
        if (s[left] !== s[right]) return false
        left++
        right--
    }
    return true
}


module.exports = isPalindrome;
