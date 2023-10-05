export function useTelegram() {
    const webApp = window.Telegram.WebApp
    const user = webApp.initDataUnsafe?.user

    return {
        webApp,
        user
    }
}
