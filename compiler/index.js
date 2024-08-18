const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const { generateFilePath } = require("./compilerFiles/generateFilePath.js");
const { executeCpp } = require("./compilerFiles/executeCpp.js");
const { executeJava } = require("./compilerFiles/executeJava.js");
const { executeJS } = require("./compilerFiles/executeJS.js");
const { executePython } = require("./compilerFiles/executePython.js");
const { generateInputPath } = require("./compilerFiles/generateInputPath.js");

//middldewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.post("/", async (req, res) => {
  const { language = "cpp", code, input } = req.body;
  // console.log(language);
  // console.log(code);
  // console.log(input);
  console.log(req);
  if (!code) {
    return res
      .status(400)
      .json({ success: false, message: "Enter non-empty code" });
  }
  try {
    const filepath = await generateFilePath(language, code);
    const inputpath = await generateInputPath(input);
    // inputpath.toString();
    let output;
    if (language == "cpp") {
      output = await executeCpp(filepath, inputpath);
    } else if (language == "java") {
      output = await executeJava(filepath, inputpath);
    } else if (language == "javascript") {
      output = await executeJS(filepath, inputpath);
    } else if (language == "python") {
      output = await executePython(filepath, inputpath);
    }
    // console.log(output.object);
    res.json({ output });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ success: false, message: "error here" });
  }
});
app.post("/judge", async (req, res) => {
  const { language = "cpp", code, input } = req.body;

  if (!code) {
    return res
      .status(400)
      .json({ success: false, message: "Enter non-empty code" });
  }
  try {
    const filepath = await generateFilePath(language, code);
    const inputpath = await generateInputPath(input);
    let output;
    if (language == "cpp") {
      output = await executeCpp(filepath, inputpath);
    } else if (language == "java") {
      output = await executeJava(filepath, inputpath);
    } else if (language == "javascript") {
      output = await executeJS(filepath, inputpath);
    } else if (language == "python") {
      output = await executePython(filepath, inputpath);
    }
    res.json({ response: output });
  } catch (err) {
    // console.log(err.error);
    return res.status(500).json({ success: false, message: "error here" });
  }
});

app.listen(process.env.port, () => {
  //to run compiler on free port in case 8800 is being used by some other service
  console.log(`Server running on port: ${process.env.port}`);
});
