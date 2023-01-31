import { buttonInteraction } from "@/interactions/button";
import { chatInputCommandInteraction } from "@/interactions/chat-input-command";
import { modalSubmitInteraction } from "@/interactions/modal-submit";
import { stringSelectMenuInteraction } from "@/interactions/string-select-menu";
import { type Interaction } from "discord.js";

export const interactionCreate = async (
  interaction: Interaction
): Promise<void> => {
  if (interaction.isButton()) {
    await buttonInteraction(interaction);
  } else if (interaction.isChatInputCommand()) {
    await chatInputCommandInteraction(interaction);
  } else if (interaction.isModalSubmit()) {
    await modalSubmitInteraction(interaction);
  } else if (interaction.isStringSelectMenu()) {
    await stringSelectMenuInteraction(interaction);
  }
};
