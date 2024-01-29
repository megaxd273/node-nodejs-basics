import { createGunzip } from 'zlib';
import { pipeline } from 'stream/promises';
import { createReadStream, createWriteStream } from 'fs';
import { join } from 'path';
const decompress = async () => {
  await pipeline(
    createReadStream(join(process.cwd(), 'src', 'zip', 'files', 'archive.gz')),
    createGunzip(),
    createWriteStream(
      join(process.cwd(), 'src', 'zip', 'files', 'fileToCompress.txt')
    )
  );
};

await decompress();
