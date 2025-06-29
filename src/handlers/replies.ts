import { GuildMember, Message } from 'discord.js';

import { discordApi } from '@/services/discord';
import { arrivalTemplate, getChannelDescription, rulesTemplate, startHereTemplate, welcomeTemplate } from '@/services/discord/templates';
import { DiscordMessage, Reply } from '@/types/discord';
import { logger } from '@/utils';

export const startHere: Reply = async (message: Message): Promise<void> => {
  discordApi.sendMessage(message.channelId, startHereTemplate, true);
};

export const arrival: Reply = async (message: Message): Promise<void> => {
  discordApi.sendMessage(message.channelId, arrivalTemplate(message.member as GuildMember), true);
};

export const rules: Reply = async (message: Message): Promise<void> => {
  discordApi.sendMessage(message.channelId, rulesTemplate, true);
};

export const welcome: Reply = async (message: Message): Promise<void> => {
  discordApi.sendMessage(message.channelId, welcomeTemplate, true);
};

export const channelDescription: Reply = async (message: Message): Promise<void> => {
  const channelId: string = message.channelId;

  if (!channelId) return logger('ERROR', 'EVENT - MESSAGE CREATE', 'Channel id not found');

  const discordMessage: DiscordMessage | void = getChannelDescription(channelId);

  if (!discordMessage) return logger('ERROR', 'EVENT - MESSAGE CREATE', 'Channel description not found');

  const response: any = await discordApi.sendMessage(message.channelId, discordMessage, true);

  await discordApi.pinMessage(message.channelId, response.id as string);

  await message.delete();
};
