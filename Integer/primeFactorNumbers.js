const primeFactorNumbers = ( num ) => {
    let result = []
    while( num%2 == 0 ){
        result.push(2)
        num /= 2
    }
    while( num%3 == 0 ){
        result.push(2)
        num /= 3
    }
    let i = 5
    while( i*i <= num ){
        while( num%i == 0 ){
            result.push(i)
            num /= i
        }
        while( num%(i+2) == 0 ){
            result.push((i+2))
            num /= (i+2)
        }
        i = i+6
    }
    return result
}

console.log(primeFactorNumbers( 50 ))
