// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

function groupAnagrams(strs) {
    let sw = {}
    for (let i = 0; i < strs.length; i++) {
        const value = strs[i];
        const ordered = value.split('').sort().join('')
        if (!sw[ordered]) {
            sw[ordered] = []
        }
        sw[ordered].push(value)
        
    }
    return Object.values(sw);
}

module.exports = groupAnagrams;


s.split('').reverse().join('')