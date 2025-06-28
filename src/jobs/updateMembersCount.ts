import { Channel, Client, Guild } from 'discord.js';

import { channelIds } from '@/config/discord';
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
