const http = require("http");

const router = require("./utils/router");
const routes = require("./routes");

const server = http.createServer(router(routes));
server.listen(3000, "localhost", () => {
  console.log("Server is running");
});
