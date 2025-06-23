import '@/config/env';
import { discordMessages } from '@/services/discordMessages';

function main(): void {
  discordMessages.sendStartHereMessage();
  discordMessages.sendWelcomeMessage();
}

main();
