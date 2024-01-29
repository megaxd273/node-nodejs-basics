import { Transform } from 'stream';
import { pipeline } from 'stream/promises';

class transoformInput extends Transform {
  _transform(chunk, encoding, callback) {
    try {
      const result = chunk.toString('utf8').split('').reverse().join('');
      callback(null, result);
    } catch (error) {
      callback(error);
    }
  }
}

const transform = async () => {
  const transform = new transoformInput();
  await pipeline(process.stdin, transform, process.stdout);
};

await transform();
