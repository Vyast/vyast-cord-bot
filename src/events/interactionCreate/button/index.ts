import {
  ActionRowBuilder,
  ButtonInteraction,
  ModalActionRowComponentBuilder,
  ModalBuilder,
  TextInputBuilder,
  TextInputStyle,
} from "discord.js";
import { CUSTOM_IDS } from "@/data/custom-ids";

export const button = async (interaction: ButtonInteraction) => {
  if (interaction.customId === CUSTOM_IDS.verify) {
    const modal = new ModalBuilder()
      .setCustomId(CUSTOM_IDS.password_modal)
      .setTitle("Enter the Password");

    const passwordInput = new TextInputBuilder()
      .setCustomId(CUSTOM_IDS.password_modal_input)
      .setLabel("Enter the password")
      .setStyle(TextInputStyle.Short);

    const row =
      new ActionRowBuilder<ModalActionRowComponentBuilder>().addComponents(
        passwordInput
      );

    modal.addComponents(row);

    await interaction.showModal(modal);
  }
};
