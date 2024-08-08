const reverseString = function(string) {
    let tempArray; 
    let normalString = string;
    tempArray = Array.from(normalString);
    tempArray.reverse();
    let reversedString = tempArray.join('');
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
