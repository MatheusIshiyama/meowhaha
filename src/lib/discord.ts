import { logger } from '@/utils/logger';
import axios from 'axios';

class Discord {
  private token: string;
  private api: string;

  constructor() {
    this.token = process.env.DISCORD_TOKEN || '';
    this.api = 'https://discord.com/api/v10';
  }

  async sendMessage(channelId: string, data: any) {
    try {
      if (!this.token) throw new Error('DISCORD_TOKEN is not set');

      const response = await axios.post(`${this.api}/channels/${channelId}/messages`, data, {
        headers: {
          Authorization: `Bot ${this.token}`,
        },
      });

      return response.data;
    } catch (error) {
      logger('ERROR', 'DISCORD', error);
    }
  }
}

export const discord = new Discord();
