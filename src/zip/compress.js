import { pipeline } from 'stream/promises';
import { createReadStream, createWriteStream } from 'fs';
import { join } from 'path';
import { createGzip } from 'zlib';

const compress = async () => {
  await pipeline(
    createReadStream(
      join(process.cwd(), 'src', 'zip', 'files', 'fileToCompress.txt')
    ),
    createGzip(),
    createWriteStream(join(process.cwd(), 'src', 'zip', 'files', 'archive.gz'))
  );
};

await compress();
