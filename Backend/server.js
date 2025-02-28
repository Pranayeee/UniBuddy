

// require("dotenv").config(); // Load environment variables

// const express = require("express");
// const path = require("path");
// const mongoose = require("mongoose");
// const cors = require("cors");

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(cors());
// app.use(express.json());

// // MongoDB Connection
// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
//   .then(() => console.log(" MongoDB Connected"))
//   .catch(err => console.log(" MongoDB Connection Error:", err));

  
//   console.log("Using MONGO_URI:", process.env.MONGO_URI);

// // API route example
// app.get("/api/data", async (req, res) => {
//   try {
//     res.json({ message: "Hello from the API!" });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });




// app.get("/api/data", async (req, res) => {
//     try {
//       const data = await ExcelModel.find(); // Fetch all data
//       res.json(data);
//     } catch (error) {
//       res.status(500).json({ message: "Error fetching data", error });
//     }
//   });
  

// // Serve static frontend files
// app.use(express.static(path.join(__dirname, "../Frontend")));

// // Route to serve `header.html`
// app.get("/header", (req, res) => {
//   res.sendFile(path.join(__dirname, "../Frontend/Header/header.html"));
// });


// app.get("/api/colleges", async (req, res) => {
//   try {
//     const colleges = await ExcelModel.find(); // Fetch all data
//     res.json(colleges); // Send response as JSON
//   } catch (error) {
//     res.status(500).json({ error: "Error fetching data from MongoDB" });
//   }
// });
// // Start the server
// app.listen(PORT, () => {
//   console.log(` Server running at http://localhost:${PORT}/header`);
// });
// require("dotenv").config(); // Load environment variables

// const express = require("express");
// const path = require("path");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const ExcelModel = require("./models/ExcelModel"); //  Import the model
// const ExcelModel2 = require("./models/ExcelModel2");


// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(cors());
// app.use(express.json());

// //  MongoDB Connection
// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
//   .then(() => console.log(" MongoDB Connected"))
//   .catch(err => console.error(" MongoDB Connection Error:", err));

// console.log("Using MONGO_URI:", process.env.MONGO_URI);

// app.get("/api/colleges", async (req, res) => {
//   try {
//     const colleges = await ExcelModel.find();
//     console.log("Regular Colleges Data:", colleges);  // Log the response
//     res.json(colleges);
//   } catch (error) {
//     console.error("Error fetching colleges:", error);
//     res.status(500).json({ error: "Error fetching data from MongoDB", details: error.message });
//   }
// });


// app.get("/api/mba", async (req, res) => {
//   try {
//     const colleges = await ExcelModel2.find();
//     console.log("MBA Colleges Data:", colleges);  // Log the response
//     res.json(colleges);
//   } catch (error) {
//     console.error("Error fetching MBA colleges:", error);
//     res.status(500).json({ error: "Error fetching data from MongoDB", details: error.message });
//   }
// });

// // API to serve the JSON data
// app.get("/api/it-colleges", (req, res) => {
//   fs.readFile("colleges.json", "utf8", (err, data) => {
//       if (err) {
//           return res.status(500).json({ error: "Error loading data" });
//       }
//       res.json(JSON.parse(data));
//   });
// });

// //  Serve static frontend files
// app.use(express.static(path.join(__dirname, "../Frontend"))); 

// //  Route to serve `header.html`
// app.get("/header", (req, res) => {
//   res.sendFile(path.join(__dirname, "../Frontend/Header/header.html"));
// });

// //  Start the server
// app.listen(PORT, () => {
//   console.log(` Server running at: http://localhost:${PORT}/header/`);
// });





require("dotenv").config(); // Load environment variables

const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const cors = require("cors");
const fs = require("fs"); //  Import fs for file handling
const ExcelModel = require("./models/ExcelModel");
const ExcelModel2 = require("./models/ExcelModel2");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

//  MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log(" MongoDB Connected"))
  .catch(err => console.error(" MongoDB Connection Error:", err));

console.log("Using MONGO_URI:", process.env.MONGO_URI);

//  Serve static frontend files
const frontendPath = path.join(__dirname, "../Frontend");
app.use(express.static(frontendPath));

app.get("/api/colleges", async (req, res) => {
  try {
    const colleges = await ExcelModel.find();
    console.log("Regular Colleges Data:", colleges);
    res.json(colleges);
  } catch (error) {
    console.error("Error fetching colleges:", error);
    res.status(500).json({ error: "Error fetching data from MongoDB", details: error.message });
  }
});

// API to fetch MBA colleges
app.get("/api/mba", async (req, res) => {
  try {
    const colleges = await ExcelModel2.find({ category: 'MBA' });
    console.log("MBA Colleges Data:", colleges);
    res.json(colleges);
  } catch (error) {
    console.error("Error fetching MBA colleges:", error);
    res.status(500).json({ error: "Error fetching data from MongoDB", details: error.message });
  }
});

// API to serve JSON data from colleges.json
app.get("/api/it-colleges", (req, res) => {
  fs.readFile(path.join(__dirname, "colleges.json"), "utf8", (err, data) => {
    if (err) {
      return res.status(500).json({ error: "Error loading data" });
    }
    res.json(JSON.parse(data));
  });
});

//  Route to serve `header.html`
app.get("/header", (req, res) => {
  res.sendFile(path.join(frontendPath, "./Header/header.html"));
});

// Start the server
app.listen(PORT, () => {
  console.log(` Server running at: http://localhost:${PORT}/header`);
});
