// Global Variables
const myBoxes = document.getElementsByClassName('box');
const theBoxes = document.getElementsByClassName('box2')
const Boxes = document.getElementsByClassName('box3')
const teller1 = document.getElementById('colors')
const teller2 = document.getElementById('numbers')
const teller3 = document.getElementById('numbers2')

// The Functionality
function loopThrough() {

  const changeColor = () => this.classList.toggle('new-color');

  for(let i = 0; i < this.textContent.length * 2; i++) {
    setTimeout(changeColor, i * 1000);
  };

};

// The Event Listener
for (let i = 0; i < myBoxes.length; i++) {
  myBoxes[i].addEventListener('click', loopThrough);
};

setTimeout(function(){
    teller1.style.display = 'none';
}, 14000);

setTimeout(function(){
    teller2.style.display = 'block';
}, 14000);


// Second function for loop based on number chosen.
function loop2() {

  const changeColor2 = () => this.classList.toggle('new-color');

  for(let i = 0; i < Number(this.textContent) * 2; i++) {
    setTimeout(changeColor2, i * 1000);
  };
};

// Event listener for second loop
for (let i = 0; i < theBoxes.length; i++) {
  theBoxes[i].addEventListener('click', loop2);
};

//Change second fortune teller to third

function changeLayer() {

	const currentLayer = this.parentElement[1];			// Determine current layer
	const nextLayer = currentLayer.nextElementSibling;	// Determine next layer to show
	let count;											// Set empty count variable

	// Add hide class to current layer and remove from next layer
	const swap = () => {
		teller2.css("none");
		teller3.css("block");
	}  // End swap function

	// Check to see if current layer is layer 1 or layer 2 to accurately set count value
	if (currentLayer === teller2) {
		count = this.getElementsByClassName("row")[1].alt.length;		// If layer1, set count value to image alt attribute
	} else {
		count = Number(this.textContent);							// Else, set count value to square's text content
	}  // End if/else

	// Set timeout to swap layers
	setTimeout(swap, count * 2 * 1000);
}  // End changeLayer() function



function showFortune() {
  const
}
