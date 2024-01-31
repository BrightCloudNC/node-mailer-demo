import express from "express";
import sendEmail from "./utils/sendEmail.js";
import { emailValidatorMiddleware } from "./middleware/emailValidate.js";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/", emailValidatorMiddleware, async (req, res) => {
  try {
    const { email } = req.body;
    const emailList = email.join();

    sendEmail(emailList, "subject test", "text test");

    return res.send(`message sent`);
  } catch (error) {
    console.error(error);
    res.status(500).send("server error");
  }
});

app.listen(8000, () => {
  console.log("listening on port 8000");
});
