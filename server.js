// https://expressjs.com/

const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors()); // 미들웨어 모두에게 오픈

app.get("/", (req, res) => {
  // res.send("Hello World!");
  res.send("Bye Earth!");
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
