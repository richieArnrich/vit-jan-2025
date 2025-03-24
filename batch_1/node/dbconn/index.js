//create a simple nodejs server
//import http module
const http = require("node:http");
//import mongoose
const mongoose = require("mongoose");

//call create server function
const server = http.createServer((req, res) => {
  //handle the request
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello world, this is node js, i am new line");
});

const server2 = http.createServer((req, res) => {
  //handle the request, send html
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end("<h1>Hello world, this is node js, i am new line</h1");
});

const connect = async () => {
  try {
    //connect to the database
    await mongoose.connect("mongodb://localhost:27017/DbName");
    console.log("connected to the database");
  } catch (err) {
    console.log("error connecting to database");
    console.log(err);
  }
};

//listen on port 4000
server.listen(4000, () => {
  connect();
  console.log("Server running on port 4000");
});

server2.listen(5000, () => {
  console.log("Server running on port 5000");
});
