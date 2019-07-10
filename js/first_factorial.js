

var dataPoint = Number(prompt("Please Enter a number"));

function firstFactorial(num) {

    var factorial = 1;

    for (var i = 1; i <= num; i++) {

        factorial = factorial * i;
    }

    return factorial;

}

console.log(firstFactorial(dataPoint));