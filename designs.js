// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

//setting the variables that will be used in the code
var canvas = document.querySelector('#pixelCanvas');
var height = document.querySelector('#inputHeight').value;
var width = document.querySelector('#inputWidth').value;
const types = document.querySelectorAll('input'); //Getting HTML collections with the tags that has 'input'
const submitButton = types[2]; // The submit button is associated with the 3rd entry of the collection
submitButton.addEventListener('click', function(event){ event.preventDefault()}); //adding an event listener to prevent the page from loading itself once the submit button is clicked
submitButton.setAttribute('onclick', 'makeGrid()'); // adding 'onclick' attribute so we can associate it with a function once clicekd
types[3].setAttribute('value', '#252525') // adding the 'value' attribute so we can access color. Also, putting a placeholder color
var color = types[3].value; //getting the value for the current color

function makeGrid() {

    function respondToTheClick(evt) {
        //this function re-assign the color to match the one that was chosen and color each clicked cell
        color = types[3].value; 
        evt.target.style.backgroundColor = color;
    }

    function createGrid(){
        //this function create the grid by adding rows then appending cells to them
        for(var i = 0; i < height; i++){
            var grid = document.createElement('tr');
            for(var j = 0; j < width; j++){
                grid.appendChild(document.createElement('td')).addEventListener('click', respondToTheClick);
            }
        canvas.appendChild(grid);
        }
    }

    height = document.querySelector('#inputHeight').value;
    width = document.querySelector('#inputWidth').value;
    if(!canvas.hasChildNodes()){ //checks if the pixel canvas doesn't have child nodes. In case it doesn't a new one will be formed
        createGrid();
    } else{ //if there's a grid then the canvas will be removed and a new empty one will be made to replace the old one
        canvas.remove();
        canvas = document.createElement('table');
        canvas.setAttribute('id', 'pixelCanvas')
        createGrid();
        document.body.appendChild(canvas);
    }
}
