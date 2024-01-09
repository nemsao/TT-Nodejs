import express from "express";
const app = express();

app.use((req, res, next) => {
  console.log(Date.now());
});

app.use("/user/:id", (req, res, next) => {
  console.log(req.params.id);
});

app.listen(8000);
