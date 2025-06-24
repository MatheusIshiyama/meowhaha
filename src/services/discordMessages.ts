import { channelIds } from '@/config/channelIds';
import { discord } from '@/lib/discord';
import bannerMessage from '@/messages/banner';
import rulesMessage from '@/messages/rules';
import startHereMessage from '@/messages/start-here';
import welcomeMessage from '@/messages/welcome';
import { logger } from '@/utils/logger';

export class DiscordMessages {
  async sendStartHereMessage(): Promise<void> {
    try {
      const channelId: string = channelIds['start-here'];

      if (!channelId) return logger('ERROR', 'DISCORD - sendStartHereMessage', 'Channel ID not found');

      await discord.sendMessage(channelId, bannerMessage);
      await discord.sendMessage(channelId, startHereMessage, true);
    } catch (error) {
      logger('ERROR', 'DISCORD - sendStartHereMessage', error);
    }
  }

  async sendWelcomeMessage(): Promise<void> {
    try {
      const channelId: string = channelIds['welcome'];

      if (!channelId) return logger('ERROR', 'DISCORD - sendWelcomeMessage', 'Channel ID not found');

      await discord.sendMessage(channelId, welcomeMessage);
    } catch (error) {
      logger('ERROR', 'DISCORD - sendWelcomeMessage', error);
    }
  }

  async sendRulesMessage(): Promise<void> {
    try {
      const channelId: string = channelIds['rules'];

      if (!channelId) return logger('ERROR', 'DISCORD - sendRulesMessage', 'Channel ID not found');

      await discord.sendMessage(channelId, rulesMessage, true);
    } catch (error) {
      logger('ERROR', 'DISCORD - sendRulesMessage', error);
    }
  }
}

export const discordMessages: DiscordMessages = new DiscordMessages();
