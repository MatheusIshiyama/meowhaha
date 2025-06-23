import { channelIds } from '@/config/channelIds';

const welcomeMessage = {
  flags: 1 << 15,
  components: [
    {
      type: 17,
      components: [
        {
          type: 10,
          content: '# 🛬 You’ve landed in the Haven.',
        },
        {
          type: 10,
          content: 'Late Night Haven is a cozy, community-driven server where it’s always a little past midnight. Here you can:',
        },
        {
          type: 14,
          divider: true,
          spacing: 2,
        },
        {
          type: 10,
          content: `- 🗨️ Chat casually in <#${channelIds.lobby}>`,
        },
        {
          type: 10,
          content: `- 📸 Drop memes, pics, and art in <#${channelIds['media-share']}>`,
        },
        {
          type: 10,
          content: `- 🎧 Chill with lo-fi or ambient music in <#${channelIds['lo-fi-lounge']}>`,
        },
        {
          type: 10,
          content: `- 🎮 Join casual games in <#${channelIds.gameRoom}>`,
        },
        {
          type: 10,
          content: `- 🛏️ Unload thoughts in <#${channelIds.pillowtalk}> or <#${channelIds['vent-space']}>`,
        },
        {
          type: 14,
          divider: true,
          spacing: 2,
        },
        {
          type: 10,
          content: 'Community Roles (more coming soon):',
        },
        {
          type: 10,
          content: '- 🌙︱Night Owl – regulars and late lurkers',
        },
        {
          type: 10,
          content: '- 🎮︱Gamer – pingable for co-op nights',
        },
        {
          type: 10,
          content: '- 🎧︱Vibe Check – music lovers',
        },
        {
          type: 10,
          content: '- 💎︱Haven Booster – thank you, legends 💖',
        },
        {
          type: 14,
          divider: true,
          spacing: 2,
        },
        {
          type: 10,
          content: `🎉 If you're new, you'll appear in <#${channelIds.arrivals}> — don’t be shy!\n`,
        },
        {
          type: 10,
          content: '👉 To unlock more roles and perks, stay active and explore.\n',
        },
        {
          type: 10,
          content: "Thanks for being here. It's late. And you're exactly where you should be.",
        },
      ],
    },
  ],
};

export default welcomeMessage;
