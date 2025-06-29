import axios, { AxiosResponse } from 'axios';
import FormData from 'form-data';

import { logger } from '@/utils';

class DiscordApi {
  private token: string;
  private api: string;

  constructor() {
    this.token = process.env.DISCORD_TOKEN || '';
    this.api = `https://discord.com/api/${process.env.DISCORD_API_VERSION || 'v10'}`;
  }

  async sendMessage(channelId: string, data: any, withComponents: boolean = false): Promise<any> {
    try {
      if (!this.token) throw new Error('DISCORD_TOKEN is not set');

      const isFormData: boolean = data instanceof FormData;

      const response: AxiosResponse = await axios.post(
        `${this.api}/channels/${channelId}/messages?with_components=${withComponents}`,
        data,
        {
          headers: {
            Authorization: `Bot ${this.token}`,
            ...(isFormData ? data.getHeaders() : { 'Content-Type': 'application/json' }),
          },
        },
      );

      return response.data;
    } catch (error) {
      logger('ERROR', 'DISCORD API - SEND MESSAGE', error);
    }
  }

  async updateChannelName(channelId: string, name: string): Promise<any> {
    try {
      const response: AxiosResponse = await axios.patch(
        `${this.api}/channels/${channelId}`,
        { name },
        {
          headers: {
            Authorization: `Bot ${this.token}`,
          },
        },
      );

      return response.data;
    } catch (error) {
      logger('ERROR', 'DISCORD API - UPDATE CHANNEL NAME', error);
    }
  }

  async pinMessage(channelId: string, messageId: string): Promise<any> {
    try {
      const response: AxiosResponse = await axios.put(
        `${this.api}/channels/${channelId}/messages/pins/${messageId}`,
        {
          channel_id: channelId,
        },
        {
          headers: {
            Authorization: `Bot ${this.token}`,
          },
        },
      );

      return response.data;
    } catch (error) {
      logger('ERROR', 'DISCORD API - PIN MESSAGE', error);
    }
  }
}

export const discordApi: DiscordApi = new DiscordApi();
