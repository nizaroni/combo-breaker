function comboBreaker (str, combo) {
    var pattern,
        regex
    ;

    pattern = combo + '(' + combo + ')+';
    regex = new RegExp(pattern, 'g');
    return str.replace(regex, combo);
}

module.exports = comboBreaker;
