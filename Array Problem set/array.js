// printReverse()

function printReverse(arr) {
    for (i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i]);
    }
}
///////////////////////////////////////////////////////

//isUniform()

function isUniform(arr) {
    let first = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== first) {
            return false;
        }
    }
    return true;
}
///////////////////////////////////////////////////////

// sumArray()

function sumArray(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}
// *** Colts Solution *** 
// *** Using forEach() ***
// function sumArray(arr) {
//     let total = 0;
//     arr.forEach(function (el) {
//         total += el;
//     });
//     return total;
// }
///////////////////////////////////////////////////////

// max()

function max(arr) {
    let top = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > top) {
            top = arr[i];
        }
    }
    return top;
}