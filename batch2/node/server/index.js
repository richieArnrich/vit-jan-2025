//create a simple http server
const http = require("node:http");
const mongoose = require("mongoose");

const connect = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/MyDB");
    console.log("connected to db");
  } catch (err) {
    console.log("error connecting to db");
    console.log(err);
  }
};

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello World, this is node server, i am added newly");
});

server.listen(4000, () => {
  connect();
  console.log("Server listening on port 4000");
});
