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
let fields_required = ["byr:", "iyr:", "eyr:", "hgt:", "hcl:", "ecl:", "pid:"];

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
    passports.forEach((element) => {
      let potato = 0;
      let count_fields = 0;
      fields_required.forEach((element2) => {
        switch (fields_required.indexOf(element2)) {
          case 0:
            potato = element.match(/byr:(\d\d\d\d)/);
            if (potato) {
              if (potato[1] >= 1920 && potato[1] <= 2002) count_fields++;
            }
            break;
          case 1:
            potato = element.match(/iyr:(\d\d\d\d)/);
            if (potato) {
              if (potato[1] >= 2010 && potato[1] <= 2020) count_fields++;
            }
            break;
          case 2:
            potato = element.match(/eyr:(\d\d\d\d)/);
            if (potato) {
              if (potato[1] >= 2020 && potato[1] <= 2030) count_fields++;
            }
            break;
          case 3:
            if (potato = element.match(/hgt:(\d+)cm/)) {
              if (potato[1] >= 150 && potato[1] <= 193) count_fields++;
            } else if ((potato = element.match(/hgt:(\d+)in/))) {
              if (potato[1] >= 59 && potato[1] <= 76) count_fields++;
            }
            break;
          case 4:
            potato = element.match(
              /hcl:#[0-9a-f][0-9a-f][0-9a-f][0-9a-f][0-9a-f][0-9a-f]/
            );
            if (potato) {
              count_fields++;
            }
            break;
          case 5:
            potato = element.match(/ecl:\b(?:amb|blu|brn|gry|grn|hzl|oth)\b/);
            if (potato) {
              count_fields++;
            }
            break;
          case 6:
            potato = element.match(/pid:\d\d\d\d\d\d\d\d\d/);
            if (potato) {
              count_fields++;
            }
            break;
          default:
            break;
        }
      });
      if (count_fields == 7) {
        count++;
        console.log(element);
        //console.log("\n\n--", count_fields,"--\n\n");
      }
    });
    console.log(count);
  });
