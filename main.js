const express = require("express");
const cors = require("cors");
const { createProxyMiddleware } = require("http-proxy-middleware");

const { get_env } = require("./get_env");

const API_URL = get_env("API_ENDPOINT");
const CLIENT_ID = get_env("CLIENT_ID");
const CLIENT_SECRET = get_env("CLIENT_SECRET");

const app = express();

app.use(cors());

app.use(
  "/",
  createProxyMiddleware({
    target: API_URL,
    changeOrigin: true,
    logLevel: "debug",
    headers: {
      "CF-Access-Client-Id": CLIENT_ID,
      "CF-Access-Client-Secret": CLIENT_SECRET,
    },
  })
);

app.listen(3001, () => {
  console.log("Proxy server listening on port 3001");
});
