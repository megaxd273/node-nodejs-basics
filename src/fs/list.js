import fs from "node:fs/promises";
const dirname = import.meta.dirname;

const list = async () => {
  fs.readdir(`${dirname}/files`).then(console.log, () => {
    throw new Error("FS operation failed");
  });
};

await list();
