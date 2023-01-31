import "dotenv/config";
import { z } from "zod";

const envVariables = z.object({
  NODE_ENV: z.enum(["development", "test", "production"]),
  APP_ID: z.string(),
  BOT_TOKEN: z.string(),
  PASSWORD: z.string(),
});

export const env = envVariables.parse(process.env);
