const countDigits = (num) => {
    if( num < 0 ) num = 0-num
    return Math.floor( Math.log10(num)+1 )
}
console.log(countDigits(-54256))
