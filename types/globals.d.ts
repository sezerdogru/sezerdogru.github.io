interface TelegramWebApp {
  expand(): void;
  initData: string;
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
