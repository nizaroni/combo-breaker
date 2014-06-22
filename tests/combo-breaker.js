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
    t.test('├─ > 1', function (t) {
        broken = comboBreaker(redundant, 'really ', { keep: 2 });
        t.equal(broken, 'I really really love pizza.');
        t.end();
    });

    t.test('└─ 0', function (t) {
        broken = comboBreaker(redundant, 'really ', { keep: 0 });
        t.equal(broken, 'I love pizza.');
        t.end();
    });
});

tape('escaping of regex characters', function (t) {
    t.test('├─ `$` character', function (t) {
        broken = comboBreaker('a million dollar$$$$$$$$$$$$$$$', '$');
        t.equal(broken, 'a million dollar$', '$ character');
        t.end();
    });

    t.test('├─ `*` character', function (t) {
        broken = comboBreaker('i can tell no lies***********', '*');
        t.equal(broken, 'i can tell no lies*');
        t.end();
    });

    t.test('├─ `)` character', function (t) {
        broken = comboBreaker('())))))))))))))', ')');
        t.equal(broken, '()');
        t.end();
    });

    t.test('├─ `|` character', function (t) {
        broken = comboBreaker('pipe pipe pipe ||||| pipe', '|');
        t.equal(broken, 'pipe pipe pipe | pipe');
        t.end();
    });

    t.test('├─ `.` character', function (t) {
        broken = comboBreaker('dot dot dot ........ dot dot', '.');
        t.equal(broken, 'dot dot dot . dot dot');
        t.end();
    });

    t.test('├─ `?` character', function (t) {
        broken = comboBreaker('why???????', '?');
        t.equal(broken, 'why?');
        t.end();
    });

    t.test('└─ `\\` character', function (t) {
        broken = comboBreaker('back slash slash \\\\\\\\ slash', '\\');
        t.equal(broken, 'back slash slash \\ slash');
        t.end();
    });
});
