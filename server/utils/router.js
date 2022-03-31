const router = (routes) => {
  return (req, res) => {
    const url = req.url.replace(/^\//, "");
    if (url in routes) {
      routes[url](req, res);
    } else {
      res.writeHead(404);
      res.end("Not found");
    }
  };
};

module.exports = router;
