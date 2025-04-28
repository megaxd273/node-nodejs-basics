import { createReadStream } from "fs";
import { stdout } from "process";

const dirname = import.meta.dirname;

const read = async () => {
    const input = createReadStream(`${dirname}/files/fileToRead.txt`)
    input.pipe(stdout)
};

await read();