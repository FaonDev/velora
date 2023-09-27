const { VeloraCommand } = require("../../dist/index.js");

module.exports = new VeloraCommand()
  .setName("ping")
  .setDescription("Display application's ping")
  .setHandler(true)
  .setExecutable((interaction) => {
    interaction.reply(interaction.client.ws.ping.toString());
  });
