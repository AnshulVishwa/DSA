// Given an integer n, return the count of all numbers with unique digits, x, where 0 <= x < 10n.

const count_say = ( n ) => {
    if( n == 0 ) return 1
    let result = 9
    let digit = 9
    for( let i = 1 ; i < n ; i++ ){
        result *= digit--
    }
    return result
}

const find = (num) => {
    let result = 0;
    for( let i = 0 ; i <= num ; i++ ) result += count_say(i)
    return result
}

for( let i = 1 ; i < 10 ; i++ ){
    console.log(`Between 0 -> ${Math.pow(10 , i)}, Unique Counts are = ${find(i)}`)
}
