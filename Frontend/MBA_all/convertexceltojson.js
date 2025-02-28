

const xlsx = require("xlsx");
const fs = require("fs");

// Load the Excel file
const workbook = xlsx.readFile("MBA.xlsx"); // Replace with your actual file
const sheetName = workbook.SheetNames[0]; // Get the first sheet
const sheet = workbook.Sheets[sheetName];

// Convert sheet to JSON
const jsonData = xlsx.utils.sheet_to_json(sheet);

// Save JSON data to a file
fs.writeFileSync("colleges.json", JSON.stringify(jsonData, null, 4));

console.log("JSON file created successfully!");