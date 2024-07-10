const fs = require("fs");
const path = require("path");
const { exec } = require("child_process");
const { v4: uuid } = require("uuid");
// const dir = __dirname;
// const __dirname = path.resolve();
const outputPath = path.join(__dirname, "outputs"); //__dirname is keyword for parent directory

if (!fs.existsSync(outputPath)) {
  // make file directory if it does not exist
  fs.mkdirSync(outputPath, { recursive: true });
}

const executeCpp = (filePath,inputPath) => {
  console.log(filePath);
 
  const uniqueID = path.basename(filePath).split(".")[0];
  const executableName = `${uniqueID}.exe`; ///xyz.exe
  const outPath = path.join(outputPath, executableName); // outputs/xyz.exe

    // console.log(filePath);
    // console.log(outputPath);
    // console.log(executableName);
  // use && to execute multiple commands

  return new Promise((resolve, reject) => {
    exec(
      `g++ ${filePath} -o ${outPath} && cd ${outputPath} && .\\${executableName} < ${inputPath}`,
      (error, stdout, stderr) => {
        if (error) {
          reject({ error, stderr });
        }
        if (stderr) {
          reject(stderr);
        }
        resolve(stdout);
      }
    );
  });
};

module.exports = {executeCpp};
