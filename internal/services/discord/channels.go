package discord

import (
	"math/rand"
	"strconv"

	"github.com/MatheusIshiyama/meowhaha/pkg/logger"
	"github.com/bwmarrin/discordgo"
)

const (
	guildID              string = "1386212819669880913"
	serverMoodChannelID  string = "1386219879673237571"
	memberCountChannelID string = "1386226043320537190"
	boosterChannelID     string = "1388422157301977209"
)

var (
	moods = []string{
		"😺・Stay Paw-sitive",
		"🐾・Keep Purring",
		"😼・Claws Out",
		"🧶・Chase the Yarn",
		"😻・Dream Big, Meow",
		"🐱・Leap Higher",
		"🙀・Fearless Feline",
		"🐟・Catch Your Goal",
		"😽・Believe & Purr",
		"🌟・Shine, Little Cat",
	}
)

type ChannelService struct{}

func GetGuild(session *discordgo.Session) *discordgo.Guild {
	var Guild *discordgo.Guild

	for _, guild := range session.State.Guilds {
		if guild.ID == guildID {
			Guild = guild
			break
		}
	}

	if Guild == nil {
		logger.Error("DISCORD", "Guild not found", nil)
		return nil
	}

	return Guild
}

func (ChannelService) GetRandomMood() string {
	return moods[rand.Intn(len(moods))]
}

func (ChannelService) UpdateServerMood(session *discordgo.Session) {
	Guild := GetGuild(session)

	mood := Channel.GetRandomMood()

	channels := Guild.Channels
	for _, channel := range channels {
		if channel.ID == serverMoodChannelID {
			session.ChannelEditComplex(channel.ID, &discordgo.ChannelEdit{
				Name: mood,
			})
		}
	}
}

func (ChannelService) UpdateCounts(session *discordgo.Session) {
	Guild := GetGuild(session)

	boosterCount := 0
	for _, member := range Guild.Members {
		if member.PremiumSince != nil {
			boosterCount++
		}
	}

	channels := Guild.Channels
	for _, channel := range channels {
		if channel.ID == memberCountChannelID {
			session.ChannelEditComplex(channel.ID, &discordgo.ChannelEdit{
				Name: "😺・meows: " + strconv.Itoa(len(Guild.Members)),
			})
		}
		if channel.ID == boosterChannelID {
			session.ChannelEditComplex(channel.ID, &discordgo.ChannelEdit{
				Name: "💎・meow club: " + strconv.Itoa(boosterCount),
			})
		}
	}
}

var Channel = ChannelService{}
