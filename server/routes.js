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
    // TODO: add ability to filter by email
    res.writeHead(501, headers);
    res.end();
  },
};
