import fs from 'node:fs/promises';
import { join } from 'node:path';
const rename = async () => {
  const filePath = join(
    process.cwd(),
    'src',
    'fs',
    'files',
    'wrongFilename.txt'
  );
  const correctPath = join(
    process.cwd(),
    'src',
    'fs',
    'files',
    'properFilename.md'
  );
  try {
    await fs.access(correctPath, fs.constants.F_OK).then(() => {
      throw new Error('FS operation failed');
    });
  } catch (error) {
    if (error && error.code === 'ENOENT') {
      await fs.rename(filePath, correctPath).catch(() => {
        throw new Error('FS operation failed');
      });
    } else {
      console.log(error);
    }
  }
};

await rename();
