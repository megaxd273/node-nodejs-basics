import { createReadStream, createWriteStream } from "fs";
import { pipeline } from "stream/promises";
import { createGzip } from "zlib";

const dirname = import.meta.dirname;

const compress = async () => {
  const input = createReadStream(`${dirname}/files/fileToCompress.txt`);
  const transform = createGzip();
  const output = createWriteStream(`${dirname}/files/archive.gz`);
  await pipeline(input, transform, output);
};

await compress();
