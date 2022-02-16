//Lev2_2
console.log('%cLev2_2', 'Color:darkred; font-weight:900');

let number = document.getElementById('inputValue');
let out = document.getElementById('out');


function loopMe() {
    let z = ''
    let num = Number(number.value);
    console.log(num);
    for (i = 1; i <= num; i++) {
        z += 'o';
        console.log('L' + z + 'p');
    }
    out.innerHTML = `<h2>L${z}p</h2>`;
}

//Lev2_1
console.log('%cLev2_1', 'Color:darkred; font-weight:900');

function imageArray() {
    let returnArray = [];
    for (i = 1; i <= 100; i++) {
        if (i <= 10) {
            returnArray.push('image_00' + i + '.jpg');
        } else if (i < 100) {
            returnArray.push('image_0' + i + '.jpg');
        } else {
            returnArray.push('image_' + i + '.jpg');
        }
    }
    console.log(returnArray);
}
imageArray();