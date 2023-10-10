import API_URL from "./Variables"

/**
 * Uses simple fetch() to send message to the bot server using REST API
 *
 * @param message the message to be sent
 * @param queryId get from webApp.initDataUnsafe?.query_id
 * @param onResponse the callback that will handle the response
 */
export function sendMessageToServer(message, queryId, onResponse) {
    const body = {
        queryId,
        message
    }

    const messagesEndpoint = `${API_URL}/messages`
    fetch(messagesEndpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    }).then(onResponse)
}
