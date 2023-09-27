import {
  type ChatInputCommandInteraction,
  Client,
  type ClientOptions,
} from "discord.js";
import type { VeloraCommand } from "./command";
import type { VeloraEvent } from "./event";
import { vinta } from "vinta";

export type VeloraCommandHandler = (
  interaction: ChatInputCommandInteraction,
  command: VeloraCommand
) => void;

export type VeloraClientOptions = ClientOptions & {
  handler?: {
    commands?: VeloraCommandHandler;
  };
  paths?: {
    commands?: string;
    events?: string;
  };
};

export class VeloraClient extends Client {
  constructor({ handler, paths, ...props }: VeloraClientOptions) {
    super(props);

    if (paths?.commands)
      this.#addCommands({
        handler: handler?.commands,
        path: paths.commands,
      });

    if (paths?.events) this.#addEvents(paths.events);
  }

  async #addCommands({
    handler,
    path,
  }: {
    handler?: VeloraCommandHandler;
    path: string;
  }) {
    const { modules: commands } = await vinta<VeloraCommand>(path, {
      onlyDefault: true,
    });

    this.once("ready", () => {
      this.application?.commands.set(commands);
    });

    this.on("interactionCreate", (interaction) => {
      if (!interaction.isChatInputCommand()) return;

      const command = commands.find(
        ({ name }) => name === interaction.commandName
      );

      if (handler && command?.handler) return handler(interaction, command);

      if (command?.execute) command.execute(interaction);
      else interaction.reply("Invalid command.");
    });
  }

  async #addEvents(path: string) {
    const { modules: events } = await vinta<VeloraEvent>(path, {
      onlyDefault: true,
    });

    for (const { execute, name, once } of events)
      if (execute) this[once ? "once" : "on"](name, execute);
  }
}
