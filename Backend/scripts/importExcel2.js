require("dotenv").config();
const mongoose = require("mongoose");
const xlsx = require("xlsx");
const fs = require("fs");
const ExcelModel = require("../models/ExcelModel2");  
const ExcelModel2 = require("../models/ExcelModel2");

// Validate MONGO_URI
if (!process.env.MONGO_URI) {
  console.error("MONGO_URI is not set in .env file.");
  process.exit(1);
}

// Connect to MongoDB Atlas
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => {
    console.error("MongoDB Connection Error:", err);
    process.exit(1);
  });

const importExcelToMongoDB = async (filePath) => {
  if (!fs.existsSync(filePath)) {
    console.error(`File not found: ${filePath}`);
    process.exit(1);
  }

  try {
    const workbook = xlsx.readFile(filePath);
    const sheetName = workbook.SheetNames[0];
    let data = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName], { defval: null });

    if (data.length === 0) {
      console.error(" No data found in Excel file.");
      return mongoose.connection.close();
    }

    // 🔹 Normalize column names and trim values
    data = data.map((row, index) => {
      const cleanedRow = Object.keys(row).reduce((acc, key) => {
        acc[key.trim()] = typeof row[key] === "string" ? row[key].trim() : row[key]; // Trim keys & values
        return acc;
      }, {});

      const nameOfCollege = cleanedRow["__EMPTY"] || cleanedRow["nameOfCollege"];
      const clgLocation = cleanedRow["__EMPTY_1"] || cleanedRow["clgLocation"];
      const clgFeesRaw = cleanedRow["__EMPTY_2"] || cleanedRow["clgFees"];

      let clgFees = 0;
      if (clgFeesRaw) {
        const cleanedFees = clgFeesRaw.replace(/[^\d.]/g, ""); // Remove non-numeric characters
        clgFees = isNaN(cleanedFees) ? 0 : Number(cleanedFees);
      }

      if (nameOfCollege && clgLocation) {
        return { nameOfCollege, clgLocation, clgFees };
      } else {
        console.warn(`Skipping incomplete row at index ${index}:`, row);
        return null;
      }
    }).filter((row) => row !== null); // Remove null entries

    if (data.length === 0) {
      console.error(" No valid data to insert into MongoDB.");
      return mongoose.connection.close();
    }

    // Debugging: Log the first 5 rows to verify data before insertion
    console.log(" Final Data to Insert:", JSON.stringify(data.slice(0, 5), null, 2));

    // Insert data into MongoDB
    const result = await ExcelModel2.insertMany(data);
    console.log(`Successfully inserted ${result.length} records into MongoDB!`);
  } catch (err) {
    console.error(" Error during data import:", err);
  } finally {
    mongoose.connection.close();
  }
};

// Run the function with an Excel file
importExcelToMongoDB("./uploads/MBA.xlsx");
