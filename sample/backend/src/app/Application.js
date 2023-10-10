import { launchBot } from "../telegram/Bot.js";
import {launchApi, MESSAGE_PATH} from "../http/Api.js";

/**
 * This is the entry point of our app
 * Call this method inside index.js to launch the bot and the api
 *
 */
export function launchApp() {
    // Read token from .env file and use it to launch telegram bot
    const bot = launchBot(process.env.BOT_TOKEN)

    // Launch api
    const api = launchApi()

    // Listen to post requests on messages endpoint
    api.post(MESSAGE_PATH, async (request, response) => {
        await handleMessageRequest(bot, request, response)
    })
}


/**
 * Receives data from the mini app and sends a simple message using answerWebAppQuery
 * @see https://core.telegram.org/bots/api#answerwebappquery
 *
 * We will use InlineQueryResult to create our message
 * @see https://core.telegram.org/bots/api#inlinequeryresult
 */
const handleMessageRequest = async (bot, request, response) => {
    try {
        // Read data from the request body received by the mini app
        const {queryId, message} = request.body


        // We are creating InlineQueryResultArticle
        // See https://core.telegram.org/bots/api#inlinequeryresultarticle
        const article = {
            type: 'article',
            id: queryId,
            title: 'Message from the mini app',
            input_message_content: {
                message_text: `MiniApp: ${message}`
            }
        }

        // Use queryId and data to send a message to the bot chat
        await bot.answerWebAppQuery(queryId, article)

        // End the request with a success code
        response.status(200).json({})
    } catch (e) {
        response.status(500).json({})
    }
}
