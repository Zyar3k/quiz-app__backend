import express from "express";
const router = express.Router();

// import controllers
import * as controller from "../controllers/controller.js";

// Questions Routes
router
  .route("/questions")
  .get(controller.getQuestions)
  .post(controller.insertQuestions)
  .delete(controller.dropQuestions);

router
  .route("/result")
  .get(controller.getResult)
  .post(controller.storeResult)
  .delete(controller.dropResult);
export default router;
