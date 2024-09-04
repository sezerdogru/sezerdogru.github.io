"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import {
  useInitData,
  type User,
  initCloudStorage,
} from "@telegram-apps/sdk-react";
import { Avatar } from "@telegram-apps/telegram-ui";
import { items } from "@/data/items";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function InitDataPage() {
  const initData = useInitData();
  const cloudStorage = initCloudStorage();
  const router = useRouter();

  const [storageData, setStorageData] = useState<number[]>([]);

  const userRows = useMemo<User | undefined>(() => {
    return initData && initData.user ? initData.user : undefined;
  }, [initData]);

  const setStorage = (id: number, url: string) => {
    const data = localStorage.getItem("ids");
    let newIds;
    if (data) newIds = JSON.parse(data);
    else newIds = [];
    newIds.push(id);
    localStorage.setItem("ids", JSON.stringify(newIds));
    setStorageData(newIds);
    router.push(url, { scroll: false });
  };

  useEffect(() => {
    const data = localStorage.getItem("ids");
    if (data) {
      const ids = JSON.parse(data);
      setStorageData(ids);
    }
  }, []);

  return (
    <div className="min-h-screen bg-black p-6">
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

        <span className="text-white">{userRows?.username}</span>
      </div>
      {/*
        <span className="text-white">{webApp?.platform}</span>
        <span className="text-white">{webApp?.BiometricManager?.deviceId}</span>
        */}
      <h1 className="text-4xl font-bold mb-8 text-center text-white">
        Our List - Remember to Play Every Day
      </h1>
      <h2 className="text-white mb-4 font-bold">Best projects💲💎⬇️</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => {
          const isInclude = storageData.includes(item.id);
          return (
            <div key={item.id} onClick={() => setStorage(item.id, item.url)}>
              <div
                className={`${
                  isInclude ? "bg-white" : "bg-purple-500"
                } shadow-lg rounded-lg p-6 cursor-pointer hover:bg-white transition`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Image
                      src={
                        item?.img ??
                        "https://web.telegram.org/z/icon-192x192.png"
                      }
                      alt=""
                      width={47}
                      height={47}
                      className="mr-2 rounded-full"
                    />
                    <span className="text-xl font-semibold text-gray-900">
                      {item.name}
                    </span>
                  </div>
                  {isInclude && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6 text-orange-500 font-bold w-9 h-9"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      />
                    </svg>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
