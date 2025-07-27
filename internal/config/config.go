package config

import (
	"os"

	"github.com/MatheusIshiyama/meowhaha/pkg/logger"
	"github.com/joho/godotenv"
)

func init() {
	if err := godotenv.Load(); err != nil {
		logger.Error("ENV", "No .env file found, using system environment variables", err)
	}
}

type Config struct {
	DiscordToken string
}

func Load() Config {
	return Config{
		DiscordToken: os.Getenv("DISCORD_TOKEN"),
	}
}
