interface TelegramWebApp {
    expand(): void; 
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
  