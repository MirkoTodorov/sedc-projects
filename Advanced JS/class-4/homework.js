/*
    1. You know how old your dog is in human years, but what about dog years? Calculate it!

    Write a function named calculateDogAge that:
    takes 1 argument: your puppy's age.
    calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
    outputs the result to the screen like so: "Your doggie is NN years old in dog years!"
    Call the function three times with different sets of values.
    Bonus: Add an additional argument to the function that takes the conversion rate of human to dog years.
*/

function calculateDogAge(puppyAge, conversion){
    return `Your doggie is ${puppyAge*conversion} years old in dog years`;
}

calculateDogAge(24, 7);
calculateDogAge(10, 7);
calculateDogAge(12, 7);

/*
    2. Write a function that will reverse a string as output (any string), using recursion
    e.g. Hello -> olleH
*/

function reverseString(str, y=''){
    console.log(str, y);
    y += str.charAt(str.length-1);

    return str === '' ? y : reverseString(str.slice(0, str.length-1), y);
}

//Copied from net
// function reverseString (str) {
//     if (str === "") {
//         return "";
//     } else {
//         return reverse(str.substr(1)) + str.charAt(0);
//     }
// }

reverseString('Hello');
reverseString("Kaj si be Pero be?");
reverseString("Braaaaaat 78678 Be");

/*
    3. Write a function that will take two arguments. First argument should be a sentence, second one should be one word.
    Return how many times the word had appeared in that sentence.
    e.g appearance('This was a hot summer, and a very dry one', 'a') -> should return that 'a' was present 2 times.
*/

function appearance(str, char, counter = 0){
    if(str.charAt(0) === char)
        counter++;
    console.log(str, counter);
    return str === "" ? `The char ${char} appears ${counter} times in the sentence` : appearance(str.substr(1), char, counter);
}

appearance('This was a hot summer, and a very dry one', 'a');
appearance('This was a hot summer, and a very dry one', 'e');
appearance('This was a hot summer, and a very dry one', 'z');

/*
    4. Write a function that will print table using Javascript, the table should have 5 columns and 10 rows.
*/

function printRows(){
    let table = document.createElement('table');
    
    for(let i = 0; i < 10; i++){
        let tr = document.createElement('tr');
        for(let j = 0; j < 5; j++){
            let td = document.createElement('td');
            td.style.border = '1px solid black';
            td.style.width = '20px';
            td.style.height = '20px';
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    document.body.appendChild(table);
}