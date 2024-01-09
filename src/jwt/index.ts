// @ts-ignore
import { Response, Request, Router } from "express";
// @ts-ignore
const route_jwt = Router();
// @ts-ignore
import * as jwt from "jsonwebtoken";

//settoken
route_jwt.use("/token", (req: Request, res: Response, next) => {
  const jsonToken = jwt.sign("data", "secretkey");
  req.header["authentication"] = { jsontoken: jsonToken };
  res.status(200).json({ message: "Initiate JsonToken Successfully !!" });
});
//get token
route_jwt.use("/get-token", (req: Request, res: Response, next) => {
  if (req.header["authentication"]) {
    //@ts-ignore
    const { jsontoken } = req.header["authentication"];
    res.status(200).json({ status: "success", data: jsontoken });
  } else res.status(500).json({ status: "error", message: "no session found" });
});

module.exports = route_jwt;
