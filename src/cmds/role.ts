import {
  ActionRowBuilder,
  SlashCommandBuilder,
  SelectMenuBuilder,
} from "discord.js";
import { SlashCommand } from "../types/discord";

const Role: SlashCommand = {
  data: new SlashCommandBuilder()
    .setName("role")
    .setDescription("Select your roles")
    .setDMPermission(false),
  async execute(interaction) {
    const row = new ActionRowBuilder<SelectMenuBuilder>().addComponents(
      new SelectMenuBuilder()
        .setCustomId("roles")
        .setPlaceholder("Nothing selected")

        .addOptions(
          {
            label: "Select me",
            description: "This is a description",
            value: "first_option",
          },
          {
            label: "You can select me too",
            description: "This is also a description",
            value: "second_option",
          }
        )
    );

    await interaction.reply({ content: "Pong!", components: [row] });
  },
};

export default Role;
