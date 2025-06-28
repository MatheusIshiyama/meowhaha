import { animatedEmojiIds, channelIds, staticEmojiIds } from '@/config/discord';
import { DiscordMessage } from '@/types/discordMessage';
import { margin1, divisor, margin2 } from '@/utils/divider';

export const rulesMessage: DiscordMessage = {
  flags: 32768,
  components: [
    {
      type: 17,
      components: [
        margin1,
        {
          type: 10,
          content: `# ${animatedEmojiIds.cat_nods} Read the meow-nual! ${animatedEmojiIds.nods}`,
        },
        margin1,
        {
          type: 10,
          content:
            'Hi there, agent of chaos 🐾\nBefore you start meowing around, please read the rules — or the claws will come out. Softly.',
        },
        ...divisor,
        {
          type: 10,
          content: `### ${staticEmojiIds.star_icon} Be cool, not cruel.`,
        },
        {
          type: 10,
          content: 'No hate speech, racism, sexism, homophobia, transphobia, etc. this is a cozy-chaotic space, not a garbage can.',
        },
        margin2,
        {
          type: 10,
          content: `### ${staticEmojiIds.star_icon} Keep it clean-ish.`,
        },
        {
          type: 10,
          content: 'Mild chaos is fine. Don’t post illegal stuff, nsfw content or ToS-breaking. Yes, even if it’s “just a meme.”',
        },
        margin2,
        {
          type: 10,
          content: `### ${staticEmojiIds.star_icon} Respect the vibe.`,
        },
        {
          type: 10,
          content: "Don't spam, flood, or scream in caps 24/7. Let everyone meow in peace.",
        },
        margin2,
        {
          type: 10,
          content: `### ${staticEmojiIds.star_icon} Respect each other.`,
        },
        {
          type: 10,
          content: "Drama belongs on Netflix. No harassment, bullying, or guilt-tripping. We're here to vibe.",
        },
        margin2,
        {
          type: 10,
          content: `### ${staticEmojiIds.star_icon} No ads or self-promo.`,
        },
        {
          type: 10,
          content: "Unless you have a role that allows it or it's in a dedicated promo channel, keep your links in your pockets.",
        },
        margin2,
        {
          type: 10,
          content: `### ${staticEmojiIds.star_icon} Bots are for fun, not abuse.`,
        },
        {
          type: 10,
          content: "Don't spam bot commands outside of their zones. Treat bots like they have feelings.",
        },
        margin2,
        {
          type: 10,
          content: `### ${staticEmojiIds.star_icon} Follow Discord ToS.`,
        },
        {
          type: 10,
          content: "We're chaotic, but not stupid. Respect [Discord's Terms of Service](https://discord.com/terms).",
        },
        ...divisor,
        {
          type: 10,
          content: `**${staticEmojiIds.alert_icon} Rulebreakers may get scratched, muted, or banned. You've been warned (with love).**`,
        },
        margin1,
        {
          type: 10,
          content: `${staticEmojiIds.chat_icon} Now go pick your roles in <#${channelIds['start-here']}> and join the meowvolution.`,
        },
        margin1,
      ],
    },
  ],
};
