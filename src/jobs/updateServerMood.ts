import { channelIds } from '@/config/channelIds';
import { moods } from '@/config/moods';
import { discord } from '@/lib/discord';
import { getRandom } from '@/utils/getRandom';
import { logger } from '@/utils/logger';

export const updateServerMood: () => Promise<void> = async () => {
  try {
    const mood: string = getRandom(moods);
    await discord.updateChannelName(channelIds.serverMood, mood);

    logger('INFO', 'SERVER MOOD UPDATED', mood);
  } catch (error) {
    logger('ERROR', 'ERROR UPDATING SERVER MOOD', error);
  }
};
