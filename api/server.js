// implement your server here
// require your posts router and connect it here

//Imports
const express = require("express");
//Instance of express
const server = express();

//Route for info to go through
const postRouter = require("./posts/posts-router.js");

//Route required
server.use(express.json()); //This changes everything into readable json
server.use("/api/posts", postRouter);

//Exporting out
module.exports = server;
