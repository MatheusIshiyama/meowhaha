import { channelDescriptions } from '@/config/discord';
import { ChannelDescription, DiscordMessage } from '@/types/discord';
import { logger, margin1 } from '@/utils';

export const getChannelDescription: (channelId: string) => DiscordMessage | void = (channelId: string): DiscordMessage | void => {
  const description: ChannelDescription | undefined = channelDescriptions.find(
    (description: ChannelDescription) => description.id === channelId,
  );

  if (!description) return logger('ERROR', 'DISCORD - getChannelDescription', 'Channel description not found');

  return createChannelDescription(description);
};

const createChannelDescription: (description: ChannelDescription) => DiscordMessage = ({
  title,
  content,
}: ChannelDescription): DiscordMessage => {
  return {
    flags: 32768,
    components: [
      {
        type: 17,
        components: [
          margin1,
          {
            type: 10,
            content: `# ${title}`,
          },
          margin1,
          {
            type: 10,
            content,
          },
          margin1,
        ],
      },
    ],
  };
};
