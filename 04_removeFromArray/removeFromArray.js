const removeFromArray = function() {
    const array = arguments[0];
    for(let i = 1; i < arguments.length; i++) {
        const index = array.indexOf(arguments[i]);
        if(index !== -1) {
            array.splice(index, 1);
            i--;
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
