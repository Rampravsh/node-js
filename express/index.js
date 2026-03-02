const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({ name: "Rampravesh kumar", age: 20 });
});

app.listen(8000, () => {
  console.log("server running on port 8000");
});
