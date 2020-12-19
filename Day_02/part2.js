const readline = require("readline");
const fs = require("fs");

const readInterface = readline.createInterface({
  input: fs.createReadStream("input.txt"),
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
      let first = values[0] - 1;
      let second = values[1] - 1;
      let letter = strings[1][0];
      let pass = strings[2];
      let matches = 0;
      if (pass[first] == letter) {
        matches++;
      }
      if (pass[second] == letter) {
        matches++;
      }
      if (matches == 1) {
        count++;
      }
    });
    console.log(count);
    process.exit(0);
  });
