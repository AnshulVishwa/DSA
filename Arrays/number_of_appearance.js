function count_the_appearance( nums , val ){
    let k = 0;
    for( let i = 0 ; i < nums.length ; i++ ){
        if( nums[i] !== val ){
            nums[k++] = nums[i]
        }
    }
    return k
}

console.log( count_the_appearance([ 0,1,1,2,0,1,2,0,1,0 ] , 0) )
