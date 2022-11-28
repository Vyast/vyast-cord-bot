import "dotenv/config";
import { cleanEnv, str } from "envalid";

export const env = cleanEnv(process.env, {
  APP_ID: str(),
  GUILD_ID: str(),
  BOT_TOKEN: str(),
});
