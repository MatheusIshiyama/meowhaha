import { Events, GuildMember } from 'discord.js';

import { channelIds } from '@/config/channelIds';
import { updateMembersCount } from '@/jobs/updateMembersCount';
import { discord } from '@/lib/discord';
import { arrivalMessage } from '@/messages/arrival';

export const name: string = Events.GuildMemberAdd;

export const execute: (member: GuildMember) => Promise<void> = async (member: GuildMember) => {
  updateMembersCount(member.client);

  discord.sendMessage(channelIds['arrivals'], arrivalMessage(member), true);
};
