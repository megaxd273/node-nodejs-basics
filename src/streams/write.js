import { createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';
import { join } from 'path';

const write = async () => {
  await pipeline(
    process.stdin,
    createWriteStream(
      join(process.cwd(), 'src', 'streams', 'files', 'fileToWrite.txt')
    )
  );
};

await write();
