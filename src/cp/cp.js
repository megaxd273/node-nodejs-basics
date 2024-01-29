import { fork } from 'child_process';
import { join } from 'path';

const spawnChildProcess = async (args) => {
  const script = fork(
    join(process.cwd(), 'src', 'cp', 'files', 'script.js'),
    args
  );
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['text', 'txt2', 'CLOSE']);
