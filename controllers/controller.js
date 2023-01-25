import Questions from "../models/questionSchema.js";
import Result from "../models/resultSchema.js";
import questions, { answers } from "../database/data.js";

// get all questions
export async function getQuestions(req, res) {
  try {
    const q = await Questions.find();
    res.json(q);
  } catch (error) {
    res.json({ error });
  }
}

// insert all questions
export async function insertQuestions(req, res) {
  try {
    Questions.insertMany(
      {
        questions,
        answers,
      },
      function (err, data) {
        res.json({ msg: "Data saved successfully!" });
      }
    );
  } catch (error) {
    res.json({ error });
  }
}

// delete all questions
export async function dropQuestions(req, res) {
  try {
    await Questions.deleteMany();
    res.json({ msg: "Data deleted successfully!" });
  } catch (error) {
    res.json({ error });
  }
}

// get all results
export async function getResult(req, res) {
  res.json("result api get request");
}

// post all results
export async function storeResult(req, res) {
  res.json("result api post request");
}

// delete all result
export async function dropResult(req, res) {
  res.json("Result api delete request");
}
