const readline = require('readline');
const fs = require('fs')

const readInterface = readline.createInterface({
    input: fs.createReadStream('day2_input.txt'),
    output: false,
    console: false
});

let count = 0;

readInterface.on('line', function(line) {
    let strings = line.split(" ");
    let values = strings[0].split("-");
    let min = values[0];
    let max = values[1];
    let letter = strings[1][0];
    let pass = strings[2];
    let occurrences = pass.split(letter).length-1;
    if ((min <= occurrences)  && (occurrences <= max)) {
        count = count + 1;
    }
    console.log(count);
});

console.log(count);