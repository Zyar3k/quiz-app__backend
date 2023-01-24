import express from "express";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";
import router from "./router/route.js";

const app = express();

// middleware
app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());
dotenv.config();

// app port
const port = process.env.PORT || 8080;

// routes
app.use("/api", router);

app.get("/", (req, res) => {
  try {
    res.json("Get Req");
  } catch (error) {
    res.json(error);
  }
});

app.listen(port, () => {
  console.log(`Server connected to http://localhost:${port}`);
});
