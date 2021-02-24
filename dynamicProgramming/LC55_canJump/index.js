function canJump(nums) {
    // let dpArray = []
    // nums.map(e => dpArray.push(false))
    // dpArray[0] = true
    // let left = 0
    // let right = 1
    // while (left < right) {
    //     if (nums[dpArray[left] !== nums[right]]) return false
    //     left = nums[left]
    //     right = nums[left]
    // }
    // return true
let dpArr = nums.map(n => false)
dpArr[0] = true

for (let i = 1; i < nums.length; i++) { // will loop to update dpArr
    for (let j = 0; j < i; j++) {
        if (nums[j] && j + nums[j] >= i) {
            dpArr[i] = true
            break
        }
    }
    }
    return dpArr[dpArr.length - 1]
}

// console.log(canJump([1, 2, 3]));
module.exports = canJump;
