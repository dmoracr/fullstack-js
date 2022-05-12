const http = require("http");

const router = require("./utils/router");
const routes = require("./routes");

const port = process.env.PORT || 8080

const server = http.createServer(router(routes));
server.listen(port, "localhost", () => {
  console.log(`Server is running @ ${port}`);
});
