/* eslint-disable max-len */
import { animatedEmojiIds, roleIds, staticEmojiIds } from '@/config/discord';
import { DiscordMessage } from '@/types/discord';
import { divisor, margin1 } from '@/utils';

export const chooseYourCatTemplate: DiscordMessage = {
  flags: 32768,
  components: [
    {
      type: 17,
      components: [
        margin1,
        {
          type: 10,
          content: `# ${animatedEmojiIds.dog_pat} Choose your cat, claim your chaos! ${animatedEmojiIds.cat_nods}`,
        },
        margin1,
        {
          type: 10,
          content: 'This is where you pick your special roles to unlock exclusive corners of the clowder.',
        },
        ...divisor,
        {
          type: 10,
          content: `### ${staticEmojiIds.star_icon} Community Roles (more coming soon):`,
        },
        margin1,
        {
          type: 10,
          content: `${staticEmojiIds.dot_icon} <@&${roleIds['gg-cat']}> - Love games, events, or lurking in #meow-nights? This one's for our gaming furballs.`,
        },
        {
          type: 10,
          content: `${staticEmojiIds.dot_icon} <@&${roleIds['meow-fm']}> - Into sharing music, vibing in voice, or spamming your Spotify aura? You're a Meow FM listener now.`,
        },
        ...divisor,
        {
          type: 10,
          content: `${animatedEmojiIds.smash_keyboard} **Click the buttons below to claim your roles and unlock those channels.**`,
        },
        {
          type: 10,
          content: `**Change your mind anytime—cats are famously indecisive.** ${staticEmojiIds.panic_cat}`,
        },
        margin1,
        {
          type: 1,
          components: [
            {
              type: 2,
              label: 'GG Cats',
              style: 1,
              custom_id: 'set-gg-cats-role',
              emoji: {
                id: '1388844437530214561',
                name: '_fish_pog',
                animated: true,
              },
            },
            {
              type: 2,
              label: 'Meow FM',
              style: 3,
              custom_id: 'set-meow-fm-role',
              emoji: {
                id: '1388858063041200219',
                name: '_dance',
                animated: true,
              },
            },
          ],
        },
      ],
    },
  ],
};
