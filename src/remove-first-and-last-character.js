const removeFirstAndLastCharacter = (str) => {
    if(str.split("").length <= 2){
        return str;
    }
      
    return str.split("").slice(1, -1).join("")
}

module.exports = removeFirstAndLastCharacter;