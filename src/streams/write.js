import {  createWriteStream } from "fs";
import { stdin } from "process";

const dirname = import.meta.dirname;

const write = async () => {
    const output = createWriteStream(`${dirname}/files/fileToWrite.txt`)
    stdin.on("data",(data)=>{
        output.write(data)
    })
  
};

await write();