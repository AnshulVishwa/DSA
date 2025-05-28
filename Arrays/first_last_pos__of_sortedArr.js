function binarySearch(nums , target){
    return ( left = 0 , right = nums.length-1 ) => {
        if( left > right ) return -1
        let mid = Math.floor((right+left)/2)
        if( nums[mid] == target ) return mid
        if( nums[mid] > target ) return binarySearch(nums,target)(left,mid-1)
        if( nums[mid] < target ) return binarySearch(nums,target)(mid+1,right)
    }
}   

function findPosition( nums , target ){
    let i = binarySearch(nums,target)()
    let j = i

    if( i == -1 ) return [-1 , -1]

    let first = i
    let flag = true
    while( flag ){
        flag = false
        if( nums[i-1] == nums[first]  ){
            flag = true
            first = --i
        }
    }

    let last = j
    flag = true
    while( flag ){
        flag = false
        if( nums[j+1] == nums[last]  ){
            flag = true
            last = ++j
        }
    }
    return [ i , j ]
}
const nums = [5,7,7,8,8,10]
console.log(findPosition(nums,8));

