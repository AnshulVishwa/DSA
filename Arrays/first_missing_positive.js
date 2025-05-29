const First_Missing_Positive = ( nums ) => {
    if( nums.length == 0 ) return 1
    if( nums.length == 1 ) return (nums[0] == 1) ? 2 : 1
    const set = new Set(nums.filter( (v) => v > 0 ))
    
    let smallest = 1
    while(true){
        if( set.has(smallest) ) smallest++
        else break
    }
    return smallest
}
console.log(First_Missing_Positive([1,3,-2,4,0]))
