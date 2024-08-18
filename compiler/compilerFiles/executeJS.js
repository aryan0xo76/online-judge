const fs = require("fs");
const path = require("path");
const { exec } = require("child_process");
const { stdin } = require("process");

const executeJS = async (filePath, inputFile) => {
  const execCommand = `node ${filePath}`;
  return new Promise((resolve, reject) => {
    const process = exec(execCommand, (err, stdout, stderr) => {
      if (err) {
        reject(err);
      }
      if (stderr) {
        reject(stderr);
      }
      resolve(stdout);
    });
    process.stdin.write(inputFile);
    process.stdin.end();

  });
};

module.exports = { executeJS};
