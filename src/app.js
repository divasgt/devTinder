const express = require("express");

const app = express();

// this will only handle GET call to /user
app.get("/user", (req, res) => {
  res.send({ firstName: "Divas", lastName: "Verma" });
});

app.post("/user", (req, res) => {
  // saving data to DB
  res.send("Data successfully saved to the database!");
});

app.delete("/user", (req, res) => {
  res.send("Deleted successfully!");
});

// this will match all the HTTP method API calls to test, like GET, POST
app.use("/test", (req, res) => {
  res.send("Hello from the server!");
});

app.listen(4000, () => {
  console.log("Server is successfully listening on port 4000...");
});
