const http = require("http");
const fs = require("fs");
const url = require("url");

const myServer = http.createServer((req, res) => {
  if (req.url === "/favicon.ico") return res.end();
  const log = `${Date.now()} ${req.url} : new req received\n`;
  const myUrl = url.parse(req.url, true);
  console.log(myUrl);

  fs.appendFile("req.txt", log, (err) => {
    if (err) console.log(err);
  });
  //   console.log(req.socket);
  console.log("new req rec.");
  switch (myUrl.pathname) {
    case "/":
      res.end("homePage");
      break;
    case "/about":
      const username = myUrl.query.myName;
      res.end(`Hi,${username}`);
      break;
    case "/ram":
      res.end("my page");
      break;

    default:
      res.end("404 Not Found");
      break;
  }
});

myServer.listen(8000, () => {
  console.log("server is running");
});
