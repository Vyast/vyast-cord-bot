import { type Interaction } from "discord.js";
import { button } from "./button";
import { chatInputCommand } from "./chatInputCommand";

export async function interactionCreate(
  interaction: Interaction
): Promise<void> {
  if (interaction.isChatInputCommand()) {
    await chatInputCommand(interaction);
  } else if (interaction.isButton()) {
    await button(interaction);
  }
}
