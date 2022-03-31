const { get: HttpsGet } = require("https");

const get = (url) =>
  new Promise((resolve, reject) => {
    HttpsGet(url, (response) => {
      let data = "";

      response.on("data", (chunk) => {
        data += chunk;
      });

      response.on("end", () => {
        resolve(JSON.parse(data));
      });
    }).on("error", (err) => {
      reject(err);
    });
  });

module.exports = {
  get,
};
