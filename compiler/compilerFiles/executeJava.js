const fs = require('fs');
const path = require('path');
const {exec} = require('child_process');

const executeJava = async (filePath,inputFile)=>{

    return new Promise((resolve,reject)=>{
        const process = exec(`java ${filePath}`,(err,stdout,stderr)=>{
            if(err){
                reject(err);
            }
            if(stderr){
                reject(stderr);
            }
            resolve(stdout);
        });
        process.stdin.write(inputFile);
        process.stdin.end();
    })
}

module.exports = {executeJava};