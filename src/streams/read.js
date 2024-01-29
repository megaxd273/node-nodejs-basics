import { createReadStream } from 'fs';
import { pipeline } from 'stream/promises';
import { join } from 'path';

const read = async () => {
  await pipeline(
    createReadStream(
      join(process.cwd(), 'src', 'streams', 'files', 'fileToRead.txt')
    ),
    process.stdout
  );
};

await read();
