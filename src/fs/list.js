import { readdir } from 'node:fs/promises';
import { join } from 'node:path';
const list = async () => {
  const folderPath = join(process.cwd(), 'src', 'fs', 'files');
  console.log(
    await readdir(folderPath).catch(() => {
      throw new Error('FS operation failed');
    })
  );
};

await list();
