'use strict';

var name = prompt('what is your name?');
console.log('Visitor: ', name);

alert('Hi, ' + name + ' we are going to play a guessing game.');

alert('The questions are about me. Please answer them with a yes or no.');

var firstanswer = prompt('Have I ever jumped out of a plane?').toUpperCase();
console.log('Do they think I\'ve jumped out of a plane? ', firstanswer);

if (firstanswer === 'YES' || firstanswer === 'Y') {
  alert('CORRECT!');
} else {
  alert('I have!');
}

var secondanswer = prompt('Have I ever crashed a humvee?').toUpperCase();
console.log('Do they think I\'ve crashed a humvee? ', secondanswer);

if (secondanswer === 'YES' || secondanswer === 'Y') {
  alert('Nope!');
} else {
  alert('You are correct!');
}

var thirdanswer = prompt('Have I been to more than 20 countries?').toUpperCase();
console.log('Do they think I\'ve been to more than 20 countries? ', thirdanswer);

if (thirdanswer === 'YES' || thirdanswer === 'Y') {
  alert('CORRECT!');
} else {
  alert('I have!');
}

var fourthanswer = prompt('Have I ever been spearfishing?').toUpperCase();
console.log('Do they think I\'ve been spearfishing? ', fourthanswer);

if (fourthanswer === 'YES' || fourthanswer === 'Y') {
  alert('CORRECT!');
} else {
  alert('I have!');
}

var fifthanswer = prompt('Do I like crab?').toUpperCase();
console.log('Do they think I like crab ', fifthanswer);

if (fifthanswer === 'YES' || fifthanswer === 'Y') {
  alert('Wrong!');
} else {
  alert('NO SEA BUGS!');
}