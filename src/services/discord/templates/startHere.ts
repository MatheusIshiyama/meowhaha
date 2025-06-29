/* eslint-disable max-len */
import { roleIds } from '@/config/discord';
import { animatedEmojiIds, staticEmojiIds } from '@/config/discord/emojis';
import { DiscordMessage } from '@/types/discord';
import { divisor, margin1 } from '@/utils';

export const startHereTemplate: DiscordMessage = {
  flags: 32768,
  components: [
    {
      type: 17,
      components: [
        margin1,
        {
          type: 10,
          content: `# ${animatedEmojiIds.panda_wave} Heya, Meowventurers! ${animatedEmojiIds.artist_wave}`,
        },
        margin1,
        {
          type: 10,
          content: 'Welcome to Meowhaha — the realm of chaotic cats, cozy vibes and copious memes.',
        },
        margin1,
        {
          type: 10,
          content: `To unlock the full litter-box of channels, click the button below to pounce into the <@&${roleIds.member}> role and unlock the full litter-box of channels!`,
        },
        ...divisor,
        {
          type: 10,
          content: '### ✨ Why join?',
        },
        margin1,
        {
          type: 10,
          content: `${staticEmojiIds.star_icon} Access hidden hangouts, art corners & game queues`,
        },
        {
          type: 10,
          content: `${staticEmojiIds.star_icon} Vote on server polls (cat-nip vs tuna, obviously)`,
        },
        {
          type: 10,
          content: `${staticEmojiIds.star_icon} Earn your shiny <@&${roleIds.member}> badge so everyone knows you’re part of the clowder`,
        },
        ...divisor,
        {
          type: 10,
          content: `${staticEmojiIds.dot_icon} **Step 1** - Click the button below to get the Member role.`,
        },
        {
          type: 10,
          content: `${staticEmojiIds.dot_icon} **Step 2** - Wait for the bot to sprinkle you with permissions`,
        },
        {
          type: 10,
          content: `${staticEmojiIds.dot_icon} **Step 3** - Spam “meow” responsibly and enjoy the chaos!`,
        },
        ...divisor,
        {
          type: 10,
          content: `**Wanna unlock the whole server? Just click the button below to get the Member role and meow freely. ${animatedEmojiIds.cat_drinking}**`,
        },
        margin1,
        {
          type: 1,
          components: [
            {
              type: 2,
              label: 'Join the purrty!',
              style: 3,
              custom_id: 'set-member-role',
              emoji: {
                id: '1388725765633216682',
                name: '_fox_wiggle',
                animated: true,
              },
            },
          ],
        },
        margin1,
      ],
    },
  ],
};
