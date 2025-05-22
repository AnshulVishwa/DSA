const convertStringToInteger = ( str ) => {
    str = str.trim()
    if( isNaN(str.charAt(0)) && (str.charAt(0) != '-' || str.charAt(0) != '+' ) ) return 0
    let numbers = str.match(/-?\d+/g)[0]
    return parseInt(numbers)
}

console.log(convertStringToInteger("-14623"))
