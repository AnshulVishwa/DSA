const divisibilityCheck = (num) => {
    const map = new Map();
    let count = 0;
    let ten = 1;

    while (Math.floor(num / ten) != 0) {
        let newNum = Math.floor(num / ten);
        let digit = newNum % 10;

        if (digit === 0) {
            ten *= 10;
            continue;
        }

        if (map.has(digit)) {
            if (map.get(digit) === true) count++;
            ten *= 10;
            continue;
        }

        if (num % digit === 0) {
            map.set(digit, true);
            count++;
        } else {
            map.set(digit, false);
        }

        ten *= 10;
    }

    console.log(num, "divisible digits count:", count);
    console.log("Map:", map);
    return count
};

divisibilityCheck( 246825 )
