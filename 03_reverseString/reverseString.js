const reverseString = function(text) {
    let splitArray = text.split("");
    let reverseArray = splitArray.reverse();
    let reverseJoined = reverseArray.join("");
    return reverseJoined;
};

// Do not edit below this line
module.exports = reverseString;