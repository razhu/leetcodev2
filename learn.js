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

/////////////// can
// canSum(target, Array) -> boolean
// canSum(7, [3, 4, 2]) -> true

function canSum(target, arr) {
    let mem = {}
    if (arr.indexOf(target) !== -1) return true
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (element in mem) 
    }

}