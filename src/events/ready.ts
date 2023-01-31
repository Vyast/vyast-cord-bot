import { ActivityType, type Client } from "discord.js";

export const ready = async (client: Client<true>): Promise<void> => {
  client.user.setPresence({
    activities: [{ name: "The Clouds", type: ActivityType.Watching }],
    status: "online",
  });

  console.log("\x1b[36m", `${client.user.tag} - bot online.`, "\x1b[0m");
};
