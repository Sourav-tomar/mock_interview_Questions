var convertToTitle = function(columnNumber) {
    let letter = 0
    let str = ""
    while(columnNumber > 0){
        letter = columnNumber%26
        if(letter === 0) {
            letter = 26
        }
        
        columnNumber = (columnNumber - letter) / 26
        str = String.fromCharCode(letter + 64) + str
    }
    return str
};

columnNumber = 53
console.log(convertToTitle(columnNumber))