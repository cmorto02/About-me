'use strict';

var name = prompt('what is your name?');
console.log('Visitor: ', name);

alert('Hi, ' + name + ' we are going to play a guessing game.');

alert('The questions are about me. Please answer them with a yes or no.');

var firstanswer = prompt('Have I ever jumped out of a plane?').toUpperCase();
console.log('Do they think I\'ve jumped out of a plane? ', firstanswer);

if (firstanswer === 'YES' || firstanswer === 'Y') {
  document.getElementById('one').innerHTML = ('CORRECT!');
} else {
  document.getElementById('one').innerHTML = ('Wrong! I have jumped out of a plane.');
}

var secondanswer = prompt('Have I ever crashed a humvee?').toUpperCase();
console.log('Do they think I\'ve crashed a humvee? ', secondanswer);

if (secondanswer === 'NO' || secondanswer === 'N') {
  document.getElementById('two').innerHTML = ('CORRECT!');
} else {
  document.getElementById('two').innerHTML = ('NOPE! I\'ve high-centered one, but i havent crashed one.');
}

var thirdanswer = prompt('Have I been to more than 20 countries?').toUpperCase();
console.log('Do they think I\'ve been to more than 20 countries? ', thirdanswer);

if (thirdanswer === 'YES' || thirdanswer === 'Y') {
  document.getElementById('three').innerHTML = ('CORRECT!');
} else {
  document.getElementById('three').innerHTML = ('Wrong, I have!');
}

var fourthanswer = prompt('Have I ever been spearfishing?').toUpperCase();
console.log('Do they think I\'ve been spearfishing? ', fourthanswer);

if (fourthanswer === 'YES' || fourthanswer === 'Y') {
  document.getElementById('four').innerHTML = ('CORRECT!');
} else {
  document.getElementById('four').innerHTML = ('Wrong, I have!');
}

var fifthanswer = prompt('Do I like crab?').toUpperCase();
console.log('Do they think I like crab ', fifthanswer);

if (fifthanswer === 'NO' || fifthanswer === 'N') {
  document.getElementById('five').innerHTML = ('CORRECT! Sea bugs are horrible!');
} else {
  document.getElementById('five').innerHTML = ('Nope, I hate them.');
}