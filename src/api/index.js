const express = require("express");
const data = require("./priorities.json");
const cors = require("cors");

const app = express();
const PORT = 8080;

app.use(
  cors({
    origin: "*",
  })
);

app.get("/priorities", (req, res) => {
  res.status(200).json(data);
});
app.listen(PORT, () => console.log("alive"));
