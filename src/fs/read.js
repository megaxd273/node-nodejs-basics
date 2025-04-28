import fs from "node:fs/promises";
const dirname = import.meta.dirname;
const read = async () => {
  fs.readFile(`${dirname}/files/fileToRead.txt`, { encoding: "utf-8" }).then(
    console.log,
    () => {
      throw new Error("FS operation failed");
    }
  );
};

await read();
