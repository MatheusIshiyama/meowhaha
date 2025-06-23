export interface DiscordMessageComponent {
  type: number;
  content?: string;
  components?: DiscordMessageComponent[];
  divider?: boolean;
  spacing?: number;
}

export interface DiscordMessage {
  flags: number;
  components: DiscordMessageComponent[];
}
