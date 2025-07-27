package main

import (
	"os"
	"os/signal"

	"github.com/MatheusIshiyama/meowhaha/internal/bot"
	"github.com/MatheusIshiyama/meowhaha/pkg/logger"
)

func main() {
	go bot.Start()

	// Wait here until CTRL-C or other term signal is received.
	logger.Info("APP", "Is now running. Press CTRL-C to exit.")
	stop := make(chan os.Signal, 1)
	signal.Notify(stop, os.Interrupt)
	<-stop

	// Cleanly close down the Discord session.
	bot.Close()
}
