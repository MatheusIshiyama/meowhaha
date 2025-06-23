import { logger } from '@/utils/logger';
import axios from 'axios';
import FormData from 'form-data';

class Discord {
  private token: string;
  private api: string;

  constructor() {
    this.token = process.env.DISCORD_TOKEN || '';
    this.api = 'https://discord.com/api/v10';
  }

  async sendMessage(channelId: string, data: any, withComponents: boolean = false) {
    try {
      if (!this.token) throw new Error('DISCORD_TOKEN is not set');

      const isFormData = data instanceof FormData;

      const response = await axios.post(`${this.api}/channels/${channelId}/messages?with_components=${withComponents}`, data, {
        headers: {
          Authorization: `Bot ${this.token}`,
          ...(isFormData ? data.getHeaders() : { 'Content-Type': 'application/json' }),
        },
      });

      return response.data;
    } catch (error) {
      logger('ERROR', 'DISCORD', error);
    }
  }
}

export const discord = new Discord();
