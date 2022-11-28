import { ChatInputCommandInteraction, ComponentType, inlineCode, Interaction, InteractionType } from "discord.js";
import Commands from "../cmds";

export async function interactionCreate(interaction: Interaction): Promise<void> {
  if (interaction.type === InteractionType.ApplicationCommand) {
    const command = Commands.find((command) => command.data.name === interaction.commandName);

    if (!command) {
      await interaction.reply({
        ephemeral: true,
        content: `An error occurred: Unknown application command: ${inlineCode(interaction.commandName)}`,
      });
      return;
    }

    try {
      await command.execute(interaction as ChatInputCommandInteraction);
    } catch (error: any) {
      console.error(`Application command interaction error: ${error.message}`);

      if (!interaction.isRepliable()) return;

      const message = "An error occurred while executing this command. Please try again later.";

      if (interaction.deferred) {
        await interaction.editReply({
          content: message,
          components: [],
          embeds: [],
        });
        return;
      }

      await interaction.reply({
        content: message,
        ephemeral: true,
      });
    }
  } else if (interaction.type === InteractionType.MessageComponent) {
    if (interaction.componentType === ComponentType.Button) {
    } else if (interaction.componentType === ComponentType.SelectMenu) {
    }
  }
}
