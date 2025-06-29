import { Events, GuildMember, Interaction } from 'discord.js';

import { roleIds } from '@/config/discord';

export const name: string = Events.InteractionCreate;

export const execute: (interaction: Interaction) => void = (interaction: Interaction) => {
  if (!interaction.isButton()) return;

  if (interaction.customId === 'set-member-role') {
    const member: GuildMember = interaction.member as GuildMember;

    member.roles.add(roleIds.member);
  }
};
