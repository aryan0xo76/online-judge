const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    problem_name: {
      type: String,
      required: true,
    },
    problem_description: {
      type: String,
      required: true,
    },
    input_tests: {
      type: [String],
      required: true,
    },
    output_tests: {
      type: [String],
      required: true,
    },
    hidden_input_tests: {
      type: [String],
      required: true,
    },
    hidden_output_tests: {
      type: [String],
      required: true,
    },
  }
);
module.exports = mongoose.model("Problemo", userSchema);
