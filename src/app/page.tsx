"use client"
import Link from "next/link";
import { useEffect } from "react";
import Script from "next/script";

export default function Home() {
  const items = [
    { id: 1, name: "Blum", description: "🤑" },
    { id: 2, name: "DOGS", description: "🐶 🐶" },
    { id: 3, name: "Notcoin", description: "💎" },
    { id: 4, name: "Tapswap", description: "🔃" },
    { id: 5, name: "Memefi", description: "🪙" },
    { id: 6, name: "Pixeltap", description: "🤩" },
    { id: 7, name: "Lost Dogs", description: "😎" },
    { id: 8, name: "Mid projects", description: "⬇️" },
    { id: 9, name: "Muskempire", description: "" },
    { id: 10, name: "Timefarm", description: "⏳" },
    { id: 11, name: "Hamster kombat", description: "🐹" },
    { id: 12, name: "Major", description: "⭐️" },
    { id: 13, name: "Catizen", description: "🦁" },
    { id: 14, name: "Banana", description: "🍌" },
  ];

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      window.Telegram &&
      window.Telegram.WebApp
    ) {
      // Ensure the WebApp is ready
      window.Telegram.WebApp.expand(); // Call the function to expand the WebApp
    }
  }, []);

  return (
    <>
      <Script
        src="https://telegram.org/js/telegram-web-app.js"
        strategy="beforeInteractive"
        onLoad={() => {
          console.log("Telegram Web App SDK loaded");
          if (
            typeof window !== "undefined" &&
            window.Telegram &&
            window.Telegram.WebApp
          ) {
            window.Telegram.WebApp.expand();  
          }
        }}
      />
      <div className="min-h-screen bg-gray-100 p-8">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
          Our List - Remember to Play Every Day
        </h1>
        <h2 className="text-black mb-4 font-bold">Best projects💲💎⬇️</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <Link key={item.id} href={`/#`} passHref>
              <div className="bg-white shadow-lg rounded-lg p-6 cursor-pointer hover:bg-gray-50 transition flex items-center justify-between">
                <div className="flex items-center">
                  <span className="text-2xl text-gray-600 mr-3">
                    {item.description}
                  </span>
                  <span className="text-xl font-semibold text-gray-900">
                    {item.name}
                  </span>
                </div>
                <span className="text-2xl text-gray-600">👈</span>
              </div>
            </Link>
          ))}
        </div>
      </div>{" "}
    </>
  );
}
