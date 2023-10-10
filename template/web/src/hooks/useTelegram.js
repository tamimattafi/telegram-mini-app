// This is a hook function, used to provide access to telegram
export function useTelegram() {
    const webApp = window.Telegram.WebApp
    const user = webApp.initDataUnsafe?.user

    // Use as a callback for method results
    const onArgumentResult = (functionName, argument, result) => {
        // Show function call result using an alert
        webApp.showAlert(`${functionName}(${argument}) returned ${result}`)
    }

    const onResult = (functionName, result) => {
        // Show function call result using an alert
        onArgumentResult(functionName, '', result)
    }

    // Use as a callback for some events
    const onReceivedEvent = (event, data) => {
        // Show function call result using an alert
        webApp.showAlert(`received event(${event}) with data(${data})`)
    }

    // Call a method on webApp while handling errors
    const executeArgumentMethod = (methodName, argument, method, ignoreAlert) => {
        try {
            const result = method()
            if (!ignoreAlert) {
                const wrappedResult = `Result: ${result}`
                onArgumentResult(methodName, argument, wrappedResult)
            }
        } catch (error) {
            onArgumentResult(methodName, argument, error)
        }
    }

    const executeMethod = (methodName, method, ignoreAlert) => {
        executeArgumentMethod(methodName, '', method, ignoreAlert)
    }

    return {
        webApp,
        user,
        onArgumentResult,
        onResult,
        onReceivedEvent,
        executeArgumentMethod,
        executeMethod
    }
}
