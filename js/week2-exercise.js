// Write a function list that joins words in an array into a list.
// // list(['Huey', 'Dewey', 'Louie']) should return 'Huey, Dewey and Louie'.
// //     The passed array contains at least two words.



function list(arr){
    if (arr.length===2){
        return arr.join(" and ")
    }


    return arr.slice(0,arr.length-1).join(", ")+" and "+arr[arr.length-1]

};

// Arrow function sum
// Calculate sum of grades by looping through the grades using an arrow function

const sumGrades = grades => {
    let total=0
    grades.forEach((grade)=>{
        total+=grade
    })
    return total
}
console.log(sumGrades);