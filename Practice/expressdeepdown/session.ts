import express, { Response, Request } from "express";
import session, { Session } from "express-session";
import { User } from "./module";
const app = express();
declare module "express-session" {
  interface SessionData {
    user: User;
  }
}
app.use(
  session({
    secret: "your-secret-key",
    resave: false,
    saveUninitialized: false,
  })
);

//set sesion
app.use("/session", (req: Request, res: Response, next) => {
  req.session.user = {
    id: 1,
    name: "Hai Nam",
  };
  res.status(200).json({ status: "success" });
});
app.use("/get-session", (req, res, next) => {
  res.status(200).json({ status: "success", session: req.session.user });

  //res.status(500).json({status:"error",message:"no session found"})
});

//delete sesion
// app.use('/delete-session',(req,res,next)=>{
//     if(res.session.User)res.status(200).json({status:'success',session:req.session.user});

//     res.status(500).json({status:"error",message:"no session found"})
// })
app.listen(2000);
