var sortColors = function(nums) {
    let zeroCount = 0, oneCount = 0, twoCount = 0;

    nums.forEach(v => {
        if (v === 0) zeroCount++;
        else if (v === 1) oneCount++;
        else if (v === 2) twoCount++;
    });

    for (let i = 0; i < zeroCount; i++) {
        nums[i] = 0;
    }
    for (let i = zeroCount; i < zeroCount + oneCount; i++) {
        nums[i] = 1;
    }
    for (let i = zeroCount + oneCount; i < nums.length; i++) {
        nums[i] = 2;
    }
    return nums
};


console.log(sortColors([2,0,2,1,1,0]))
