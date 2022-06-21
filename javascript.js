//set variables to manipulate DOM
const canvas = document.getElementById('canvas');
const div = document.createElement('div');
let color = 'black'


makeCanvas = () => {
    for(let i =0; i < 256; i++) {
        const div = document.createElement('div')
        div.classList.add('grid-item');
        div.addEventListener('mouseover', function(e) {
            e.target.style.backgroundColor = color;
        })
        canvas.appendChild(div)
    }
}

function randomColor() {
    var letters = '123456789ABCDEF';
    let newColor = '#';
    for(var i = 0; i < 6; i++) {
        newColor+= letters[Math.floor(Math.random() * 16)];
    }
    color = newColor
    return color
}

function reset() {
    const cell = document.querySelectorAll('.grid-item');
    cell.forEach(cell => cell.style.backgroundColor = 'white')
}

function removeNodes(canvas) {
    //remove old grid size
    while(canvas.firstChild) {
        canvas.removeChild(canvas.firstChild);
    }
}

const slider = document.querySelector('#slider');
slider.addEventListener('input', function() {
    let val = document.getElementById('slider').value;

    removeNodes(canvas);

    canvas.setAttribute('style', `grid-template-columns: repeat(${val}, 2fr); grid-template-rows: repeat(${val}, 2fr);`)
    for(let i =0; i < (val*val); i++) {
        const div = document.createElement('div')
        div.classList.add('grid-item');
        div.addEventListener('mouseover', function(e) {
            e.target.style.backgroundColor = color;
        })
        canvas.appendChild(div)
    }
})



function changeCanvas() {
    val = prompt('How many sides?')
    
    removeNodes(canvas);

    //change grid via css using user vlaues
    canvas.setAttribute('style', `grid-template-columns: repeat(${val}, 2fr); grid-template-rows: repeat(${val}, 2fr);`)
    for(let i =0; i < (val*val); i++) {
        const div = document.createElement('div')
        div.classList.add('grid-item');
        div.addEventListener('mouseover', function(e) {
            e.target.style.backgroundColor = color;
        })
        canvas.appendChild(div)
    }

}

makeCanvas()