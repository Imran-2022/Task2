
// part2 solved: - 

// Function name => rotateLeft
// Parameters => 
// Array of any length 
// Number (integer)

function rotateLeft(arr, rotation) {

    let rotatedArray = arr.concat();

    for (let i = 0; i < rotation; i++) {

        const FI = rotatedArray.shift();

        rotatedArray.push(FI);

    }

    return rotatedArray;

}

const result = rotateLeft([1, 2, 3, 4, 5], 4)

console.log(result);


// Sample input => rotateLeft([1, 2, 3, 4, 5], 4 )
// Sample output =>  [5, 1, 2, 3, 4]

