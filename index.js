const express = require("express");

const app = express();
const port = 3000;

app.get("/", async (req, res) => {
  const d = "<h1>Hello World!</h1>";
  res.status(200).send(d);
});


app.listen(port, () => {
  console.log(`SERVER Running at ${port}`);
});
