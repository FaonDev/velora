import { VeloraEvent } from "../../dist/classes/event.js";

export default new VeloraEvent("ready")
  .setOnce(true)
  .setExecutable((client) => {
    console.log(`Logged as ${client.user.tag}`);
  });
