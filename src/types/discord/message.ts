import { Message } from 'discord.js';

export interface DiscordMessageComponentEmoji {
  id?: string;
  name?: string;
  animated?: boolean;
}

export interface DiscordMessageComponent {
  type: number;
  content?: string;
  components?: DiscordMessageComponent[];
  divider?: boolean;
  spacing?: number;
  label?: string;
  style?: number;
  custom_id?: string;
  emoji?: DiscordMessageComponentEmoji;
}

export interface DiscordMessage {
  flags: number;
  components: DiscordMessageComponent[];
}

export type Reply = (message: Message) => Promise<void>;
