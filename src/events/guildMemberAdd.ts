import { Events, GuildMember } from 'discord.js';

import { channelIds } from '@/config/discord';
import { updateMembersCount } from '@/jobs/updateMembersCount';
import { discordApi } from '@/services/discord';
import { arrivalMessage } from '@/services/discord/templates';

export const name: string = Events.GuildMemberAdd;

export const execute: (member: GuildMember) => Promise<void> = async (member: GuildMember) => {
  updateMembersCount(member.client);

  discordApi.sendMessage(channelIds['arrivals'], arrivalMessage(member), true);
};
