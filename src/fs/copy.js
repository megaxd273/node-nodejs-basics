import fs from "node:fs/promises";
const dirname = import.meta.dirname;

const copy = async () => {
  fs.cp(`${dirname}/files`, `${dirname}/files_copy`, {
    recursive: true,
    errorOnExist: true,
    force: false,
  }).catch(() => {
    throw new Error("FS operation failed");
  });
};

await copy();
