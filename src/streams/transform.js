import { stdin, stdout } from "process";
import { Transform } from "stream";
import { pipeline } from "stream/promises";

const dirname = import.meta.dirname;

const reverseTransform = new Transform({
  transform(chunk, encoding, cb) {
    cb(null, String(chunk).split("").reverse().join(""));
  },
});

const transform = async () => {
  await pipeline(stdin, reverseTransform, stdout);
};

await transform();
