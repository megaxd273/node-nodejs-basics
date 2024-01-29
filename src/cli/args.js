const parseArgs = () => {
  const args = process.argv.slice(2);
  console.log(args);
  args.forEach((v, i) => {
    if (v.startsWith('--')) {
      console.log(`${v} is ${args[i + 1]}`);
    }
  });
};

parseArgs();
