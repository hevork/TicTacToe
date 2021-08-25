'use strict'
let playground = document.getElementById('playground')
let pixel = document.querySelectorAll('.pixel')
let row = document.querySelector('.row')
let button = document.querySelector('button')

button.addEventListener('click', function () {
    for (let i = 0; i < pixel.length; i++) {
        pixel[i].innerHTML = "";
        pixel[i].classList.remove('red');
        document.location.reload();
    }
})
let step = 0;

let currentStep = true;
for (let i = 0; i < pixel.length; i++) {
    pixel[i].addEventListener('click', function (event) {

        if (currentStep && !pixel[i].innerHTML) {

            pixel[i].innerHTML = "X";
            currentStep = false;
            ++step;
        } else if (currentStep === false && !pixel[i].innerHTML) {
            pixel[i].innerHTML = "O"
            currentStep = true;
            ++step;
        }
        win()
    })
}


function win() {
    let comb = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let i = 0; i < comb.length; i++) {
        let winX = pixel[comb[i][0]].innerHTML === "X" &&
            pixel[comb[i][1]].innerHTML === "X" &&
            pixel[comb[i][2]].innerHTML === "X";
        let winO = pixel[comb[i][0]].innerHTML === "O" &&
            pixel[comb[i][1]].innerHTML === "O" &&
            pixel[comb[i][2]].innerHTML === "O";
        if (winX) {
            console.log('111')
            pixel[comb[i][0]].classList.add('red');
            pixel[comb[i][1]].classList.add('red');
            pixel[comb[i][2]].classList.add('red');

            currentStep = null;
        } else if (winO) {
            console.log('0000')
            pixel[comb[i][0]].classList.add('red');
            pixel[comb[i][1]].classList.add('red');
            pixel[comb[i][2]].classList.add('red');
            currentStep = null;
        } else if ((step === 9) && (currentStep !== null) && !(winO) && !(winX)) {
             /*  console.log( step === 9 )
               console.log( currentStep !== null )
               console.log( !winO )
                console.log(!winX)
               console.log( winO )
                console.log(winX)*/
            for (let i = 0; i < pixel.length; i++) {
                pixel[i].classList.add('red2');
            }
        }

    }

}