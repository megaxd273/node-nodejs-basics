import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

const read = async () => {
  const filePath = join(process.cwd(), 'src', 'fs', 'files', 'fileToRead.txt');
  console.log(
    await readFile(filePath, { encoding: 'utf-8' }).catch(() => {
      throw new Error('FS operation failed');
    })
  );
};

await read();
