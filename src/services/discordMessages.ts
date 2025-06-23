import { channelIds } from '@/config/channelIds';
import { discord } from '@/lib/discord';
import bannerMessage from '@/messages/banner';
import startHereMessage from '@/messages/start-here';
import welcomeMessage from '@/messages/welcome';
import { logger } from '@/utils/logger';

export class DiscordMessages {
  async sendStartHereMessage() {
    try {
      const channelId = channelIds['start-here'];

      if (!channelId) return logger('ERROR', 'DISCORD - sendStartHereMessage', 'Channel ID not found');

      await discord.sendMessage(channelId, bannerMessage);
      await discord.sendMessage(channelId, startHereMessage, true);
    } catch (error) {
      logger('ERROR', 'DISCORD - sendStartHereMessage', error);
    }
  }

  async sendWelcomeMessage() {
    try {
      const channelId = channelIds['welcome'];

      if (!channelId) return logger('ERROR', 'DISCORD - sendWelcomeMessage', 'Channel ID not found');

      await discord.sendMessage(channelId, welcomeMessage);
    } catch (error) {
      logger('ERROR', 'DISCORD - sendWelcomeMessage', error);
    }
  }
}

export const discordMessages = new DiscordMessages();
