console.log('hello world');

/* const aboutPlus = document.getElementByClass('about_plus');
aboutPlus.related_text = document.getElementById('about_peter');

const aboutMinus = document.getElementById('about_minus');
aboutMinus.related_text = document.getElementById('about_peter');
aboutMinus.plus = aboutPlus;
aboutPlus.minus = aboutMinus;

// When a plus is shown, clicking on it should hide the plus and show the content
let hideContent = function(){
    this.plus.style.display = 'block';
    this.related_text.style.display = 'none';
    this.style.display = 'none';
}

aboutMinus.onclick = hideContent;

// When a minus is shown, clicking on it should hide the content and show the plus
let showContent = function(){
    this.minus.style.display = 'block';
    this.related_text.style.display = 'block';
    this.style.display = 'none';
}

aboutPlus.onclick = showContent; */

// Get elements in lists from the DOM
const pluses = document.getElementsByClassName('plus');
const minuses  = document.getElementsByClassName('minus');
const reference_text_blocks = document.getElementsByClassName('ref_text')

// Create relationships amongst each plus, minus, and text block
for (i=0; i<pluses.length;i++){
    pluses[i].minus = minuses[i]
    minuses[i].plus = pluses[i]
    pluses[i].ref_text = reference_text_blocks[i]
    minuses[i].ref_text = reference_text_blocks[i]
}

// When a minus is shown, clicking on it hides the content and shows the plus
let showContent = function(){
    this.minus.style.display = 'block';
    this.ref_text.style.display = 'block';
    this.style.display = 'none';
}

// When a plus is shown, clicking on it should hide the plus and show the content
let hideContent = function(){
    this.plus.style.display = 'block';
    this.ref_text.style.display = 'none';
    this.style.display = 'none';
}

// Assign event listeners
for (i=0; i<pluses.length; i++){
    pluses[i].addEventListener('click',showContent);
    minuses[i].addEventListener('click',hideContent);
}


// Need to adjust z-index of these as well