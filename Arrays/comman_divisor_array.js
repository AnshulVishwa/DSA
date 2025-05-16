// We have given an array and we have to find the comman divisor between its smallest and largest value

let arr = [2,5,6,9,10]

function findSmallest_Greatest( arr ){
    let s = arr[0]
    let g = arr[0]
    arr.map( (v , i) => {
        s = Math.min(v , s);
        g = Math.max(v , g);
    } )
    return [s,g]
}

nums = findSmallest_Greatest(nums)

function find_comman_divisor( a , b ){
    if( b == 0 ) return a;
    return find_comman_divisor( b , a%b )
}

find_comman_divisor(nums[0] , nums[1])
