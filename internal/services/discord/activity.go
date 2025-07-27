package discord

import (
	"math/rand"

	"github.com/bwmarrin/discordgo"
)

var (
	activities = []discordgo.Activity{
		{Name: "with yarn", Type: discordgo.ActivityTypeGame},
		{Name: "over the litter box", Type: discordgo.ActivityTypeWatching},
		{Name: "/meow commands", Type: discordgo.ActivityTypeListening},
		{Name: "on the dashboard", Type: discordgo.ActivityTypeGame},
		{Name: "the treat counter", Type: discordgo.ActivityTypeWatching},
		{Name: "hairball logs", Type: discordgo.ActivityTypeWatching},
		{Name: "purr-formance stats", Type: discordgo.ActivityTypeWatching},
		{Name: "virtual mice", Type: discordgo.ActivityTypeGame},
		{Name: "whisker data sync", Type: discordgo.ActivityTypeGame},
		{Name: "the cat-alog", Type: discordgo.ActivityTypeGame},
		{Name: "with yarn", Type: discordgo.ActivityTypeGame},
	}
)

type ActivityService struct{}

func (ActivityService) GetRandomActivity() *discordgo.Activity {
	activity := activities[rand.Intn(len(activities))]

	return &activity
}

func (ActivityService) SetPresence(session *discordgo.Session, activity *discordgo.Activity) {
	session.UpdateStatusComplex(discordgo.UpdateStatusData{
		Status: "online",
		Activities: []*discordgo.Activity{
			activity,
		},
	})
}

var Activity = ActivityService{}
