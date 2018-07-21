// isEven - Write a function which takes a single numeric argument and returns true if the number is even, and false otherwise.

function isEven(x) {

    return x % 2 === 0;

    // OLD SOLUTION (LONGER WAY TO DO IT)
    // if (x % 2 === 0) { 
    //     return true;
    // } else {
    //     return false;
    // }
}

// factorial() - Write a function which takes a sngle numeric argument and returns the factorial of tha number.

function factorial(x) {

    var value = x;
    var total = x;

    while (--value) { // use value for decrement and checking
        total *= value; // multiply with value and assign to value
    }

    console.log(x + '! = ' + total);
    return total;
}
///////////////// Colts Solution /////////////////////

// function factorial(num){
//     //define a result variable
//     var result = 1;
//     //calculate factorial and store value in result
//     for(var i = 2; i <= num; i++){
//         result *= i;
//     }
//     //return the result variable
//     return result;
//   }

// kebabToSnake() - Write a function which takes a single kebab-cased string argument and retuns the snake_cased version.
function kebabToSnake(str) {
    var newStr = str.replace(/-/g, "_");
    return newStr;
}