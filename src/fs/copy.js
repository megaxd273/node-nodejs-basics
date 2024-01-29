import {
  writeFile,
  access,
  constants,
  readFile,
  mkdir,
  opendir,
} from 'node:fs/promises';
import { join } from 'node:path';
const copy = async () => {
  const filesPath = join(process.cwd(), 'src', 'fs', 'files');
  const clonePath = join(process.cwd(), 'src', 'fs', 'files_copy');
  try {
    const files = await opendir(filesPath).catch(() => {
      throw new Error('FS operation failed');
    });
    await mkdir(clonePath).catch(() => {
      throw new Error('FS operation failed');
    });
    for await (const file of files) {
      const fileContent = await readFile(join(filesPath, file.name));

      await writeFile(join(clonePath, file.name), fileContent);
    }
  } catch (error) {
    console.log(error);
  }
};

await copy();
