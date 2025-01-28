const sumAll = function(intBeg, intFin) {
    if (intFin < intBeg) {
        let change = intBeg;
        intBeg = intFin;
        intFin = change;
    }
    if (intBeg < 0 || intFin < 0) {
        return 'ERROR'
    } 
    let sum = 0;
    for (let i = intBeg; i <= intFin; i++) {
      sum += i
    }
    return sum;
}

// Do not edit below this line
module.exports = sumAll;
