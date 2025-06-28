/* eslint-disable max-len */
import { animatedEmojiIds, channelIds, roleIds, staticEmojiIds } from '@/config/discord';
import { DiscordMessage } from '@/types/discordMessage';
import { divisor, margin1, margin2 } from '@/utils/divider';

const welcomeMessage: DiscordMessage = {
  flags: 32768,
  components: [
    {
      type: 17,
      components: [
        margin1,
        {
          type: 10,
          content: `# ${animatedEmojiIds.meow_meow} Welcome to meowhaha! ${animatedEmojiIds.happy_cat}`,
        },
        margin1,
        {
          type: 10,
          content: `${animatedEmojiIds.say_hi} Hi there, brave wanderer of the meowniverse ${animatedEmojiIds.nods}\nyou’ve just entered a realm of chaos, cats, creativity, and occasional keyboard smashing.`,
        },
        margin1,
        {
          type: 10,
          content:
            'This server is home to artists, gamers, devs, and ✨ feral vibes ✨.\nWe scream, we vibe, we post cursed memes, and sometimes we make cool things too.',
        },
        ...divisor,
        {
          type: 10,
          content: `### ${staticEmojiIds.pin_icon} Here’s how to get started:`,
        },
        margin1,
        {
          type: 10,
          content: `${staticEmojiIds.star_icon} Read the rules in <#${channelIds['read-the-rules']}> so you don’t get scratched.`,
        },
        {
          type: 10,
          content: `${staticEmojiIds.star_icon} Grab your roles in <#${channelIds['start-here']}> to unlock the fun stuff.`,
        },
        {
          type: 10,
          content: `${staticEmojiIds.star_icon} Introduce yourself in <#${channelIds['introduce-meowself']}> or just lurk and judge us silently.`,
        },
        ...divisor,
        {
          type: 10,
          content: `### ${staticEmojiIds.star_icon} Community Roles (more coming soon):`,
        },
        margin1,
        {
          type: 10,
          content: `${staticEmojiIds.dot_icon} <@&${roleIds.mod}> – Trusted team and power users`,
        },
        {
          type: 10,
          content: `${staticEmojiIds.dot_icon} <@&${roleIds.member}> - Active members`,
        },
        {
          type: 10,
          content: `${staticEmojiIds.dot_icon} <@&${roleIds.gamer}> – Gamers`,
        },
        {
          type: 10,
          content: `${staticEmojiIds.dot_icon} <@&${roleIds.music}> – Music lovers`,
        },
        {
          type: 10,
          content: `${staticEmojiIds.dot_icon} <@&${roleIds.booster}> – Thank you, legends 💖`,
        },
        ...divisor,
        {
          type: 10,
          content: `${animatedEmojiIds.cat_clap} You’ll show up in <#${channelIds.arrivals}> — feel free to wave. Or don’t. No pressure.`,
        },
        margin2,
        {
          type: 10,
          content: 'Enjoy the chaos, and remember:',
        },
        margin1,
        {
          type: 10,
          content: `### ${animatedEmojiIds.meow_meow} You’re never too old to scream in lowercase and post a cat pic. ${animatedEmojiIds.cat_nods}`,
        },
        margin1,
      ],
    },
  ],
};

export default welcomeMessage;
