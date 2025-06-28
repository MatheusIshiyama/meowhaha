import { Client } from 'discord.js';

import { activities } from '@/config/discord';
import { Activity } from '@/types/activity';
import { getRandom } from '@/utils';

export const updateBotActivities: (bot: Client) => void = (bot: Client) => {
  if (!bot.user) return;

  const activity: Activity = getRandom(activities);

  bot.user.setPresence({
    activities: [
      {
        name: activity.name,
        type: activity.type,
        url: 'https://github.com/MatheusIshiyama/meowhaha',
      },
    ],
  });
};
