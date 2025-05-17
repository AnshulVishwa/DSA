function PrimeArray( num1 , num2 , indices ){
    let flag = [ true , true ]
    if( num1 <= 1 ) flag[0] = false
    if( num2 <= 1 ) flag[1] = false
    for( let i = 2 ; i <= Math.sqrt(num1) && flag[0] ; i++ ){
        if( num1 % i == 0 ) {
            flag[0] = false;
            break;
        }
    }
    for( let i = 2 ; i <= Math.sqrt(num2) && flag[1] ; i++ ){
        if( num2 % i == 0 ) {
            flag[1] = false;
            break;
        }
    }
    flag.map( (v) => {(v) ? indices.push() : ""} )
}
