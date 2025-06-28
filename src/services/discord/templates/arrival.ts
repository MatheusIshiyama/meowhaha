import { GuildMember } from 'discord.js';

import { animatedEmojiIds } from '@/config/discord';
import { DiscordMessage } from '@/types/discordMessage';
import { margin1 } from '@/utils/divider';
import { getRandom } from '@/utils/getRandom';

const getAnimatedEmoji: () => string = (): string => {
  const animatedEmoji: string[] = [animatedEmojiIds.say_hi, animatedEmojiIds.meow_meow, animatedEmojiIds.cat_nods];

  return getRandom(animatedEmoji);
};

const getRandomMessage: (userId: string) => string = (userId: string): string => {
  const messages: string[] = [
    `😺 <@${userId}> just joined the cat chaos!`,
    `🐾 Welcome, <@${userId}>! Take a nap or start a meow-storm.`,
    `🧶 <@${userId}> rolled into Meowhaha. Say hi!`,
    `📦 <@${userId}> found the cardboard box entrance.`,
    `😻 <@${userId}> hopped onto the scratching post!`,
    `🙀 <@${userId}> triggered the laser-pointer frenzy!`,
    `🐈 <@${userId}> slinked in, tail held high.`,
    `🌙 <@${userId}> drifted in from a dreamy catnap dimension.`,
    `🐟 <@${userId}> smelled the tuna vibes and came running.`,
    `✨ <@${userId}> sprinkled stardust over the litter-box lounge!`,
  ] as const;

  return getRandom(messages);
};

export const arrivalMessage: (member: GuildMember) => DiscordMessage = (member: GuildMember): DiscordMessage => {
  const animatedEmoji: string = getAnimatedEmoji();

  const message: string = getRandomMessage(member.user.id);

  return {
    flags: 32768,
    components: [
      {
        type: 17,
        components: [
          margin1,
          {
            type: 10,
            content: `# ${animatedEmoji} Welcome to meowhaha!`,
          },
          margin1,
          {
            type: 10,
            content: message,
          },
          margin1,
        ],
      },
    ],
  };
};
