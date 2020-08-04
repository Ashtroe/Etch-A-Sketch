let square = document.querySelectorAll('#square')
let clearButton = document.querySelector("#clear-btn")
let container = document.querySelector('.square-container')
let numInput = prompt("# of squares per side?")

// Resetting canvas


// function clearGrid() {
//   numsSquares = prompt("# of squares per side?")
//   console.log(numsSquares + " squares");
// }
// for (i=0; i < square.length; i++){
// square[i].style.backgroundColor = "white";
// }
// clearButton.addEventListener("click", clearGrid)


// Create Grid
function addDiv() {
  let div = document.createElement('div')
  div.id = 'square'

  container.appendChild(div)
}

let numSquares = numInput
var i;
for (i = 0; i < (numSquares * numSquares) ; i++){
  addDiv()
}






function colorChange(){
  for (i=0; i < square.length; i++){
    square[i].addEventListener("mouseenter", function(e){
      e.target.style.backgroundColor = 'black'
    })
  }
}


colorChange()
