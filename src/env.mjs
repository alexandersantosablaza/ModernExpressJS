import fs from "fs";
import path from "path";
// Function to parse .env file
const parseEnv = (filePath) =>
{
   const env = {};
   const data = fs.readFileSync(filePath, 'utf8');
   data.split('\n').forEach(line =>
   {
      const [key, value] = line.split('=');
      if (key && value)
      {
         env[key.trim()] = value.trim();
      }
   });
   return env;
};

// Load environment variables from .env
const envFilePath = path.resolve(process.cwd(), '.env');
const envConfig = parseEnv(envFilePath);

// Set process.env variables
Object.keys(envConfig).forEach(key =>
{
   process.env[key] = envConfig[key];
});

export default envConfig;