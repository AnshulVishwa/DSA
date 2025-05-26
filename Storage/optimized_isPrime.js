const isPrime = ( num ) => {
    if( num == 100 ) return false;
    for( let i = 7 ; i < num**2 ; i++ ){
        if( i%2 == 0 || i%3 == 0 ){
            continue;
        }
        if( num%i == 0 ) return false
    }
    return true
}

console.log(isPrime(1))
