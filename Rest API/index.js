const express = require("express");
const fs = require("fs");
const users = require("./MOCK_DATA.json");
const app = express();
port = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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
  const body = req.body;
  users.push({ ...body, id: users.length + 1 });
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
    return res.json({ status: "sucessfull", id: users.length });
  });
});

app.patch("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const body = req.body;
  users.map((item) => {
    if (item.id == id) {
      return { ...item, ...body };
    }
    return item;
  });
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
    return res.json({
      status: "sucessfull",
      newUser: users.find((user) => user.id === id),
    });
  });
});

app.delete("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);
  console.log(id);
  let updatedUsers = users.filter((user) => user.id !== id);
  fs.writeFile(
    "./MOCK_DATA.json",
    JSON.stringify(updatedUsers),
    (err, data) => {
      return res.json({
        status: "sucessfull",
      });
    },
  );
});

app.listen(port, () => {
  console.log("app is running on port ", port);
});
