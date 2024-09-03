"use client";

import { useMemo } from "react";
import Link from "next/link";
import { useInitData, type User } from "@telegram-apps/sdk-react";
import { Avatar } from "@telegram-apps/telegram-ui";
import { items } from "@/data/items";
import Image from "next/image";

export default function InitDataPage() {
  const initData = useInitData();

  const userRows = useMemo<User | undefined>(() => {
    return initData && initData.user ? initData.user : undefined;
  }, [initData]);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/*<Link className="flex items-center mb-4" href="/ton-connect">
        <Image
          src={tonSvg.src}
          className="mr-2"
          style={{ backgroundColor: "#007AFF" }}
        />
        TON Connect
      </Link>*/}

      <div className="flex items-center mb-10">
        <Avatar
          size={28}
          src="https://web.telegram.org/z/icon-192x192.png"
          className="mr-2"
        />

        <span className="text-black">{userRows?.username}</span>
      </div>
      {/*
        <span className="text-black">{webApp?.platform}</span>
        <span className="text-black">{webApp?.BiometricManager?.deviceId}</span>
        */}
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
        Our List - Remember to Play Every Day
      </h1>
      <h2 className="text-black mb-4 font-bold">Best projects💲💎⬇️</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <Link key={item.id} href={item?.url ?? "#"} passHref>
            <div className="bg-white shadow-lg rounded-lg p-6 cursor-pointer hover:bg-gray-50 transition flex items-center justify-between">
              <div className="flex items-center">
                <Image
                  src={
                    item?.img ?? "https://web.telegram.org/z/icon-192x192.png"
                  }
                  alt=""
                  width={50}
                  height={50}
                  className="mr-2"
                />
                <span className="text-xl font-semibold text-gray-900">
                  {item.name}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
