const router = (routes) => {
  return (req, res) => {
    const [uri, queryString] = req.url.split("?");
    const url = uri.replace(/^\//, "");

    if (url in routes) {
      req.body = new URLSearchParams(queryString);
      routes[url](req, res);
    } else {
      res.writeHead(404);
      res.end("Not found");
    }
  };
};

module.exports = router;
