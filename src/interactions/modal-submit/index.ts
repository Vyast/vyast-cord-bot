import { CUSTOM_IDS } from "@/data/custom-ids";
import { ROLE_IDS } from "@/data/role-ids";
import { env } from "@/env";
import {
  type GuildMember,
  type CacheType,
  type ModalSubmitInteraction,
} from "discord.js";

export const modalSubmitInteraction = async (
  interaction: ModalSubmitInteraction<CacheType>
): Promise<void> => {
  if (interaction.customId === CUSTOM_IDS.password_modal) {
    const input = interaction.fields.getTextInputValue(
      CUSTOM_IDS.password_modal_input
    );

    if (input !== env.PASSWORD) {
      await interaction.reply({
        ephemeral: true,
        content: "Incorrect password. Try again.",
      });
      return;
    }

    await interaction.deferReply({ ephemeral: true });

    const member = interaction.member as GuildMember;

    await member.roles.add(ROLE_IDS.member, "Entered correct password.");

    await interaction.editReply("Password correct! Access granted.");
  }
};
