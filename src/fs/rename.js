import fs, { constants } from "node:fs/promises";
const dirname = import.meta.dirname;

const rename = async () => {
  fs.cp(
    `${dirname}/files/wrongFilename.txt`,
    `${dirname}/files/properFilename.md`,
    {
      force: false,
      errorOnExist: true,
    }
  ).catch(() => {
    throw new Error("FS operation failed");
  });
};

await rename();
