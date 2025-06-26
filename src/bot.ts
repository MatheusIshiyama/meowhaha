import fs from 'fs';
import path from 'path';

import { Client, GatewayIntentBits } from 'discord.js';

export class Bot {
  private client: Client;

  constructor() {
    this.client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });
  }

  async loadEvents(): Promise<void> {
    const eventFiles: string[] = fs.readdirSync(path.join(__dirname, 'events')).filter((file: string) => file.endsWith('.ts'));

    for (const file of eventFiles) {
      const { name, execute } = await import(`@/events/${file}`);
      this.client.on(name, execute);
    }
  }

  async start(): Promise<void> {
    await this.loadEvents();
    await this.client.login(process.env.DISCORD_TOKEN);
  }
}
