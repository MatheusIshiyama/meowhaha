import { Client, Guild, Channel } from 'discord.js';

import { channelIds, moods } from '@/config/discord';
import { discordApi } from '@/services/discord/api';
import { getRandom } from '@/utils/getRandom';
import { logger } from '@/utils/logger';

const guildId: string = '1386212819669880913';

export const updateMembersCount: (bot: Client) => void = (bot: Client) => {
  try {
    const guild: Guild | undefined = bot.guilds.cache.get(guildId);
    if (!guild) return logger('ERROR', 'GUILD NOT FOUND', guildId);

    const memberCount: number = guild.memberCount;

    const channel: Channel | undefined = guild.channels.cache.get(channelIds['members-count']);
    if (!channel) return logger('ERROR', 'CHANNEL NOT FOUND - MEMBERS COUNT', channelIds['members-count']);

    channel.setName(`😺・meows: ${memberCount}`);
  } catch (error) {
    logger('ERROR', 'ERROR UPDATING MEMBERS COUNT', error);
  }
};

export const updateServerMood: () => Promise<void> = async () => {
  try {
    const mood: string = getRandom(moods);

    await discordApi.updateChannelName(channelIds['server-mood'], mood);
  } catch (error) {
    logger('ERROR', 'ERROR UPDATING SERVER MOOD', error);
  }
};
