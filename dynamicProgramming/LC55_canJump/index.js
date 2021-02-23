function canJump(nums) {
    let dpArray = []
    nums.map(e => dpArray.push(false))
    dpArray[0] = true
    let left = 0
    let right = 1
    while (left < right) {
        if (nums[dpArray[left] !== nums[right]]) return false
        left = nums[left]
        right = nums[left]
    }
    return true
}

// console.log(canJump([1, 2, 3]));
module.exports = canJump;
