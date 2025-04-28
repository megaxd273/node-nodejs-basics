import { Worker } from "worker_threads";
import { cpus } from "os";

const dirname = import.meta.dirname;
const createWorker = (i) => {
  return new Promise((resolve, rejecte) => {
    const worker = new Worker(`${dirname}/worker.js`, {
      workerData: { count: i + 10 },
    });
    worker.on("message", (data) => {
      resolve({ status: "resolved", data });
    });
    worker.on("error", () => {
      rejecte({ status: "rejected", data: null });
    });
  });
};

const performCalculations = async () => {
  const workers = [];
  const workerCount = cpus().length;
  for (let i = 0; i < workerCount; i++) {
    workers.push(createWorker(i));
  }
  const result = await Promise.all(workers);
  console.log(result);
};

await performCalculations();
