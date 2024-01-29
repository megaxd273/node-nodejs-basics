import { Worker } from 'worker_threads';
import { cpus } from 'os';
import { join } from 'path';

const compute = (path, data) => {
  return new Promise((res, rej) => {
    const worker = new Worker(path, { workerData: data });
    worker.on('message', (msg) => {
      res({ status: 'resolved', data: msg });
    });
    worker.on('error', (msg) => {
      res({ status: 'error', data: null });
    });
  });
};

const performCalculations = async () => {
  const arr = [];
  for (let i = 0; i < cpus().length; i++) {
    arr.push(compute(join(process.cwd(), 'src', 'wt', 'worker.js'), i + 10));
  }
  console.log(await Promise.all(arr));
};

await performCalculations();
