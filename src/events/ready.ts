import { Client, Events } from 'discord.js';
import cron from 'node-cron';

import { updateBotActivities } from '@/jobs/updateBotActivities';
import { updateMembersCount } from '@/jobs/updateMembersCount';
import { updateServerMood } from '@/jobs/updateServerMood';
import { logger } from '@/utils/logger';

export const name: string = Events.ClientReady;

export const execute: (client: Client) => Promise<void> = async (client: Client) => {
  logger('INFO', 'BOT', `Logged in as ${client.user?.tag}`);

  updateServerMood();
  updateBotActivities(client);
  updateMembersCount(client);

  scheduleJobs(client);
};

const scheduleJobs: (client: Client) => void = (client: Client) => {
  cron.schedule('*/10 * * * * *', (): void => updateBotActivities(client));

  cron.schedule('*/10 * * * *', (): Promise<void> => updateServerMood());
};
