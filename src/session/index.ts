// @ts-ignore
import { Response, Request, Router } from "express";
// @ts-ignore
import { User } from "../module";
// @ts-ignore
const route = Router();
// @ts-ignore
declare module "express-session" {
  interface SessionData {
    user: User;
  }
}

route.use("/session", (req: Request, res: Response, next) => {
  req.session.user = {
    id: 1,
    name: "Hai Nam",
  };
  res.status(200).json({ status: "success" });
});

route.use("/get-session", (req: Request, res: Response, next) => {
  if (req.session.user) {
    console.log("name :: trying");
    const { name } = req.session.user;
    console.log("name :: ", name);
    res.status(200).json({ status: "success", session: name });
  } else res.status(500).json({ status: "error", message: "no session found" });
});

//delete sesion
route.use("/delete-session", (req: Request, res: Response, next) => {
  if (req.session.user)
    res.status(200).json({ status: "success", session: req.session.user });

  res.status(500).json({ status: "error", message: "no session found" });
});

module.exports = route;
