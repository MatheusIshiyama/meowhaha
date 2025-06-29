import { Events, Interaction } from 'discord.js';

import { setGGCatsRole, setMeowFMRole, setMemberRole } from '@/handlers/interactions';
import { InteractionHandler } from '@/types/discord';

export const name: string = Events.InteractionCreate;

export const execute: (interaction: Interaction) => void = (interaction: Interaction) => {
  if (!interaction.isButton()) return;

  const interactionHandler: InteractionHandler | undefined = interactions[interaction.customId];

  if (!interactionHandler) return;

  interactionHandler(interaction);
};

const interactions: Record<string, InteractionHandler> = {
  'set-member-role': setMemberRole,
  'set-gg-cats-role': setGGCatsRole,
  'set-meow-fm-role': setMeowFMRole,
};
