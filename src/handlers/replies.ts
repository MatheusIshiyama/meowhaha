/* eslint-disable max-len */
import { ForumChannel, GuildMember, Message, ThreadChannel } from 'discord.js';

import { channelIds, threadTagIds } from '@/config/discord';
import { discordApi } from '@/services/discord';
import { arrivalTemplate, getChannelDescription, rulesTemplate, startHereTemplate, welcomeTemplate } from '@/services/discord/templates';
import { DiscordMessage, Reply, Thread } from '@/types/discord';
import { logger } from '@/utils';

export const startHere: Reply = async (message: Message): Promise<void> => {
  discordApi.sendMessage(message.channelId, startHereTemplate, true);
};

export const arrival: Reply = async (message: Message): Promise<void> => {
  discordApi.sendMessage(message.channelId, arrivalTemplate(message.member as GuildMember), true);
};

export const rules: Reply = async (message: Message): Promise<void> => {
  discordApi.sendMessage(message.channelId, rulesTemplate, true);
};

export const welcome: Reply = async (message: Message): Promise<void> => {
  discordApi.sendMessage(message.channelId, welcomeTemplate, true);
};

export const channelDescription: Reply = async (message: Message): Promise<void> => {
  const channelId: string = message.channelId;

  if (!channelId) return logger('ERROR', 'EVENT - MESSAGE CREATE', 'Channel id not found');

  const discordMessage: DiscordMessage | void = getChannelDescription(channelId);

  if (!discordMessage) return logger('ERROR', 'EVENT - MESSAGE CREATE', 'Channel description not found');

  const response: any = await discordApi.sendMessage(message.channelId, discordMessage, true);

  await discordApi.pinMessage(message.channelId, response.id as string);

  await message.delete();
};

export const resources: Reply = async (message: Message): Promise<void> => {
  const channel: ForumChannel | undefined = message.guild?.channels.cache.get(channelIds.resources) as ForumChannel;

  if (!channel) return logger('ERROR', 'EVENT - MESSAGE CREATE', 'Channel not found');

  const thread: Thread = {
    name: '[Post Title] (Sample Showcase Post)',
    message: {
      content: `Free Sparkle Brush Pack for Procreate ✨\n\nHey fluffers!\nHere’s a custom sparkle brush pack I use for magical effects and chaotic glam. Great for adding glitter, shimmer, and cursed fairy dust to your pieces.\n\n**🐾 What’s inside:**\n- 5 glitter brushes\n- 2 shimmer overlays\n- 1 “Cosmic Dust” chaos brush (yes, it sparkles too much)\n\n📥 Download: [Google Drive / Dropbox link]\n\n💬 Feel free to drop examples or edits using them below. Would love to see your sparkly chaos!\n\n— <@${message.client.user.id}>`,
    },
    appliedTags: [threadTagIds.brushes, threadTagIds.textures, threadTagIds['color-palettes']],
  };

  try {
    const newThread: ThreadChannel = await channel.threads.create(thread);

    await Promise.all([newThread.pin(), newThread.setLocked(true)]);
  } catch (error) {
    logger('ERROR', 'EVENT - MESSAGE CREATE', error);
  }
};

export const gitCat: Reply = async (message: Message): Promise<void> => {
  const channel: ForumChannel | undefined = message.guild?.channels.cache.get(channelIds['git-cat']) as ForumChannel;

  if (!channel) return logger('ERROR', 'EVENT - MESSAGE CREATE', 'Channel not found');

  const thread: Thread = {
    name: '[Post Title] (Sample Showcase Post)',
    message: {
      content: `🐾 MeowBoard – a minimal task board built with Next.js + Tailwind\n\nHey nerdcats,\nI built a clean little kanban board called MeowBoard – it’s like Trello, but sassier and pinker.\n\n**Built with:**\n- 🧱 Next.js (app router)\n- 🎨 TailwindCSS\n- ☁️ Supabase (for real-time chaos)\n\n**✨ Features:**\n- Drag-and-drop columns\n- Dark/light mode with theme purring\n- Cat emoji reactions for every task (critical)\n\n**🔗 Live demo:** <url>\n**📦 Repo:** <url>\n\nLet me know what you think or fork it and break it gloriously!\n\n— <@${message.client.user.id}>`,
    },
    appliedTags: [threadTagIds.showcase, threadTagIds.template, threadTagIds['work-in-progress']],
  };

  try {
    const newThread: ThreadChannel = await channel.threads.create(thread);

    await Promise.all([newThread.pin(), newThread.setLocked(true)]);
  } catch (error) {
    logger('ERROR', 'EVENT - MESSAGE CREATE', error);
  }
};
