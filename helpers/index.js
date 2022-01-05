const hasRepetition = (string) => {
    let count = 0;
    const patterns = ["AAAA", "TTTT", "GGGG", "CCCC"];
    patterns.forEach( element => {
        if ( string.includes(element) === true ) {
            count++;
        }
    } )
    return count;
}

const repeatedDiagonal = (dnaArray, bottomToTop) => {
    //return "hello";
    var Ylength = dnaArray.length;
    var Xlength = dnaArray[0].length;
    var maxLength = Math.max(Xlength, Ylength);
    var temp;
    var returnArray = [];
    for (var k = 0; k <= 2 * (maxLength - 1); ++k) {
        temp = [];
        for (var y = Ylength - 1; y >= 0; --y) {
            var x = k - (bottomToTop ? Ylength - y : y);
            if (x >= 0 && x < Xlength) {
                temp.push(dnaArray[y][x]);
            }
        }
        if(temp.length > 0) {
            returnArray.push(temp.join(''));
        }
    }

    let repeatedCount = 0

    returnArray.forEach( element => {
        if ( hasRepetition(element) === true ) {
            repeatedCount++;
        }
    });

    return repeatedCount;
}

const repeatedHorizontal = (dnaArray) => {
    let repeatedCount = 0;

    // Get rows
    dnaArray.forEach( element => {
        if ( hasRepetition(element) == true ) {
            repeatedCount++
        }
    } );

    return repeatedCount;

}

const repeatedVertical = (dnaArray) => {
    let repeatedCount = 0;
    let transposed = [];
    let joined = [];

    for ( let i = 0; i < dnaArray.length; i++ ) {
        transposed.push([])
        for ( let j = 0; j < dnaArray.length; j++ ) {
            transposed[i].push( dnaArray[j][i] )
        }
    }

    transposed.forEach( element => {
        joined.push(element.join(''))
    })

    joined.forEach( element => {
        if ( hasRepetition(element) == true ) {
            repeatedCount++
        }
    })

    return repeatedCount
}

const hasMutation = (dnaArray) => {

    const repetitions = repeatedHorizontal(dnaArray) + repeatedVertical(dnaArray) + repeatedDiagonal(dnaArray)

    /*
    return {
        "repetitions": repetitions,
        "result": repetitions >= 2 ? "mutated" : "non-mutated",
    }*/

    if ( repetitions >= 2 ) {
        return true;
    }

    return false;
    
}

exports.hasMutation = hasMutation;