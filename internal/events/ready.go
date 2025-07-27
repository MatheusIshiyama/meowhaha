package events

import (
	"github.com/MatheusIshiyama/meowhaha/internal/services/discord"
	"github.com/MatheusIshiyama/meowhaha/pkg/logger"
	"github.com/bwmarrin/discordgo"
)

func Ready(session *discordgo.Session, event *discordgo.Ready) {
	logger.Success("BOT", "Logged in as "+event.User.Username)
	discord.Activity.SetPresence(session, discord.Activity.GetRandomActivity())
}
