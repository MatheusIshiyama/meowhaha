import { Events, GuildMember, Interaction, MessageFlags } from 'discord.js';

import { animatedEmojiIds, roleIds } from '@/config/discord';

export const name: string = Events.InteractionCreate;

export const execute: (interaction: Interaction) => void = (interaction: Interaction) => {
  if (!interaction.isButton()) return;

  if (interaction.customId === 'set-member-role') {
    const member: GuildMember = interaction.member as GuildMember;

    member.roles.add(roleIds.member);
    member.roles.remove(roleIds.newcomer);

    interaction.reply({
      content: `${animatedEmojiIds.cat_nods} Now you are a meow member! ${animatedEmojiIds.cat_drinking}`,
      flags: [MessageFlags.Ephemeral],
    });
  }
};
