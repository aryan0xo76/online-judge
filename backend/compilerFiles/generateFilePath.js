const fs = require ('fs');
const path = require('path');
const {v4:uuid} = require('uuid');



const dirCodes = path.join(__dirname,'codes'); //__ dirname is keyword for parent directory
if(!fs.existsSync(dirCodes)){                  // make file directory if it does not exist
    fs.mkdirSync(dirCodes,{recursive:true});
}

const generateFilePath = async (language,code)=>{
    const uniqueID = uuid();
    const fileName = `${uniqueID}.${language}`;
    console.log(fileName);
    const filePath = path.join(dirCodes,fileName);
     fs.writeFileSync(filePath,code); //writeFileSync -> (write in what path, write what text)
    return filePath;
};

module.exports= {generateFilePath};