import API_URL from "./Variables"

/**
 * Uses simple fetch() to send message to the bot server using REST API
 *
 * @param message the message to be sent
 * @param queryId get from webApp.initDataUnsafe?.query_id
 */
export const sendMessageToServer = async (message, queryId) => {
    const body = {
        queryId: queryId,
        message: message
    }

    const messagesEndpoint = `${API_URL}/messages`
    return await fetch(messagesEndpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
}
