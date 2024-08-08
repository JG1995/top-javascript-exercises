const removeFromArray = function(inputArray, ...args) {
    const result = inputArray.filter((item) => !args.includes(item));
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
