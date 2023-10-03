// Launch the telegram bot
import { launchBot } from "./bot/bot.js";

// Read token from .env file and use it to launch telegram bot
launchBot(process.env.BOT_TOKEN)
