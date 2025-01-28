const sumAll = function(intBeg, intFin) {
    if (intFin < intBeg) {
        let change = intBeg;
        intBeg = intFin;
        intFin = change;
    }
    let sum = 0;
    for (let i = intBeg; i <= intFin; i++) {
      sum += i
    }
    return sum;
}

// Do not edit below this line
module.exports = sumAll;
