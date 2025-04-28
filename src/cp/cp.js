import { fork } from "child_process";

const dirname = import.meta.dirname;

const spawnChildProcess = async (args) => {
  const child = fork(`${dirname}/files/script.js`, args, {
    stdio: ["pipe", "pipe", "inherit", "ipc"],
  });
  process.stdin.pipe(child.stdin);
  child.stdout.pipe(process.stdout);
};
spawnChildProcess(["ls", "als"]);
