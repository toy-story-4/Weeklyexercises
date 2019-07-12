var countLetters = prompt("Enter a string");
while(countLetters.length === 0){
    countLetters = prompt("Please enter something")
}
alert(countLetters + " has " + countLetters.length + " total characters");


var theNoun = prompt("Enter a noun");
var theVerb = prompt("Enter a verb");
var theAdverb = prompt("Enter an Adverb");

alert("I saw you " + theVerb + " the " +  theNoun + " " + theAdverb + " last night!")