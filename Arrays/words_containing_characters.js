const findWordsContaining = function(words, x) {
    let indices = []
    for( let i = 0 ; i< words.length ; i++ ){
        if( words[i].includes(x) ) indices.push(i)
    }
    return indices
};

findWordsContaining( ["leet" , "code" , "uuii"] , "e" )
