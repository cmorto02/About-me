'use strict';
var correct = 0;

var name = prompt('what is your name?');
console.log('Visitor: ', name);

alert('Hi, ' + name + ' we are going to play a guessing game.');

alert('The questions are about me. Please answer them with a yes or no.');

var firstanswer = prompt('Have I ever jumped out of a plane?').toUpperCase();
console.log('Do they think I\'ve jumped out of a plane? ', firstanswer);

if (firstanswer === 'YES' || firstanswer === 'Y') {
  document.getElementById('one').innerHTML = ('CORRECT!'); correct++;
} else {
  document.getElementById('one').innerHTML = ('Wrong! I have jumped out of a plane.');
}

var secondanswer = prompt('Have I ever crashed a humvee?').toUpperCase();
console.log('Do they think I\'ve crashed a humvee? ', secondanswer);

if (secondanswer === 'NO' || secondanswer === 'N') {
  document.getElementById('two').innerHTML = ('CORRECT!'); correct++;
} else {
  document.getElementById('two').innerHTML = ('NOPE! I\'ve high-centered one, but i havent crashed one.');
}

var thirdanswer = prompt('Have I been to more than 20 countries?').toUpperCase();
console.log('Do they think I\'ve been to more than 20 countries? ', thirdanswer);

if (thirdanswer === 'YES' || thirdanswer === 'Y') {
  document.getElementById('three').innerHTML = ('CORRECT!'); correct++;
} else {
  document.getElementById('three').innerHTML = ('Wrong, I have!');
}

var fourthanswer = prompt('Have I ever been spearfishing?').toUpperCase();
console.log('Do they think I\'ve been spearfishing? ', fourthanswer);

if (fourthanswer === 'YES' || fourthanswer === 'Y') {
  document.getElementById('four').innerHTML = ('CORRECT!'); correct++;
} else {
  document.getElementById('four').innerHTML = ('Wrong, I have!');
}

var fifthanswer = prompt('Do I like crab?').toUpperCase();
console.log('Do they think I like crab ', fifthanswer);

if (fifthanswer === 'NO' || fifthanswer === 'N') {
  document.getElementById('five').innerHTML = ('CORRECT! Sea bugs are horrible!'); correct++;
} else {
  document.getElementById('five').innerHTML = ('Nope, I hate them.');
}

var qsix = 4;

while (qsix > 0) {
  var sixthanswer = parseInt(prompt('How many continents have I been to?'));
  console.log('How many continents do they think I have been to? ', sixthanswer);

  if(sixthanswer === 4){
    document.getElementById('six').innerHTML = ('That is correct! I have been to four continents.'); correct++; break;
  } qsix--;
  if(sixthanswer > 4) {
    alert('Too high');
  }
  if(sixthanswer < 4) {
    alert('Too low');
  }
  if(qsix === 0){
    alert('No more guesses!');
  }
}

var states = ['NORTH CAROLINA', 'SOUTH CAROLINA', 'TENNESSEE', 'FLORIDA', 'CALIFORNIA', 'MARYLAND', 'WASHINGTON DC', 'MICHIGAN'];

var qseven = 6;

while (qseven > 0) { 
  var seventhanswer = prompt('Name a state that i have lived in other than Washington.').toUpperCase();
  console.log('What states do they think i have lived in? ', seventhanswer);

  for(var i = 0; i < states.length; i++){
    if(seventhanswer === states[i]){
      alert('This is correct!'); qseven = 0; correct++; break;
    }
  }
  if(qseven > 0){
    alert('Incorrect, you have ' + qseven + ' chances left.');
  }

  if(qseven < 1){
    document.getElementById('seven').innerHTML = ('I have lived in North Carolina, South Carolina, Tennessee, Florida, California, Maryland, Washington DC, and Michigan');
  }
  qseven--;

}

alert('Congratulations, ' + name + ' you got ' + correct + ' out of 7 correct.');