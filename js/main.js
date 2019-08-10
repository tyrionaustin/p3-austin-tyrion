// Global Variables
const myBoxes = document.getElementsByClassName('box');
const theBoxes = document.getElementsByClassName('box2')
const teller1 = document.getElementById('colors')
const teller2 = document.getElementById('numbers')

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

  for(let i = 0); i < this.textContent.length * 2; i++) {
    setTimeout(changeColor2, i * 1000);
  };
};
// Event listener for second loop
for (let i = 0; i < theBoxes.length; i++) {
  theBoxes[i].addEventListener('click', loop2);
};
