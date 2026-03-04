const express = require("express");
const users = require("./MOCK_DATA.json");
const app = express();
port = 8000;

app.get("/api/users", (req, res) => {
  return res.json(users);
});
app.get("/users", (req, res) => {
  const html = `
    <ul>
        ${users
          .map((item) => {
            return `<li>${item.first_name} </li>`;
          })
          .join(" ")}
    </ul>
    `;
  return res.send(html);
});

app.get("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const user = users.find((user) => user.id === id);
  return res.json(user);
});

app.post("/api/users", (req, res) => {
  
  return res.json({ status: "pending" });
});

app.patch("/api/users/:id", (req, res) => {
  return res.json({ status: "pending" });
});

app.delete("/api/users/:id", (req, res) => {
  return res.json({ status: "pending" });
});

app.listen(port, () => {
  console.log("app is running on port ", port);
});
