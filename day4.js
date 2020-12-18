const readline = require("readline");
const fs = require("fs");
const { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } = require("constants");

const readInterface = readline.createInterface({
  input: fs.createReadStream("inputs/day4_input.txt"),
  output: false,
  console: false,
});

let passports = [""];
let i = 0;
let fields_required = ['byr:', 'iyr:', 'eyr:', 'hgt:', 'hcl:', 'ecl:', 'pid:'];

readInterface
  .on("line", (line) => {
    if (line === "") {
      i++;
      passports[i] = "";
    } else {
      passports[i] = passports[i].concat(" ", line);
    }
  })
  .on("close", () => {
    let count = 0;
    passports.forEach(element => {
      //let fields = element.match(/\w\w\w:[#\w\d]*/g);
      let count_fields = 0;
      let fields;
      fields = element.match(/(\w\w\w):/g);
      fields_required.forEach(element => {
        if (fields.includes(element)) count_fields++;
      });
      console.log(fields);
      console.log("-------------");
      if(count_fields == 7) count++;
    });
    console.log(count);
  });

function getPassports(data) {
  let count = 0;
  let passports = [];
  passports[0] = "holsa";

  for (let i = 0; i < data.length; i++) {
    passports[count].concat(" ", "xd");
    console.log(passports[count], data[i]);
    if (data[i] == "") {
      ++count;
      passports[count] = "";
    }
    console.log(passports);
    return passports;
  }
}
