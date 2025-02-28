const express = require("express");
const fs = require("fs");

const cors = require("cors");


const app = express();
const PORT = 5000;

app.use(cors());

// API to serve the JSON data
app.get("/api/it-colleges", (req, res) => {
    fs.readFile("colleges.json", "utf8", (err, data) => {
        if (err) {
            return res.status(500).json({ error: "Error loading data" });
        }
        res.json(JSON.parse(data));
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
