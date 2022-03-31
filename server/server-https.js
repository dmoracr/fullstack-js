const https = require("https");
const fs = require("fs");
const path = require("path");

const router = require("./utils/router");
const routes = require("./routes");

const httpsOptions = {
  key: fs.readFileSync(path.join(__dirname, "./security/cert-key.pem")),
  cert: fs.readFileSync(path.join(__dirname, "./security/cert.pem")),
};

const server = https.createServer(httpsOptions, router(routes));
server.listen(3000, "localhost", () => {
  console.log("Server is running");
});
