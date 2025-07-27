package bot

import (
	"flag"

	"github.com/MatheusIshiyama/meowhaha/internal/config"
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

	bot.AddHandler(func(session *discordgo.Session, ready *discordgo.Ready) {
		logger.Success("BOT", "Is ready for action!")
	})

	err = bot.Open()
	if err != nil {
		logger.Error("BOT", "Error opening Discord session", err)
		return
	}
}

func Close() {
	bot.Close()
}
