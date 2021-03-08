function longestPalindrome(s) {
    // expanding from the center
    // check if it's even or odd
    let left = 0;
    let right = 0;
    if (s.length%2===0) {
        right--
    }
    let maximos = []
    for (let i = 0; i < s.length; i++) {
        left = i - 1
        right = i + 1
        while(left > 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++
        }
        maximos.push((right - left))
    }
    console.log(maximos);
    return Math.max(...maximos)
}

// module.exports = longestPalindrome;
console.log(longestPalindrome('baba'));