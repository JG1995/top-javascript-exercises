const findTheOldest = function(people) {
    const CurrentDate = new Date().getFullYear();

    function getAge(birth, death) {
        if (!death) {
            death = CurrentDate;
        }
        return death - birth;
    }

    people.forEach((person) => {
        let currentOldest = 0;
        if (currentOldest > getAge(person.yearOfBirth, person.yearOfDeath)) {
            currentOldest.name = person.name;
        }
        return currentOldest;
    });

};

// Do not edit below this line
module.exports = findTheOldest;
