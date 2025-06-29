import { channelIds } from '@/config/discord';
import { discordApi } from '@/services/discord';
import { bannerTemplate, rulesTemplate, welcomeTemplate } from '@/services/discord/templates';
import { logger } from '@/utils';

export const sendWelcomeMessage: () => Promise<void> = async () => {
  try {
    const channelId: string = channelIds['welcome'];

    if (!channelId) return logger('ERROR', 'DISCORD - sendWelcomeMessage', 'Channel ID not found');

    await discordApi.sendMessage(channelId, bannerTemplate);
    await discordApi.sendMessage(channelId, welcomeTemplate, true);
  } catch (error) {
    logger('ERROR', 'DISCORD MESSAGES - SEND WELCOME MESSAGE', error);
  }
};

export const sendRulesMessage: () => Promise<void> = async () => {
  try {
    const channelId: string = channelIds['read-the-rules'];

    if (!channelId) return logger('ERROR', 'DISCORD - sendRulesMessage', 'Channel ID not found');

    await discordApi.sendMessage(channelId, rulesTemplate, true);
  } catch (error) {
    logger('ERROR', 'DISCORD MESSAGES - SEND RULES MESSAGE', error);
  }
};
