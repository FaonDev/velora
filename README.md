# Velora

## Create a Discord bot with just a few lines.

```sh-session
bun add velora
npm add velora
pnpm add velora
yarn add velora
```

### Quick Start

```js
// Or require() for CommonJS modules
import { GatewayIntentBits, VeloraClient } from "velora";

const client = new VeloraClient({
  intents: [GatewayIntentBits.Guilds],
  paths: {
    commands: "src/commands/**/*.js",
    events: "src/events/**/*.js",
  },
});

client.login("YOUR_BOT_TOKEN");
```

With TypeScript

```ts
import { GatewayIntentBits, VeloraClient } from "velora";

const client = new VeloraClient({
  intents: [GatewayIntentBits.Guilds],
  paths: {
    commands: "src/commands/**/*.ts",
    events: "src/events/**/*.ts",
  },
});

client.login("YOUR_BOT_TOKEN");
```

### VeloraCommand

```ts
import { VeloraCommand } from "velora";

export default new VeloraCommand()
  .setName("ping")
  .setDescription("Display the application's ping")
  .setExecutable((interaction) => {
    interaction.reply(interaction.client.ws.ping.toString());
  });
```

### VeloraEvent

```ts
import { VeloraEvent } from "velora";

export default new VeloraEvent("ready")
  .setOnce(true)
  .setExecutable((client) => {
    console.log(`Logged as ${client.user.tag}`);
  });
```

### License

Refer to the [LICENSE](LICENSE).
