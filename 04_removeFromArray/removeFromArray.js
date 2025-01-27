const removeFromArray = function(array, ...items) {
    let arrayremoved = array.filter(checkCondition);
    function checkCondition (itemCondition) {
        return !items.includes(itemCondition);
    }
    return arrayremoved;
};

// Do not edit below this line
module.exports = removeFromArray;
