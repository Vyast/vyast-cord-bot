import { type ButtonInteraction, type CacheType } from "discord.js";
import { CUSTOM_IDS } from "@/data/custom-ids";
import { verify } from "./verify";

export const buttonInteraction = async (
  interaction: ButtonInteraction<CacheType>
): Promise<void> => {
  if (interaction.customId === CUSTOM_IDS.verify) {
    await verify(interaction);
  }
};
