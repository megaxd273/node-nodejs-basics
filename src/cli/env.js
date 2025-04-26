const parseEnv = () => {
  for (const key in process.env) {
    if (key.includes("RSS_")) {
      console.log(`${key}=${process.env[key]}`);
    }
  }
};

parseEnv();
