import '@/config/env';
import { discordMessages } from '@/services/discordMessages';

function main(): void {
  discordMessages.sendWelcomeMessage();
  discordMessages.sendRulesMessage();
  discordMessages.sendStartHereMessage();
}

main();
