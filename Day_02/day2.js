const readline = require("readline");
const fs = require("fs");

const readInterface = readline.createInterface({
  input: fs.createReadStream("inputs/day2_input.txt"),
  output: false,
  console: false,
});

let data = [];

readInterface
  .on("line", (line) => {
    data.push(line);
  })
  .on("close", () => {
    let count = 0;
    data.forEach((element) => {
      let strings = element.split(" ");
      let values = strings[0].split("-");
      let min = values[0];
      let max = values[1];
      let letter = strings[1][0];
      let pass = strings[2];
      let occurrences = pass.split(letter).length - 1;
      if (min <= occurrences && occurrences <= max) {
        count++;
      }
    });
    console.log(count);
    process.exit(0);
  });
