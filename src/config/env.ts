import dotenv from "dotenv";
import { cleanEnv, host, port, str } from "envalid";

dotenv.config();

const env = cleanEnv(process.env, {
  NODE_ENV: str({
    devDefault: "development",
    choices: ["development", "production"],
  }),
  HOST: host({ devDefault: "localhost" }),
  PORT: port({ devDefault: 5000 }),
});

export default env;
