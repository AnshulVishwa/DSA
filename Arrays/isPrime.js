const num = [2,5,6,9,10];

const isPrime = (num) => {
    if( num <= 1 ) return false;
    for( let i = 2 ; i <= Math.sqrt(num) ; i++ ){
        if( num % i == 0 ) return false
    }
    return true
}

num.forEach( (each) => {
    console.log(isPrime(each))
} )
