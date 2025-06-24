import { DiscordMessageComponent } from '@/types/discordMessage';

export const margin1: DiscordMessageComponent = {
  type: 14,
  divider: false,
  spacing: 1,
};

export const margin2: DiscordMessageComponent = {
  type: 14,
  divider: false,
  spacing: 2,
};

export const divider: DiscordMessageComponent = {
  type: 14,
  divider: true,
  spacing: 2,
};

export const divisor: DiscordMessageComponent[] = [margin1, divider, margin1];
