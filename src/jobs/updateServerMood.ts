import { channelIds, moods } from '@/config/discord';
import { discordApi } from '@/lib/discordApi';
import { getRandom } from '@/utils/getRandom';
import { logger } from '@/utils/logger';

export const updateServerMood: () => Promise<void> = async () => {
  try {
    const mood: string = getRandom(moods);

    await discordApi.updateChannelName(channelIds['server-mood'], mood);
  } catch (error) {
    logger('ERROR', 'ERROR UPDATING SERVER MOOD', error);
  }
};
