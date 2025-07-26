package main

import (
	"os"
	"os/signal"
	"syscall"

	"github.com/MatheusIshiyama/meowhaha/pkg/utils"
	"github.com/bwmarrin/discordgo"
	"github.com/joho/godotenv"
)

func main() {
	err := godotenv.Load()

	if err != nil {
		utils.Logger.Error("ENV", "Error loading .env file", err)
		return
	}

	discord, err := discordgo.New("Bot " + os.Getenv("DISCORD_TOKEN"))

	if err != nil {
		utils.Logger.Error("BOT", "Error creating Discord session", err)
		return
	}

	discord.AddHandler(func(session *discordgo.Session, ready *discordgo.Ready) {

		utils.Logger.Success("BOT", "Is ready for action!")
	})

	err = discord.Open()

	if err != nil {
		utils.Logger.Error("BOT", "Error turning on the bot", err)
		return
	}

	// Wait here until CTRL-C or other term signal is received.
	utils.Logger.Info("BOT", "Is now running. Press CTRL-C to exit.")
	sc := make(chan os.Signal, 1)
	signal.Notify(sc, syscall.SIGINT, syscall.SIGTERM, os.Interrupt)
	<-sc

	// Cleanly close down the Discord session.
	discord.Close()
}
