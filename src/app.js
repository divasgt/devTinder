const express = require("express");

const app = express();

// this function inside is called as Request Handler
app.use("/", (req, res) => {
  res.send("Namaste from the dashboard!");
});

app.use("/test", (req, res) => {
  res.send("Hello from the server!");
});

app.listen(4000, () => {
  console.log("Server is successfully listening on port 4000...");
});

// require("express")().listen(3000);
