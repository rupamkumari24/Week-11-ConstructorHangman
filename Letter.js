// Letter.js is a constructor file
// Letter.js should control whether or not a letter appears 
// as a "_" or as itself on-screen
// this will display the blank letters in the console
// Used the function as a constructor and using prototype  

var Word = require('./Letter.js');

// word constructor
function Letter (value){

  // this is just the character - the user guess
  this.value = value; 
  this.visible = false;
}

// this either shows or hides the word
Letter.prototype.show = function() {

  // this is a ternary operator
  return (this.visible) ? this.value : " _ ";
}

module.exports  = Letter;