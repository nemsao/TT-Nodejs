"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var express_session_1 = require("express-session");
var app = (0, express_1.default)();
app.use(
  (0, express_session_1.default)({
    secret: "your-secret-key",
    resave: false,
    saveUninitialized: false,
  })
);
//set sesion
app.use("/session", function (req, res, next) {
  req.session.User = {
    id: 1,
    name: "Hai Nam",
  };
  res.status(200).json({ status: "success" });
});
//get sesion
app.use("/get-session", function (req, res, next) {
  if (res.session.User)
    res.status(200).json({ status: "success", session: req.session.User });
  res.status(500).json({ status: "error", message: "no session found" });
});
//delete sesion
app.use("/delete-session", function (req, res, next) {
  if (res.session.User)
    res.status(200).json({ status: "success", session: req.session.User });
  res.status(500).json({ status: "error", message: "no session found" });
});
app.listen(2000);
