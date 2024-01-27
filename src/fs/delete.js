import { rm } from 'node:fs/promises';
import { join } from 'node:path';

const remove = async () => {
  const filePath = join(
    process.cwd(),
    'src',
    'fs',
    'files',
    'fileToRemove.txt'
  );
  await rm(filePath).catch(() => {
    throw new Error('FS operation failed');
  });
};

await remove();
