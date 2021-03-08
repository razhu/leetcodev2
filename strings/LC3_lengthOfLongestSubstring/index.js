// function lengthOfLongestSubstring(s) {
//     // using sliding window
//     let sw = {}
//     let left = 0;
//     let right = 0;
//     let maximos = [1]
//     for (let i = 1; i <= s.length; i++) {
//         const e = s[i];
//         if(sw[e]) { // existe en el sw
//             left++
//             maximos.push(right-left)
//         }
//         sw[e] = i
//         right++
//     }
//     return Math.max(...maximos)
// }

// module.exports = lengthOfLongestSubstring;
function lengthOfLongestSubstring(s) {
    // using sliding window
    let sw = {}
    let left = 0
    let maxLength = 0
    for (let i = 0; i < s.length; i++) {
        const e = s[i];
        if (sw[e] >= left) {
            left = sw[e] + 1
        }
        sw[e] = i
        maxLength = Math.max(maxLength, i - left + 1)
    }
    return maxLength
}

module.exports = lengthOfLongestSubstring;