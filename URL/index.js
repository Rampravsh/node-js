const http = require("http");
const fs = require("fs");

const myServer = http.createServer((req, res) => {
  const log = `${Date.now()} ${req.url} : new req received\n`;

  fs.appendFile("req.txt", log, (err) => {
    if (err) console.log(err);
  });
  //   console.log(req.socket);
  console.log("new req rec.");
  switch (req.url) {
    case '/':
        res.end("homePage")
        break;
    case '/about':
        res.end("aboutPage")
        break;
    case '/ram':
        res.end("my page")
        break;
  
    default:
        res.end('404 Not Found')
        break;
  }
});

myServer.listen(8000, () => {
  console.log("server is running");
});
