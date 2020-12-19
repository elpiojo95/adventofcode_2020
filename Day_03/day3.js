const readline = require("readline");
const fs = require("fs");

const readInterface = readline.createInterface({
  input: fs.createReadStream("inputs/day3_input.txt"),
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
    let horizontal = -3;
    data.forEach((element) => {
      horizontal += 3;
      horizontal = horizontal % element.length;
      if (element[horizontal] == "#") {
        count++;
      }
    });
    console.log(count);
    process.exit(0);
  });
