import { channelIds } from '@/config/channelIds';
import { DiscordMessage } from '@/types/discordMessage';

const startHereMessage: DiscordMessage = {
  flags: 32768,
  components: [
    {
      type: 17,
      components: [
        {
          type: 10,
          content: '# ⚡ Welcome to Nightpulse!',
        },
        {
          type: 10,
          content: `This is a calm-but-charged space for night coders, gamers, creatives, lo-fi lovers, and late scrollers.\n
            We keep it friendly, focused, and flowing — like static in the midnight air.`,
        },
        {
          type: 14,
          divider: true,
          spacing: 2,
        },
        {
          type: 10,
          content: 'Here’s how to sync in:',
        },
        {
          type: 10,
          content: '### - Feel the vibe',
        },
        {
          type: 10,
          content: 'No spam. No hate. No pressure. Just kindness, fun, and good timing.',
        },
        {
          type: 10,
          content: '### - Respect the rhythm',
        },
        {
          type: 10,
          content: `We’re not loud, but we’re real. Empathy rules — especially in quiet spaces like <#${channelIds['vent-space']}>.`,
        },
        {
          type: 10,
          content: '### - Stay on beat',
        },
        {
          type: 10,
          content: 'Use channels as intended — text, voice channels, bots, media — so the flow stays clean.',
        },
        {
          type: 10,
          content: '### - Want to contribute?',
        },
        {
          type: 10,
          content:
            'Boosters, builders, lurkers, and listeners all power the pulse.\nDrop a song, code something, or just hang out in voice.',
        },
        {
          type: 14,
          divider: true,
          spacing: 2,
        },
        {
          type: 10,
          content: `✅ When you're ready, say hi in <#${channelIds.lobby}>`,
        },
        {
          type: 10,
          content: `🎧 Chill in <#${channelIds.afterhours}>`,
        },
        {
          type: 10,
          content: `⚡ Watch the server’s heart beat in <#${channelIds.stats}>`,
        },
      ],
    },
  ],
};

export default startHereMessage;
