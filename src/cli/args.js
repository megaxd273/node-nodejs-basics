const parseArgs = () => {
  const args = process.argv.slice(2);
  const map4ik = new Map();
  for (let i = 0; i < args.length; i += 2) {
    map4ik.set(args[i], args[i + 1]);
  }
  for (const [key, value] of map4ik) {
    console.log(`${key} is ${value}`);
  }
};

parseArgs();
