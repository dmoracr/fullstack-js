const router = (routes) => {
  return (req, res) => {
    const [url, queryString] = req.url.split("?");
    const uri = url.replace(/^\//, "");

    if (uri in routes) {
      req.body = new URLSearchParams(queryString);
      routes[uri](req, res);
    } else {
      res.writeHead(404);
      res.end("Not found");
    }
  };
};

module.exports = router;
