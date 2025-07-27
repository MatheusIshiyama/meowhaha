package main

import (
	"os"
	"os/signal"
	"syscall"

	"github.com/MatheusIshiyama/meowhaha/internal/bot"
	"github.com/MatheusIshiyama/meowhaha/internal/scheduler"
)

func main() {
	go bot.Start()
	go scheduler.StartScheduler()

	// Wait here until CTRL-C or other term signal is received.
	stop := make(chan os.Signal, 1)
	signal.Notify(stop, syscall.SIGINT, syscall.SIGTERM, os.Interrupt)
	<-stop

	// Cleanly close down the Discord session.
	bot.Close()
	scheduler.StopScheduler()
}
