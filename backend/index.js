const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");
const cors = require("cors");
app.use(cors());

app.get("/:id", (req, res) => {
  const sanitizedFileName = req.params.id.replace(/\s/g, "");
  const filePath = path.resolve("GDDataJSON/", sanitizedFileName + ".json");

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Failed to read the file" });
    }

    try {
      const jsonData = JSON.parse(data);
      res.json(jsonData);
    } catch (parseError) {
      console.error(parseError);
      return res.status(500).json({ error: "Failed to parse JSON data" });
    }
  });
});

app.get("/:id/DEP", (req, res) => {
  const sanitizedFileName = req.params.id.replace(/\s/g, "");
  const filePath = path.resolve("DPDataJSON/", sanitizedFileName + "DEP.json");

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Failed to read the file" });
    }

    try {
      const jsonData = JSON.parse(data);
      res.json(jsonData);
    } catch (parseError) {
      console.error(parseError);
      return res.status(500).json({ error: "Failed to parse JSON data" });
    }
  });
});

app.listen(5001, () => {
  console.log("Server started");
});
