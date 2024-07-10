const fs = require('fs');
const path = require('path');
const { v4: uuid } = require('uuid');

const dirInputs = path.join(__dirname, 'inputs');
// exact same process as .cpp file
if (!fs.existsSync(dirInputs)) {
    fs.mkdirSync(dirInputs, { recursive: true });
}

const generateInputPath = async (input) => {
    const uniqueID = uuid();
    const inputFilename = `${uniqueID}.txt`;
    const inputFilePath = path.join(dirInputs, inputFilename);
    await fs.writeFileSync(inputFilePath, input);
    return inputFilePath;
};

module.exports = {generateInputPath};