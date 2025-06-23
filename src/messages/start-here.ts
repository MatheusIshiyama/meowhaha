import { channelIds } from '@/config/channelIds';

const startHereMessage = {
  flags: 1 << 15,
  components: [
    {
      type: 17,
      components: [
        {
          type: 10,
          content: '# Welcome to Late Night Haven!',
        },
        {
          type: 10,
          content: 'This is a chill space for night owls, creatives, gamers, lo-fi lovers, and everyone in between.',
        },
        {
          type: 14,
          divider: true,
          spacing: 2,
        },
        {
          type: 10,
          content: "Here's how to get started:",
        },
        {
          type: 10,
          content: '### - Read the vibe',
        },
        {
          type: 10,
          content: "Please keep things respectful, friendly, and relaxed. No spam, hate, or drama. We're here to unwind — not rage.",
        },
        {
          type: 10,
          content: '### - Be kind',
        },
        {
          type: 10,
          content: 'Support each other. Whether you’re sharing memes or venting late-night thoughts, empathy goes a long way.',
        },
        {
          type: 10,
          content: '### - Stay on theme',
        },
        {
          type: 10,
          content: 'Use the right channels (voice, game, media, etc.) and keep the vibe intact.',
        },
        {
          type: 10,
          content: '### - Want to contribute?',
        },
        {
          type: 10,
          content: 'Boosters, devs, and chill lurkers are all welcome. Join a voice call, post a song, or just watch the moon rise.',
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
          content: `🎮 Join us in <#${channelIds.gameRoom}>`,
        },
        {
          type: 10,
          content: `📡 Watch our server stats live in <#${channelIds.stats}>`,
        },
      ],
    },
  ],
};

export default startHereMessage;
