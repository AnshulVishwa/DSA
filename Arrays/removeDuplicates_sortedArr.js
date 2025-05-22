function removeDuplicate( nums ) {
    let set = new Set(nums)
    let i = 0;
    for( let n of set ) nums[i++] = n
    return set.size
}

console.log(removeDuplicate([1,1,2]))
