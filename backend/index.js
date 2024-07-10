const express = require("express");
const app = express();
const { DBConnection } = require("./database/db.js");
const User = require("./models/Users.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const dotenv = require("dotenv");
const cors = require("cors");
const { generateFilePath } = require("./compilerFiles/generateFilePath.js");
const { executeCpp } = require("./compilerFiles/executeCpp.js");
const { generateInputPath } = require("./compilerFiles/generateInputPath.js");

dotenv.config();

//middldewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//connect to database
DBConnection();

app.get("/", (req, res) => {
  res.send("Welcome to the Online Judge");
});
app.post("/register", async (req, res) => {
  console.log(req);
  try {
    const { firstname, lastname, email, password } = req.body;
    //check if all the details have been filled by the user
    if (!(firstname && lastname && email && password)) {
      return res.status(400).send("Please fill all the details");
    }
    //check if email has already been used
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).send("User already exists");
    }
    // encrypt password
    const hashPassword = bcrypt.hashSync(password, 10);
    const user = await User.create({
      firstname,
      lastname,
      email,
      password: hashPassword,
    });
    // since we are using env again we will import write const dotenv statement again
    const token = jwt.sign({ id: user._id, email }, process.env.SECRET_KEY, {
      expiresIn: "1h",
    });
    user.token = token;
    user.password = undefined;
    res.status(201).json({
      message: "You have successfully registered",
      user,
    });
  } catch (error) {
    console.error(error);
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!(email && password)) {
      return res
        .status(400)
        .send("Please fill the email and password credentials");
    }

    const userCheck = await User.findOne({ email }); // findOne returns user(from document) according to property:email
    if (userCheck == undefined) {
      return res.status(400).send("This email has not been registered");
    }

    //check for correct password
    bcrypt.compare(password, userCheck.password, function (berr, bres) {
      if (berr) {
        console.log(berr);
      }
      if (bres) {
        return res.status(201).send("You are logged in!");
      } else {
        // response is OutgoingMessage object that server response http request
        return res.status(400).json({
          success: false,
          message: "Incorrect password for this email",
        });
      }
    });
  } catch (error) {
    console.log(error);
  }
  //generate jwt token for accessing pages(expires in 1h)
  const token = jwt.sign({ id: User._id }, process.env.SECRET_KEY, {
    expiresIn: "1h",
  });
});

app.post("/compiler", async (req, res) => {
  const language = req.body.language;
  const code = req.body.code;
  const input = req.body.input;
  if (!code) {
    return res
      .status(400)
      .json({ success: false, message: "Enter non-empty code" });
  }
  try {
    const filepath = await generateFilePath(language, code);
    const inputpath = await generateInputPath(input);
    const output = await executeCpp(filepath, inputpath);
    res.json({ output });
  } catch (err) {
    console.log(err.error);
    return res.status(500).json({ success: false, message: "error here" });
  }
});

app.listen(8000, () => {
  console.log("Server running on port: 8000");
});
