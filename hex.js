const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
//#f15025
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click', function () {
    let hexColor = "#";
    //need to run a loop 6 times, and each time the loop runs, will get a random # value from the array that'll add to the hex value #
    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()];
        //need += so you'll generate a string consisting of the '#' hashtag and 6 values from the hex array
    }
    //stop the loop before i = 6; i will run from 0-5 (6 times) and increment by 1 (i++) 
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
});

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}



