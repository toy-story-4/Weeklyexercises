(function() {
    "use strict";
/*Write a function, filterNumbers() that takes in an array of mixed data types and returns an array of only the numbers type in ascencding order.

Example input: ["fred", true, 5, 3] Example output: [3, 5]*/
    var mix = ["fred", true, 5, 3];

    function filterNumbers(arr){
        var output = [];
        for(var i = 0; i < arr.length; i += 1){
            if(typeof arr[i] === "number") {
                output.push(arr[i]);
            }
        }
        output.sort();

        return output;
    }

    console.log(filterNumbers(mix));

/*Write a function, getOlder() that takes in array of dog objects and increases the value of each object's age property by 1.*/
    var dogs = [
        {
            name: "Chompers",
            breed: "Pug",
            age: 7
        },
        {
            name: "Freddy",
            breed: "Lab",
            age: 4
        },
        {
            name: "Mr. Pig",
            breed: "Mastif",
            age: 10
        }
    ];

    function getOlder(arr){
        arr.forEach(function(dogs){
            dogs.age += 1;
        });
    }
    console.log(dogs);
    getOlder(dogs);
    console.log(dogs);

    //from JS Hero
    /*Write a function addWithSurcharge that adds two amounts with surcharge. For each amount less than or equal to 10, the surcharge is 1. For each amount greater than 10 and less than or equal to 20, the surcharge is 2. For each amount greater than 20, the surcharge is 3. The call addWithSurcharge(10, 30) should return 44.*/
    function addWithSurcharge(a, b){
        var arr = [a,b];
        var aggregator = 0;
        arr.forEach(function(num){
            aggregator += num;
            if ( num > 20) {
                aggregator += 3
            } else if (num <= 20 && num > 10){
                aggregator += 2
            } else if (num <= 10) {
                aggregator += 1;
            }
        });
        return aggregator;
    }



})();