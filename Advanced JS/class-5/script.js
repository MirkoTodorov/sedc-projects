/*
    #1 Create a function that will print a clock on the screen and update with correct time.
 */

 function clock(){
     let h1 = document.getElementsByTagName('h1')[1];
     var date = new Date();
    //  console.log(date, date.getHours(), date.getMinutes(), date.getSeconds());
     h1.innerHTML = `${date.getHours() < 10 ? `0${date.getHours()}` : date.getHours()} : ${date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()} : ${date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds()}`;
     
     window.requestAnimationFrame(clock);
 }
 window.requestAnimationFrame(clock);

 /* 
    #2 Create a function that returns function which accept array of words. As result it should return array with numbers
    where each number tells how many characters had each word of the array.
 */


 function countCharsOfArrayElements(arrayStrings){
     let arrayInts = [];
     arrayStrings.map((arr) => {
        // console.log(arr);
        arrayInts.push(arr.length);
     });
    //  console.log(arrayInts);
     return arrayInts;
 }

 countCharsOfArrayElements(['Trajko', 'bratot', 'Kakva legendaaqaaa beee', 'car', '', '1']);
