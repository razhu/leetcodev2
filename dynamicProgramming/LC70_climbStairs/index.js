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

module.exports = climbStairs;
