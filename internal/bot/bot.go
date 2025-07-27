package bot

import (
	"flag"

	"github.com/MatheusIshiyama/meowhaha/internal/config"
	"github.com/MatheusIshiyama/meowhaha/internal/events"
	"github.com/MatheusIshiyama/meowhaha/internal/services/discord"
	"github.com/MatheusIshiyama/meowhaha/pkg/logger"
	"github.com/bwmarrin/discordgo"
)

var (
	bot          *discordgo.Session
	discordToken = flag.String("discord-token", config.Load().DiscordToken, "Discord bot token")
)

func init() {
	flag.Parse()
}

func Start() {
	botSession, err := discordgo.New("Bot " + *discordToken)
	if err != nil {
		logger.Error("BOT", "Error creating Discord session", err)
		return
	}

	bot = botSession

	SetEventsHandlers()

	err = bot.Open()
	if err != nil {
		logger.Error("BOT", "Error opening Discord session", err)
		return
	}
}

func SetEventsHandlers() {
	bot.AddHandler(events.Ready)
}

func SetRandomActivity() {
	activity := discord.Activity.GetRandomActivity()
	discord.Activity.SetPresence(bot, activity)
}

func Close() {
	bot.Close()
}
