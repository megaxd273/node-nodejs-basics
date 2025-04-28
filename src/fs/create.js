import fs from "node:fs/promises";
const dirname = import.meta.dirname;

const create = async () => {
  fs.stat(`${dirname}/files/fresh.txt`).then(
    () => {
      throw new Error("FS operation failed");
    },
    () => {
      fs.writeFile(`${dirname}/files/fresh.txt`, "I am fresh and young");
    }
  );
};
await create();
