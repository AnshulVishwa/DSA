const checkDivisibilityCount = (num) => {
    const map = new Map()
    const str = num.toString()
    let count = 0;
    for( let i = 0 ; i < str.length ; i++ ){
        if( str[i] == 0 ) continue
        if( map.has(str[i]) ){
            if( map.get(str[i]) ) count++
            continue
        }
        if( num%str[i] == 0 ) { count++; map.set(str[i] , true) }
        else { map.set( str[i] , false ) }
    }
    return count
}

console.log(checkDivisibilityCount(121))
