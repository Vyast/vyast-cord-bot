import {
  ActionRowBuilder,
  SlashCommandBuilder,
  RoleSelectMenuBuilder,
} from "discord.js";
import { type SlashCommand } from "~/types/discord";

const Role: SlashCommand = {
  data: new SlashCommandBuilder()
    .setName("role")
    .setDescription("Select your roles")
    .setDMPermission(false),
  async execute(interaction) {
    const row = new ActionRowBuilder<RoleSelectMenuBuilder>().addComponents(
      new RoleSelectMenuBuilder()
        .setCustomId("role_select")
        .setPlaceholder("Select your roles")
        .setMinValues(1)
        .setMaxValues(5)
    );

    await interaction.reply({
      content: "Pong!",
      components: [row],
      ephemeral: true,
    });
  },
};

export default Role;
