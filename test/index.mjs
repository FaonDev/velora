import { GatewayIntentBits, VeloraClient } from "../dist/index.js";
import "dotenv/config.js";

const client = new VeloraClient({
  handler: {
    commands(interaction) {
      interaction.reply("Blocked command.");
    },
  },
  intents: [GatewayIntentBits.Guilds],
  paths: {
    commands: "test/commands/*.mjs",
    events: "test/events/*.mjs",
  },
});

client.login(process.env.DUMMY_BOT_TOKEN);
