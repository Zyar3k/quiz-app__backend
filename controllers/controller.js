// get all questions
export async function getQuestions(req, res) {
  res.json("Questions api get request");
}

// insert all questions
export async function insertQuestions(req, res) {
  res.json("Questions api post request");
}

// delete all questions
export async function dropQuestions(req, res) {
  res.json("Questions api delete request");
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
