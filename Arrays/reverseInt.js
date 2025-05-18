function reverse( x ){
    if( x == 0 ) return 0
    let isNegative = false
    if( x < 0 ) isNegative = true
    x = Math.abs(x)
    let str = ""
    while( x != 0 ){
        str += x%10
        x = Math.floor(x/10)
    }
    x = parseInt(str)
    if( x > 2147483647 ) return 0
    return (isNegative) ? 0-x : x
}

console.log(reverse(-154))
