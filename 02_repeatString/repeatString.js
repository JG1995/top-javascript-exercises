const repeatString = function(string, num) {
    let returnString = string;

    if (num == 0) {
        return "";
    } else if (num < 0) {
        return "ERROR";
    } else {
        for (let i = 0; i < num - 1; i++) {
            returnString += string;
        }
        return returnString;
    }
};

// Do not edit below this line
module.exports = repeatString;
