import { channelIds } from '@/config/discord';
import { discordApi } from '@/services/discord';
import { bannerMessage, rulesMessage, welcomeMessage } from '@/services/discord/templates';
import { logger } from '@/utils/logger';

export const sendWelcomeMessage: () => Promise<void> = async () => {
  try {
    const channelId: string = channelIds['welcome'];

    if (!channelId) return logger('ERROR', 'DISCORD - sendWelcomeMessage', 'Channel ID not found');

    await discordApi.sendMessage(channelId, bannerMessage);
    await discordApi.sendMessage(channelId, welcomeMessage, true);
  } catch (error) {
    logger('ERROR', 'DISCORD - sendWelcomeMessage', error);
  }
};

export const sendRulesMessage: () => Promise<void> = async () => {
  try {
    const channelId: string = channelIds['read-the-rules'];

    if (!channelId) return logger('ERROR', 'DISCORD - sendRulesMessage', 'Channel ID not found');

    await discordApi.sendMessage(channelId, rulesMessage, true);
  } catch (error) {
    logger('ERROR', 'DISCORD - sendRulesMessage', error);
  }
};
