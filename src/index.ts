import '@/config/env';
import { discordMessages } from './services/discordMessages';

function main() {
  //discordMessages.sendStartHereMessage();
  discordMessages.sendWelcomeMessage();
}

main();
