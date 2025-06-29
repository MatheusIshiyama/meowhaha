import { GuildMember, Interaction, InteractionResponse, MessageFlags } from 'discord.js';

import { animatedEmojiIds, roleIds, staticEmojiIds } from '@/config/discord';

export const setMemberRole: (interaction: Interaction) => Promise<void> = async (interaction: Interaction) => {
  if (!interaction.isButton()) return;

  const member: GuildMember = interaction.member as GuildMember;

  member.roles.add(roleIds.member);
  member.roles.remove(roleIds.newcomer);

  const reply: InteractionResponse = await interaction.reply({
    content: `${animatedEmojiIds.cat_nods} Now you are a <@&${roleIds.member}>! ${animatedEmojiIds.cat_drinking}`,
    flags: [MessageFlags.Ephemeral],
  });

  setTimeout(() => reply.delete(), 10000);
};

export const setGGCatsRole: (interaction: Interaction) => Promise<void> = async (interaction: Interaction) => {
  if (!interaction.isButton()) return;

  const member: GuildMember = interaction.member as GuildMember;

  if (member.roles.cache.has(roleIds['gg-cat'])) {
    member.roles.remove(roleIds['gg-cat']);

    const reply: InteractionResponse = await interaction.reply({
      content: `${animatedEmojiIds.nods} Now you don't have <@&${roleIds['gg-cat']}> role anymore! ${staticEmojiIds.panic_cat}`,
      flags: [MessageFlags.Ephemeral],
    });

    setTimeout(() => reply.delete(), 10000);
  } else {
    member.roles.add(roleIds['gg-cat']);

    const reply: InteractionResponse = await interaction.reply({
      content: `${animatedEmojiIds.cat_nods} Now you are a <@&${roleIds['gg-cat']}>! ${animatedEmojiIds.cat_drinking}`,
      flags: [MessageFlags.Ephemeral],
    });

    setTimeout(() => reply.delete(), 10000);
  }
};

export const setMeowFMRole: (interaction: Interaction) => Promise<void> = async (interaction: Interaction) => {
  if (!interaction.isButton()) return;

  const member: GuildMember = interaction.member as GuildMember;

  if (member.roles.cache.has(roleIds['meow-fm'])) {
    member.roles.remove(roleIds['meow-fm']);

    const reply: InteractionResponse = await interaction.reply({
      content: `${animatedEmojiIds.nods} Now you don't have <@&${roleIds['meow-fm']}> role anymore! ${staticEmojiIds.panic_cat}`,
      flags: [MessageFlags.Ephemeral],
    });

    setTimeout(() => reply.delete(), 10000);
  } else {
    member.roles.add(roleIds['meow-fm']);

    const reply: InteractionResponse = await interaction.reply({
      content: `${animatedEmojiIds.cat_nods} Now you are a <@&${roleIds['meow-fm']}>! ${animatedEmojiIds.cat_drinking}`,
      flags: [MessageFlags.Ephemeral],
    });

    setTimeout(() => reply.delete(), 10000);
  }
};
