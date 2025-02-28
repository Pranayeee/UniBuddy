require("dotenv").config();
const mongoose = require("mongoose");
const xlsx = require("xlsx");
const fs = require("fs");
const ExcelModel = require("../models/ExcelModel.js");

// Validate MONGO_URI
// if (!process.env.MONGO_URI) {
//   console.error(" MONGO_URI is not set in .env file.");
//   process.exit(1);
// }

// const MONGO_URI = process.env.MONGO_URI;
if (!process.env.MONGO_URI) {
    console.error("MongoDB URI is missing! Check your .env file.");
    process.exit(1);  // Stop the server if URI is missing
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
    console.error(` File not found: ${filePath}`);
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

    // Map and clean data
    data = data.map((row, index) => {
      const nameOfCollege = row["__EMPTY"] || row["nameOfCollege"];
      const clgLocation = row["__EMPTY_1"] || row["clgLocation"];
      const clgFeesRaw = row["__EMPTY_2"] || row["clgFees"];

      let clgFees = 0;
      if (clgFeesRaw) {
        const cleanedFees = clgFeesRaw.replace(/[^\d.]/g, '');
        clgFees = isNaN(cleanedFees) ? 0 : Number(cleanedFees);
      }

      if (nameOfCollege && clgLocation) {
        return { nameOfCollege, clgLocation, clgFees };
      } else {
        console.warn(` Skipping incomplete row at index ${index}:`, row);
        return null;
      }
    }).filter((row) => row !== null);

    if (data.length === 0) {
      console.error(" No valid data to insert into MongoDB.");
      return mongoose.connection.close();
    }

    // Debug the final data before insert
    console.log("Final Data to Insert:", JSON.stringify(data, null, 2));

    const result = await ExcelModel.insertMany(data);
    if (result) {
      console.log(" Excel data imported successfully into MongoDB!");
      console.log(`Inserted ${result.length} records.`);
    } else {
      console.error(" No records inserted.");
    }
  } catch (err) {
    console.error(" Error during data import:", err);
  } finally {
    mongoose.connection.close();
  }
};

// Run the function with an Excel file
importExcelToMongoDB("./uploads/data.xlsx");

