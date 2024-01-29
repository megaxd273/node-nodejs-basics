import { createHash } from 'crypto';
import { pipeline } from 'stream/promises';
import fs from 'node:fs';
import { join } from 'path';

const calculateHash = async () => {
  const hash = createHash('sha256');
  await pipeline(
    fs.createReadStream(
      join(process.cwd(), 'src', 'hash', 'files', 'fileToCalculateHashFor.txt')
    ),
    hash.digest('hex'),
    process.stdout
  );
};

await calculateHash();
