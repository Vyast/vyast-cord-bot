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
    .setName("send_welcome_embed")
    .setDMPermission(false)
    .setDescription("Send the welcome embed to a channel."),
  execute: async (interaction) => {
    await interaction.deferReply({ ephemeral: true });

    const row = new ActionRowBuilder<ButtonBuilder>().addComponents(
      new ButtonBuilder()
        .setCustomId(CUSTOM_IDS.verify)
        .setLabel("Enter Password")
        .setStyle(ButtonStyle.Secondary)
    );

    const embed = new EmbedBuilder()
      .setTitle("Welcome to Vyast Cord")
      .setColor(COLORS.primary)
      .setDescription(
        `_You're probably not supposed to be here_, but if you are, **click the button below to enter the password and receive access to the discord :)**\n\nIf you're looking for the n4.gg (vyast.dev) or Venom Anti-Cheat discord server, here you go:\n\nhttps://discord.gg/venomac\nhttps://discord.gg/n4`
      )
      .setTimestamp()
      .setFooter({
        text: `© Vyast Cord ${new Date().getFullYear()}`,
        iconURL: "https://i.imgur.com/IlrJmUv.png",
      });

    await interaction.channel!.send({
      components: [row],
      embeds: [embed],
    });

    await interaction.editReply("Embed sent.");
  },
};

export default SendWelcomeEmbed;
