import fs from "node:fs/promises";
const dirname = import.meta.dirname;

const remove = async () => {
  fs.rm(`${dirname}/files/fileToRemove.txt`).catch(() => {
    throw new Error("FS operation failed");
  });
};

await remove();
