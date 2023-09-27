const { GatewayIntentBits, VeloraClient } = require("../dist/index.js");
require("dotenv/config.js");

const client = new VeloraClient({
  handler: {
    commands(interaction) {
      interaction.reply("Blocked command.");
    },
  },
  intents: [GatewayIntentBits.Guilds],
  paths: {
    commands: "test/commands/*.cjs",
    events: "test/events/*.cjs",
  },
});

client.login(process.env.DUMMY_BOT_TOKEN);
