var httpProxy = require("http-proxy");

const express = require("express");

const app = express();

var proxy = new httpProxy.createProxyServer({
  target: {
    host: "localhost",
    port: 9015,
  },
});

app.get("*", (req, res) => {
  if (false) {
    res.send("ok");
  } else {
    proxy.web(req, res);
  }
});

// var proxyServer = http.createServer( (req, res) => {
//     res.send({'dox':'ddd'})
//     proxy.web(req, res);
// });

app.listen(8015, () => {
  console.log("proxy open");
});
