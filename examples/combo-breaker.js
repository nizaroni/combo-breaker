var comboBreaker = require('..'),
    redundant,
    broken
;

redundant = 'I really really really really love pizza.';

broken = comboBreaker(redundant, 'really ');
console.log(broken); // "I really love pizza."

broken = comboBreaker(redundant, 'really ', { keep: 2 });
console.log(broken); // "I really really love pizza."
