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
    let results = [];
    let h_offset = [1, 3, 5, 7];
    let v_offset = [1, 2];
    for (let i = 0; i < h_offset.length; i++) {
      let count = 0;
      let horizontal = -h_offset[i];
      for (let v = 0; v < data.length; v++) {
        horizontal += h_offset[i];
        horizontal = horizontal % data[v].length;
        if (data[v][horizontal] == "#") {
          count++;
        }
      }
      results.push(count);
      console.log(count);
    }
    let count = 0;
    let horizontal = -h_offset[1];
    for (let v = 0; v < data.length; v += 2) {
      horizontal += h_offset[1];
      horizontal = horizontal % data[v].length;
      if (data[v][horizontal] == "#") {
        count++;
      }
    }
    results.push(count);
    console.log(count);
    console.log(results[0] * results[1] * results[2] * results[3] * results[4]);
    process.exit(0);
  });
