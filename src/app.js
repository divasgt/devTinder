const express = require("express");

const app = express();

// these all below perfectly valid syntax, all will work the same way. (passing route handler functions in Array) and We can write as many route handlers as we want. Not just in app.use, but in app.get, app.post, in all.
// app.use("/route", rH1, rH2, rH3, rH4, rH5)
// app.use("/route", [rH1, rH2, rH3, rH4, rH5])
// app.use("/route", [rH1, rH2, rH3], rH4, rH5)
// app.use("/route", rH1, [rH2, rH3], rH4, rH5)

// if we don't send any response in route handler function, then the request will keep going or hang, and no output.
// if we already sent a response, and then we sent another response in next route handler, then it wil give error, that response already sent, and so connection is closed, and response again will not be sent.
// if we wrote next() but there is no next route handler function passed and we haven't sent any response yet, then it will give error in client sede cannot get /route

app.use(
  "/user",
  (req, res, next) => {
    console.log("Handling the route user!!");
    // res.send("Response!!");
    // when we call this next function, then next route handler function is called.
    next();
  },
  (req, res, next) => {
    console.log("Handling the route user 2!!");
    // res.send("2nd Response!!");
    next();
  },
  (req, res, next) => {
    console.log("Handling the route user 3!!");
    res.send("3rd Response!!");
    next();
  },
);

app.listen(4000, () => {
  console.log("Server is successfully listening on port 4000...");
});
