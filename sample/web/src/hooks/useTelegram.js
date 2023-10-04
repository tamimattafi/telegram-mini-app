export function useTelegram() {
    const webApp = window.Telegram.WebApp
    const user = webApp.initDataUnsafe?.user

    const onClose = () => {
        webApp.close()
    }

    const onToggleMainButton = () => {
        if (!webApp.MainButton.isVisible) {
            webApp.MainButton.show()
        } else {
            webApp.MainButton.hide()
        }
    }

    return {
        webApp,
        user,
        onClose,
        onToggleMainButton
    }
}