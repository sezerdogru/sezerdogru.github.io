interface TelegramWebApp {
  expand(): void;
  initDataUnsafe: object;
}

interface Telegram {
  WebApp: TelegramWebApp;
}

declare global {
  interface Window {
    Telegram?: Telegram;
  }
}

export {};
