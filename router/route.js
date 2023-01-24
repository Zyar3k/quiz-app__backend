import express from "express";
const router = express.Router();

// Questions Routes
router.get("/questions", (req, res) => {
  res.json("Questions api get request");
});

export default router;
