import express from "express";
import axios from "axios";
import { userEmail } from "./location.js";
import { user } from "../models/user.js";

const router = express.Router();

router.get("/api/signup/interests", (req, res) => {
  res
    .status(200)
    .send(
      '<form action="/signup/interests" method="post"><input type="text" placeholder="interests" name="interests" /><button type="submit">Subbmit</button></form>'
    );
});

router.post("/api/signup/interests", async (req, res) => {
  const { roles } = req.body;
  console.log(roles);
  try {
    const newUser = await user.updateOne(
      { email: userEmail.email },
      {
        $set: {
          roles: roles,
        },
      }
    );
    res.status(200).send({ success: true, message: "Roles Set Successfully" });
  } catch (error) {
    res.send({ success: false, message: error });
  }
  res.end();
});

export { router as interests };
