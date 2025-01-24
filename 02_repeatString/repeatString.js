const repeatString = function(text, times) {
    let string="";
    for (let i=0; i<times; i++) {
        string +=text;
    }
    return string
};

repeatString("hey", 3)

// Do not edit below this line
module.exports = repeatString;
