import { CUSTOM_IDS } from "@/data/custom-ids";
import {
  ActionRowBuilder,
  ModalActionRowComponentBuilder,
  ModalBuilder,
  TextInputBuilder,
  TextInputStyle,
  type ButtonInteraction,
  type CacheType,
} from "discord.js";

const passwordInput = new TextInputBuilder()
  .setCustomId(CUSTOM_IDS.password_modal_input)
  .setLabel("Enter the password")
  .setRequired(true)
  .setStyle(TextInputStyle.Short);

const modal = new ModalBuilder()
  .setCustomId(CUSTOM_IDS.password_modal)
  .setTitle("Enter the Password")
  .setComponents(
    new ActionRowBuilder<ModalActionRowComponentBuilder>().addComponents(
      passwordInput
    )
  );

export const verify = async (interaction: ButtonInteraction<CacheType>) => {
  await interaction.showModal(modal);
};
