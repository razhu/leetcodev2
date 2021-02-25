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

/* function canConstruct(target, wordBank, memo = {}) {
    if (target in memo) return memo[target]
    if (target === '') return true    
    for (let w of wordBank) {        
        if (target.indexOf(w) === 0) {
            const suffix = target.slice(w.length)
            if (canConstruct(suffix, wordBank, memo) === true) {
                memo[target] = true
                return true
            }
        }
    }
    memo[target] = false 
    return memo[target]
}


// function canConstruct(target, wordBank) {
//     for (let w of wordBank) {        
//         console.log(w);
//     }
// }
console.log(canConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']))
console.log(canConstruct('abcdefjajajjaajjjjjjjabc', ['ab', 'abc', 'cd', 'def', 'abcd', 'j']))
console.log(canConstruct('aaaaaaaaaaaaaaaaabbbbbbbbbbbb', ['ab', 'abc', 'cd', 'def', 'abcd', 'a']))
console.log(canConstruct('eeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeee', 'eeeeeeee', 'f'])) */


function climbStairs (n, memo = {}) {
    if (n in memo) return memo[n]
    if (n === 0) return 0
    if (n === 1) return 1
    if (n === 2) return 2
    for (let i = 1; i <= n; i++) {
       memo[n] = climbStairs(n-1, memo) + climbStairs(n-2, memo)
    }
    return memo[n]
}

console.log(climbStairs(2));
console.log(climbStairs(3));
console.log(climbStairs(11));

/* 
let climbStairs = function(n) {
    let countingFunc = function(stairsRemaining, savedResults) {
      if (stairsRemaining < 0) {
        return 0;
      }

      if (stairsRemaining === 0) {
        return 1;
      }

      if (savedResults[stairsRemaining]) {
        return savedResults[stairsRemaining];
      }

      savedResults[stairsRemaining] = countingFunc(stairsRemaining - 1, savedResults) + countingFunc(stairsRemaining - 2, savedResults);

      return savedResults[stairsRemaining];
    };

    return countingFunc(n, {});
};
 */