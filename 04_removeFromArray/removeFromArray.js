const removeFromArray = function(array, item) {
    let arrayremoved = array.filter(checkCondition);
    function checkCondition (itemCondition) {
        return item !== itemCondition;
    }
    return arrayremoved;
};

// Do not edit below this line
module.exports = removeFromArray;
