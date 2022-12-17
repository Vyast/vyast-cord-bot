import {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
  SlashCommandBuilder,
} from "discord.js";
import { CUSTOM_IDS } from "@/data/custom-ids";
import { type SlashCommand } from "@/types/discord";
import { COLORS } from "@/data/colors";

const SendWelcomeEmbed: SlashCommand = {
  data: new SlashCommandBuilder()
    .setName("send_apps_embed")
    .setDescription("Send the applications embed to a channel."),
  execute: async (interaction) => {
    const row = new ActionRowBuilder<ButtonBuilder>().addComponents(
      new ButtonBuilder()
        .setCustomId(CUSTOM_IDS.verify)
        .setLabel("Enter Password")
        .setStyle(ButtonStyle.Primary)
    );

    const embed = new EmbedBuilder()
      .setTitle("Welcome to Vyast Cord")
      .setColor(COLORS.primary)
      .setDescription(
        `Click the button below to enter the password and recieve access to the discord.`
      );

    await interaction.reply({
      components: [row],
      embeds: [embed],
    });
  },
};

export default SendWelcomeEmbed;
