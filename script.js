const displayLines = document.querySelector(".display-lines");
const button = document.querySelector("button");
const reset = document.getElementById("reset");

//generates random number between 0 and 60.
const randomNumber = () => {
    return Math.floor(Math.random()*60);
}

//displays generated lotto lines/
const createLottoLines = () => {
    const h3 = document.createElement("h3"); //create h3 element.
    h3.appendChild(document.createTextNode(numArray.join("  ")));
    displayLines.appendChild(h3);
}


//empty array 'numArray' is filled with 6 random numbers.
//The 'lottoGenerator' function below 'numArray':
// 1) checks that the number isn't 0, adds '1' to list instead.
// 2) checks that the array doesn't already contain the number (to avoid duplicates).
// 3) sorts array to ascending order.
// 4) invokes the 'createlottoLines' function.
// 5) empties the array after the lines are displayed.

let numArray = [];

const lottoGenerator = () => {
    
    while(numArray.length < 6) {
        let num = randomNumber()
        if (num === 0){
            num = 1;
        } else if (!numArray.includes(num)) {
        numArray.push(num);
        }
    }
    numArray.sort((a,b) => a-b);
    createLottoLines();
    numArray = [];
}


// this function clears all the lines.
const resetLines = () => {
    while (displayLines.hasChildNodes()) {
    displayLines.removeChild(displayLines.firstChild);
    }
}


button.addEventListener('click',lottoGenerator);
reset.addEventListener('click', resetLines);




