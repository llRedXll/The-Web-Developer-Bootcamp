// Little something something i decided to do as a little extra to see if i could use jquery to solve these function with a click() and prompt() function.

$(document).ready(function () {

// isEven function
    $("#isEven").click(function isEven(num) {
        var num = prompt("Enter a number to find out if it's even!");
        var answer = num % 2 === 0;
        alert(answer);
    });

// factorial function
    $("#factorial").click(function factorial(num) {
        var num = prompt("Enter a number to find out it's factorial");
        var result = 1;

        for (var i = 2; i <= num; i++) {
            result *= i;
        }
        alert(result);
    });

// kebabToSnake function
    $("#kebab").click(function kebabToSnake(str) {
        var str = prompt("Enter a string using kebab-case to convert it to snake-case!");
        var newStr = str.replace(/-/g , "_");
        alert(newStr);
    });

});