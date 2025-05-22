const checkPalindrome = ( x ) => {
    if( x < 0 ) return false
    let newNum = ""
    let ten = 1
    const num = x
    while( x != 0 ){
        const digit = x%10
        newNum += digit
        x = Math.floor(x/10)
        ten *= 10 
    }
    return num == newNum
}
console.log(checkPalindrome(1441))
