package scheduler

import (
	"github.com/MatheusIshiyama/meowhaha/internal/bot"
	"github.com/robfig/cron/v3"
)

var (
	cronJob *cron.Cron
)

func init() {
	cronJob = cron.New(cron.WithSeconds())

	cronJob.AddFunc("*/10 * * * * *", bot.SetRandomActivity)
}

func StartScheduler() {
	cronJob.Start()
}

func StopScheduler() {
	cronJob.Stop()
}
