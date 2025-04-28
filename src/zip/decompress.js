import { createReadStream, createWriteStream } from "fs";
import { pipeline } from "stream/promises";
import { createGunzip } from "zlib";

const dirname = import.meta.dirname;

const decompress = async () => {
  const input = createReadStream(`${dirname}/files/archive.gz`);
  const transform = createGunzip();
  const output = createWriteStream(`${dirname}/files/fileToCompress.txt`);
  await pipeline(input, transform, output);
};

await decompress();
