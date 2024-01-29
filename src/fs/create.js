import { writeFile, access, constants } from 'node:fs/promises';
import { join } from 'node:path';
const create = async () => {
  const fileName = 'fresh.txt';
  const filePath = join(process.cwd(), 'src', 'fs', 'files', fileName);
  try {
    await access(filePath, constants.F_OK).then(() => {
      throw new Error('FS operation failed');
    });
  } catch (error) {
    if (error && error.code === 'ENOENT') {
      await writeFile(filePath, 'I am fresh and young');
    } else {
      console.log(error);
    }
  }
};
await create();
