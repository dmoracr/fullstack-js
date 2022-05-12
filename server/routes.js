const { URL } = require("url");
const { get } = require("./utils/request");

const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "OPTIONS, GET",
  "Access-Control-Max-Age": 2592000, // 30 days
  "Content-Type": "application/json",
};

module.exports = {
  "": (req, res) => {
    res.writeHead(200, headers);
    res.end(JSON.stringify({ ping: "pong" }));
  },
  users: (req, res) => {
    // TODO: get list of users from "https://jsonplaceholder.typicode.com/users" and return them as JSON
    const users = get("https://jsonplaceholder.typicode.com/users");
    // TODO: add ability to filter by email - req.body.get("email")
    res.writeHead(200, headers);
    res.end(JSON.stringify({ users }));
  },
};
