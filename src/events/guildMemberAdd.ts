import { Events, GuildMember } from 'discord.js';

import { channelIds, roleIds } from '@/config/discord';
import { discordApi, updateMembersCount } from '@/services/discord';
import { arrivalTemplate } from '@/services/discord/templates';
import { logger } from '@/utils';

export const name: string = Events.GuildMemberAdd;

export const execute: (member: GuildMember) => Promise<void> = async (member: GuildMember) => {
  try {
    updateMembersCount(member.client);

    await Promise.all([
      discordApi.sendMessage(channelIds['arrivals'], arrivalTemplate(member), true),
      member.roles.add(roleIds['newcomer']),
    ]);
  } catch (error) {
    logger('ERROR', 'EVENT - GUILD MEMBER ADD', error);
  }
};
