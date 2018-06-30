//found about this style of declaring jQery in w3schools.com
let canvas = document.getElementById("pixelCanvas");
let height = document.getElementById("input_height");
let width = document.getElementById("input_width");
let sizePicker = document.getElementById("sizePicker");
let color = document.getElementById("colorPicker");

// Select color input
color.addEventListener("click", function(){});

// Select size input
sizePicker.onsubmit = function(event){
    event.preventDefault();
    clearGrid();
    makeGrid();
};

// When size is submitted by the user, call makeGrid()
function makeGrid() {
    for (let x=0; x<height.value; x++){
        const row = canvas.insertRow(x);
        for (let y=0; y<width.value; y++){
            const cell = row.insertCell(y);
            cell.addEventListener("click", fillSquare);
        }
    }
}

function clearGrid(){
    while (canvas.firstChild){
         canvas.removeChild(canvas.firstChild);
    }
}

function fillSquare () {
    this.setAttribute("style", `background-color: ${color.value}`);
}
