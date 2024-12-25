const express = require("express");
const app = express();
const path = require("path");
const PORT = 3000;
const mongoose = require("mongoose");

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "home.html"));
});

mongoose
  .connect(
    "mongodb+srv://admin:admin@cluster0.2t4ai.mongodb.net/all-data?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Example app listing on http://localhost:${PORT}/`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
