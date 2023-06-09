const fs = require("fs");
const csv = require("csv-parser");

const inputFile = "public/GDDataJSON/FL2019.csv";
const outputFile = "public/GDDataJSON/Fall2019.json";

const data = [];

fs.createReadStream(inputFile)
  .pipe(csv())
  .on("data", (row) => {
    const jsonData = {};
    for (const key in row) {
      if (Object.hasOwnProperty.call(row, key)) {
        const cleanedKey = key.replace(/[^a-zA-Z0-9]/g, ""); // Remove non-alphanumeric characters
        const value = row[key];
        jsonData[cleanedKey] = value;
      }
    }
    data.push(jsonData);
  })
  .on("end", () => {
    const jsonData = JSON.stringify(data, null, 2);
    fs.writeFileSync(outputFile, jsonData);

    // Delete the input file
    fs.unlinkSync(inputFile);
  });
