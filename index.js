var quotemeta = require('quotemeta');

function comboBreaker (str, combo, options) {
    var leftOver,
        pattern,
        regex,
        count,
        keep
    ;

    options = options || {};
    keep = options.keep || 1;

    leftOver = '';
    for (count = 0; count < keep; count += 1) {
        leftOver += combo;
    }

    pattern = quotemeta(leftOver) + '(' + quotemeta(combo) + ')+';
    regex = new RegExp(pattern, 'g');

    return str.replace(regex, leftOver);
}

module.exports = comboBreaker;
