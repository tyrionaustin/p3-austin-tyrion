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

//Hide first fortune teller, show second after 14 seconds(longest length)
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

  theBoxes[i].addEventListener("click", changeLayer);
};

//Change second fortune teller to third

function changeLayer() {

	const currentLayer = document.getElementById('numbers');			// Determine current layer
	const nextLayer = document.getElementById('numbers2');	// Determine next layer to show
	let count;											// Set empty count variable

	// Add hide class to current layer and remove from next layer
	const swap = () => {
    teller2.style.display = 'none';
    nextLayer.classList.remove("hide");
	}  // End swap function

  // Check to see if current layer is layer 1 or layer 2 to accurately set count value
  if (currentLayer === teller2) {
    count = Number(this.textContent);		// If layer1, set count value to image alt attribute
  } else {
    count = Number(this.textContent);							// Else, set count value to square's text content
  }  // End if/else

	// Set timeout to swap layers
	setTimeout(swap, count * 2 * 1000);
}  // End changeLayer() function


let yourFortune = document.createElement('p');
let fortuneWrapper = document.getElementById('fortunes');
fortuneWrapper.appendChild(yourFortune);

let placeholderText = document.createTextNode('');
yourFortune.appendChild(placeholderText);

let fortunes = [
  'A faithful friend is a strong defense',
  'A friend is a present you give yourself',
  'A good friendship is often more important than a passionate romance',
  'A good time to finish up old tasks',
  'A lifetime of happiness lies ahead of you',
  'A pleasant surprise is waiting for you',
  'Accept something that you can not change, and you will feel better',
  'Advice, when most needed, is least heeded',
  'All your hard work will soon pay off',
  'An inch of time is an inch of gold'
];

let showFortune = function() {
  fortunes.sort(function(a, b){return 0.5 - Math.random()});
  let fortuneFiller = document.createTextNode(fortunes[0]);
  yourFortune.appendChild(fortuneFiller);
};

for (let i = 0; i < Boxes.length; i++) {
  Boxes[i].addEventListener("click", showFortune);
}
