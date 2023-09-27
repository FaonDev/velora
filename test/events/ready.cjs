const { VeloraEvent } = require("../../dist/classes/event.js");

module.exports = new VeloraEvent("ready")
  .setOnce(true)
  .setExecutable((client) => {
    console.log(`Logged as ${client.user.tag}`);
  });
