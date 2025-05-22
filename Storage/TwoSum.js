// Leetcode Question 1
// Level - Easy

const find_sum = ( arr , target ) => {
    const map = new Map()
    for( let i = 0 ; i < arr.length ; i++ ){
        const left_over_part = target-arr[i]
        if( map.has(left_over_part) ){
            return [ map.get(left_over_part) , i ]
        }
        map.set(arr[i] , i)
    }
    return [ -1 , -1 ]
}

const nums = [2,7,11,15]
const target = 9
console.log(find_sum(nums , target))
