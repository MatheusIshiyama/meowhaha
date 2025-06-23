import { channelIds } from '@/config/channelIds';
import { roleIds } from '@/config/roleIds';
import { DiscordMessage } from '@/types/discordMessage';

const welcomeMessage: DiscordMessage = {
  flags: 32768,
  components: [
    {
      type: 17,
      components: [
        {
          type: 10,
          content: '# ⚡ You’ve entered the Pulse.',
        },
        {
          type: 10,
          content:
            'Welcome to **Nightpulse** — a digital space where it’s always a bit past midnight and there’s always a quiet buzz in the air.',
        },
        {
          type: 14,
          divider: true,
          spacing: 2,
        },
        {
          type: 10,
          content: 'Here’s what you’ll find inside:',
        },
        {
          type: 10,
          content: `- 💬 Real talk in <#${channelIds.lobby}>`,
        },
        {
          type: 10,
          content: `- 🖼️ Art, clips, & vibes in <#${channelIds['media-share']}>`,
        },
        {
          type: 10,
          content: `- 🎧 Chill with lo-fi or ambient music in <#${channelIds.afterhours}>`,
        },
        {
          type: 10,
          content: `- 🎮 Game nights and chill runs in <#${channelIds.gameRoom}>`,
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
          content: `- <@&${roleIds.corePulse}> – trusted team and power users`,
        },
        {
          type: 10,
          content: `- <@&${roleIds.gamer}> – gamers, pings open`,
        },
        {
          type: 10,
          content: `- <@&${roleIds.vibeCheck}> – music lovers`,
        },
        {
          type: 10,
          content: `- <@&${roleIds.booster}> – thank you, legends 💖`,
        },
        {
          type: 14,
          divider: true,
          spacing: 2,
        },
        {
          type: 10,
          content: `🎉 You’ll show up in <#${channelIds.arrivals}> — feel free to wave. Or don’t. No pressure.`,
        },
        {
          type: 10,
          content: 'Stay low or shine bright — either way, you’re part of the current now.\nLet’s keep the pulse going ⚡',
        },
      ],
    },
  ],
};

export default welcomeMessage;
