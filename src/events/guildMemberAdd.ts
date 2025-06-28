import { Events, GuildMember } from 'discord.js';

import { channelIds } from '@/config/discord';
import { discordApi, updateMembersCount } from '@/services/discord';
import { arrivalTemplate } from '@/services/discord/templates';

export const name: string = Events.GuildMemberAdd;

export const execute: (member: GuildMember) => Promise<void> = async (member: GuildMember) => {
  updateMembersCount(member.client);

  discordApi.sendMessage(channelIds['arrivals'], arrivalTemplate(member), true);
};
