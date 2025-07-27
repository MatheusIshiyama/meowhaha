package scheduler

import (
	"github.com/MatheusIshiyama/meowhaha/internal/bot"
	"github.com/MatheusIshiyama/meowhaha/internal/services/discord"
	"github.com/robfig/cron/v3"
)

var (
	cronJob *cron.Cron
)

func init() {
	cronJob = cron.New(cron.WithSeconds())

	cronJob.AddFunc("*/10 * * * * *", func() {
		bot.SetRandomActivity()

		session := bot.GetSession()

		discord.Channel.UpdateServerMood(session)
		discord.Channel.UpdateCounts(session)
	})
}

func StartScheduler() {
	cronJob.Start()
}

func StopScheduler() {
	cronJob.Stop()
}
