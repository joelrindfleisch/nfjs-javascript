// iteration challenge #2

function power(base, exponent) {
    var result = 1;
    for (var i = 0; i < exponent; i++) {
        result = result * base;
    }
    return result;
}
console.log(power(2, 3));