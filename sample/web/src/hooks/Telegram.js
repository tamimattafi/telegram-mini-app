const webApp = window.Telegram.WebApp

export function useTelegram() {
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