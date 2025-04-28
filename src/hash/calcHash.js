import { createReadStream } from "fs";
import { createHash } from "crypto";
import { stdout } from "process";
import { pipeline } from "stream/promises";

const dirname = import.meta.dirname;

const calculateHash = async () => {
  const hash = createHash("sha256");
  const dest = createReadStream(`${dirname}/files/fileToCalculateHashFor.txt`);

  hash.setEncoding("hex");
  await pipeline(dest, hash, stdout);
};

await calculateHash();
