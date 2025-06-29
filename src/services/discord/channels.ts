import { Client, Guild, Channel, GuildMember, Collection } from 'discord.js';

import { channelIds, guildId, moods } from '@/config/discord';
import { discordApi } from '@/services/discord/api';
import { getRandom, logger } from '@/utils';

export const updateBoosterCount: (bot: Client) => void = (bot: Client) => {
  try {
    const guild: Guild | undefined = bot.guilds.cache.get(guildId);
    if (!guild) return logger('ERROR', 'GUILD NOT FOUND', guildId);

    const boosters: Collection<string, GuildMember> = guild.members.cache.filter((member: GuildMember) => member.premiumSince);
    const boosterCount: number = boosters.size;

    const channel: Channel | undefined = guild.channels.cache.get(channelIds['booster-count']);
    if (!channel) return logger('ERROR', 'CHANNEL NOT FOUND - BOOSTER COUNT', channelIds['booster-count']);

    channel.setName(`💎・meow club: ${boosterCount}`);
  } catch (error) {
    logger('ERROR', 'DISCORD CHANNELS - UPDATE BOOSTER COUNT', error);
  }
};

export const updateMembersCount: (bot: Client) => void = (bot: Client) => {
  try {
    const guild: Guild | undefined = bot.guilds.cache.get(guildId);
    if (!guild) return logger('ERROR', 'GUILD NOT FOUND', guildId);

    const memberCount: number = guild.memberCount;

    const channel: Channel | undefined = guild.channels.cache.get(channelIds['members-count']);
    if (!channel) return logger('ERROR', 'CHANNEL NOT FOUND - MEMBERS COUNT', channelIds['members-count']);

    channel.setName(`😺・meows: ${memberCount}`);
  } catch (error) {
    logger('ERROR', 'DISCORD CHANNELS - UPDATE MEMBERS COUNT', error);
  }
};

export const updateServerMood: () => Promise<void> = async () => {
  try {
    const mood: string = getRandom(moods);

    await discordApi.updateChannelName(channelIds['server-mood'], mood);
  } catch (error) {
    logger('ERROR', 'DISCORD CHANNELS - UPDATE SERVER MOOD', error);
  }
};
