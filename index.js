const http = require("node:http");
const fs = require("node:fs/promises");
const path = require("node:path");
const controller = async (req, res) => {
  let file = null;
  res.writeHead(200, { "Content-Type": "text/html" });

  switch (req.url) {
    case "/":
      file = await fs.readFile(path.join(__dirname, "index.html"));
      res.end(file.toString());
      break;
    case "/about":
      file = await fs.readFile(path.join(__dirname, "about.html"));
      res.end(file.toString());
      break;
    case "/contact-me":
      file = await fs.readFile(path.join(__dirname, "contact-me.html"));
      res.end(file.toString());
      break;
    default:
      file = await fs.readFile(path.join(__dirname, "404.html"));
      res.end(file.toString());
      break;
  }
};

const server = http.createServer(controller);

const PORT = 3000;

server.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
