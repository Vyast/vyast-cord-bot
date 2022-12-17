import { Interaction } from "discord.js";
import { chatInputCommand } from "./chatInputCommand";

export async function interactionCreate(
  interaction: Interaction
): Promise<void> {
  if (interaction.isChatInputCommand()) {
    await chatInputCommand(interaction);
  }
}
