const countTheMonkeys = (number) => {
    const numberArray = [];

    for(let i = 0; i < number; i++) {
        numberArray.push(i + 1);
    }

    return numberArray;
}

module.exports = countTheMonkeys;