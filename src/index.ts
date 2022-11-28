import { Client, Events, GatewayIntentBits, REST, Routes } from "discord.js";
import { env } from "./env";
import { interactionCreate } from "./events/interactionCreate";
import { ready } from "./events/ready";
import Commands from "./cmds";

(async () => {
  try {
    console.log("\x1b[33m", `Found ${Commands.length} slash commands. Registering...`, "\x1b[0m");

    const rest = new REST({ version: "10" }).setToken(env.BOT_TOKEN);

    const data = (await rest.put(Routes.applicationCommands(env.APP_ID), {
      body: Commands.map((c) => c.data.toJSON()),
    })) as any;

    console.log("\x1b[32m", `Successfully registered ${data.length} slash commands.`, "\x1b[0m");
  } catch (error: any) {
    console.log(error.message);
  }
})();

export const Bot = new Client({
  intents: [GatewayIntentBits.Guilds],
});

Bot.once(Events.ClientReady, ready);
Bot.on(Events.InteractionCreate, interactionCreate);

Bot.login(env.BOT_TOKEN);
