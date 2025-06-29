import { Events, GuildMember, Message } from 'discord.js';

import { guildId } from '@/config/discord';
import { discordApi } from '@/services/discord';
import { arrivalTemplate, rulesTemplate, startHereTemplate, welcomeTemplate } from '@/services/discord/templates';
import { logger } from '@/utils';

export const name: string = Events.MessageCreate;

const prefix: string = process.env.DISCORD_PREFIX || 'm!';

export const execute: (message: Message) => void = (message: Message) => {
  if (message.author.bot) return;

  if (!message.content.startsWith(prefix)) return;

  if (message.guildId !== guildId) return;

  if (message.author.id !== process.env.DISCORD_ADMIN_ID) return;

  const command: string = message.content.split(prefix)[1] || '';

  try {
    if (Object.keys(replies).includes(command)) replies[command as keyof typeof replies](message);
  } catch (error) {
    logger('ERROR', 'EVENT - MESSAGE CREATE', error);
  }
};

const replies: Record<string, (message: Message) => Promise<void>> = {
  startHere: (message: Message): Promise<void> => discordApi.sendMessage(message.channelId, startHereTemplate, true),
  arrival: (message: Message): Promise<void> =>
    discordApi.sendMessage(message.channelId, arrivalTemplate(message.member as GuildMember), true),
  rules: (message: Message): Promise<void> => discordApi.sendMessage(message.channelId, rulesTemplate, true),
  welcome: (message: Message): Promise<void> => discordApi.sendMessage(message.channelId, welcomeTemplate, true),
};
