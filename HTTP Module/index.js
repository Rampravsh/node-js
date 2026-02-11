const http = require("http");
const fs = require("fs");

const myServer = http.createServer((req, res) => {
  const log = `${Date.now()} ${req.url} : new req received\n`;

  fs.appendFile("req.txt", log, (err) => {
    if (err) console.log(err);
  });
  //   console.log(req.socket);
  console.log("new req rec.");
  res.end("Hello From Server");
});

myServer.listen(8000, () => {
  console.log("server is running");
});
