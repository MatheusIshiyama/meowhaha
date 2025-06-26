import '@/config/env';
import { Bot } from '@/bot';
// import { discordMessages } from '@/services/discordMessages';

// function main(): void {
//   discordMessages.sendWelcomeMessage();
//   discordMessages.sendRulesMessage();
//   discordMessages.sendStartHereMessage();
// }

const bot: Bot = new Bot();
bot.start();
