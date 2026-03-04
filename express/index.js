const express = require("express");
const fs = require("fs");
const app = express();

app.get("/", (req, res) => {
  //   console.log(req);
  //   fs.appendFile("./test.txt", req.url, (err) => console.log(err));
  return res.json({ name: "Rampravesh kumar", age: 20 });
});

app.get("/about", (req, res) => {
  return res.send(
    "Hello from about page hey " +
      req.query.name +
      " your age is " +
      req.query.age,
  );
});

app.listen(8000, () => {
  console.log("server running on port 8000");
});
