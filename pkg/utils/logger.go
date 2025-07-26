package utils

import "fmt"

const (
	Reset  = "\033[0m"
	Red    = "\033[31m"
	Green  = "\033[32m"
	Yellow = "\033[33m"
	Blue   = "\033[36m"
)

type AppLogger struct{}

func (AppLogger) Success(title string, message string) {
	fmt.Printf(Green+"\n[%s] ✅ %s %s\n", title, message, Reset)
}

func (AppLogger) Info(title string, message string) {
	fmt.Printf(Blue+"\n[%s] ℹ️ %s %s\n", title, message, Reset)
}

func (AppLogger) Warn(title string, message string) {
	fmt.Printf(Yellow+"\n[%s] ⚠️ %s %s\n", title, message, Reset)
}

func (AppLogger) Error(title string, message string, err error) {
	fmt.Printf(Red+"\n[%s] ❌ %s %s\n", title, message, err)
}

var Logger = AppLogger{}
