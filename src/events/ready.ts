import { Client, Events } from 'discord.js';
import cron from 'node-cron';

import { updateBotActivities, updateMembersCount, updateServerMood } from '@/services/discord';
import { logger } from '@/utils';

export const name: string = Events.ClientReady;

export const execute: (client: Client) => Promise<void> = async (client: Client) => {
  logger('INFO', 'BOT', `Logged in as ${client.user?.tag}`);

  updateBotActivities(client);

  scheduleJobs(client);
};

const scheduleJobs: (client: Client) => void = (client: Client) => {
  cron.schedule('*/10 * * * * *', (): void => updateBotActivities(client));

  cron.schedule('*/10 * * * *', (): void => {
    updateServerMood();
    updateMembersCount(client);
  });
};
