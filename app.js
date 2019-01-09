'use strict';


var firstanswer = prompt('Is the sky blue?').toUpperCase();
console.log('Do they think the sky is blue? ', firstanswer);

if (firstanswer === 'YES' || firstanswer === 'Y') {
  alert('CORRECT!');
} else {
  alert('Are you sure?');
}
