import { VeloraCommand } from "../../dist/index.js";

export default new VeloraCommand()
  .setName("ping")
  .setDescription("Display application's ping")
  .setHandler(true)
  .setExecutable((interaction) => {
    interaction.reply(interaction.client.ws.ping.toString());
  });
