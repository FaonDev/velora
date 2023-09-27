import {
  type ChatInputCommandInteraction,
  SlashCommandBuilder,
} from "discord.js";

export class VeloraCommand extends SlashCommandBuilder {
  execute?: (interaction: ChatInputCommandInteraction) => void;

  setExecutable(execute: typeof this.execute) {
    Reflect.set(this, "execute", execute);

    return this;
  }
}
