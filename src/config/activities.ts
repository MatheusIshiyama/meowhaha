import { ActivityType } from 'discord.js';

import { Activity } from '@/types/activity';

export const activities: readonly Activity[] = [
  { name: 'with yarn', type: ActivityType.Playing },
  { name: 'over the litter box', type: ActivityType.Watching },
  { name: '/meow commands', type: ActivityType.Listening },
  { name: 'on the dashboard', type: ActivityType.Playing },
  { name: 'the treat counter', type: ActivityType.Watching },
  { name: 'hairball logs', type: ActivityType.Watching },
  { name: 'purr-formance stats', type: ActivityType.Watching },
  { name: 'virtual mice', type: ActivityType.Playing },
  { name: 'whisker data sync', type: ActivityType.Playing },
  { name: 'the cat-alog', type: ActivityType.Playing },
] as const;
