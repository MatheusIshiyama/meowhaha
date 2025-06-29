import { Interaction, Message } from 'discord.js';

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

export type ReplyHandler = (message: Message) => Promise<void>;

export type InteractionHandler = (interaction: Interaction) => void;
