import { ActivityType, Client } from "discord.js";

export async function ready(client: Client<true>) {
  client.user.setPresence({
    activities: [{ name: "the clouds", type: ActivityType.Watching }],
    status: "online",
  });

  console.log("\x1b[36m", `${client.user.tag} - bot online.`, "\x1b[0m");
}
