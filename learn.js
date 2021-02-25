// fibonaci 0(2^n)
// function fibo (n) {
//     if (n === undefined || n === null) return -1
//     if (n === 1 || n === 2) return 1
//     if (n > 2) return fibo(n - 1) + fibo(n - 2)
// }

// best with memoization aka caching
// function fibo (n, memo = {}) {
//     if (n in memo) return memo[n]
//      if (n <= 2) return 1
//      memo[n] = fibo(n - 1, memo) + fibo(n - 2, memo)
//      return memo[n]

// }
// console.log(fibo(100));

// starting point finish point

// function travel (m, n, memo = {}) {
//     const key = m + ',' + n
//     if (key in memo) return memo[key]
//     if (m === 1 && n === 1) return 1
//     if (m === 0 || n === 0) return 0
//     memo[key] = travel(m-1, n, memo) + travel(m, n-1, memo)
//     return memo[key];
// }
// console.log(travel(1, 1)); // 1
// console.log(travel(2, 3)); // 3
// console.log(travel(3, 2)); // 3
// console.log(travel(3, 3)); // 6
// console.log(travel(18, 18)); // mucho 


// function travel (m, n, memo = {}) {
//     const key = m + ',' + 'n'
//     if (key in memo) return memo[key]
//     // if (memo[m][n]) return memo[m][n] 
//     if (m === 1 && n === 1) return 1
//     if (m === 0 || n === 0) return 0
//     memo[key] = uniquePaths(m-1, n, memo) + uniquePaths(m, n-1, memo)
//     return memo[key];
// }

// TODO: bestSum(target, numbers) -> [x, y, ...] where x + y .. = target

// function bestSum(target, array) {
//     if (target === 0) return []
//     if (target < 0) return null

//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];
//         let sobra = target - element
//         let result = bestSum(sobra, array)
//         if (result )
        
//     }

// }

// TODO: wordBank(target, wordBank) -> [x, y, ...] where x + y .. = target . return boolean

// canConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])
// 
                        // abcdefg
                // abc              def
// 


/* function canConstruct(target, wordBank) {
    if (target === '') return true    
    for (let w of wordBank) {        
        let remaining = target.replace(w, '')
        if (canConstruct(remaining, wordBank) === true) return true
    }
    return false
} */

function canConstruct(target, wordBank) {
    if (target === '') return true    
    for (let w of wordBank) {        
        if (target.indexOf(w) === 0) {
            const suffix = target.slice(w.length)
            if (canConstruct(suffix, wordBank) === true) return true
        }
    }
    return false
}


// function canConstruct(target, wordBank) {
//     for (let w of wordBank) {        
//         console.log(w);
//     }
// }
console.log(canConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']))