var tape = require('tape'),
    comboBreaker = require('..'),
    redundant,
    broken
;

redundant = 'I really really really really love pizza.';

tape('combo breaking', function (t) {
    broken = comboBreaker(redundant, 'really ');
    t.equal(broken, 'I really love pizza.');
    t.end();
});

tape('`options.keep`', function (t) {
    broken = comboBreaker(redundant, 'really ', { keep: 2 });
    t.equal(broken, 'I really really love pizza.');
    t.end();
});
