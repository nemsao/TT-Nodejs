// @ts-ignore
import express from "express";
// @ts-ignore
import session from "express-session";
const app = express();

const route = require("./session");
const route_jwt = require("./jwt");
app.use(
  session({
    secret: "your-secret-key",
    resave: false,
    saveUninitialized: false,
  })
);

// session
app.use("/", route);
//jwt
app.use("/", route_jwt);
app.listen(2000, () => {
  console.log("run server success");
});
