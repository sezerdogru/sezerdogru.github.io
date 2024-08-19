"use client";

import { useMemo } from "react";
import Link from "next/link";
import { useInitData, type User } from "@telegram-apps/sdk-react";
import { Avatar } from "@telegram-apps/telegram-ui";
import tonSvg from "./_assets/ton.svg";
import arteImg from "../../public/assets/arte.jpg";
import yesImg from "../../public/assets/yes.jpg";
import tapImg from "../../public/assets/tap.jpg";
import pixelImg from "../../public/assets/pixel.jpg";
import Image from "next/image";

const items = [
  {
    id: 1,
    name: "Blum",
    img: null,
    url: "https://t.me/BlumCryptoBot/app?startapp=ref_0y0yjy5hLN",
  },
  {
    id: 2,
    name: "DOGS",
    img: null,
    url: "https://t.me/dogshouse_bot/join?startapp=bkvmadi2SOeJ71pYim1UBg",
  },
  { id: 3, name: "Notcoin", img: null, url: "" },
  {
    id: 4,
    name: "Tapswap",
    img: tapImg,
    url: "https://t.me/tapswap_mirror_1_bot?start=r_1034241175",
  },
  { id: 5, name: "Memefi", img: null, url: "" },
  {
    id: 6,
    name: "Pixeltap",
    img: pixelImg,
    url: "https://t.me/pixelversexyzbot?start=1034241175",
  },
  { id: 7, name: "Lost Dogs", img: null, url: "" },
  { id: 8, name: "Mid projects", img: null, url: "" },
  { id: 9, name: "Muskempire", img: null, url: "" },
  { id: 10, name: "Timefarm", img: null, url: "" },
  {
    id: 11,
    name: "Hamster kombat",
    img: null,
    url: "https://t.me/haMster_kombat_bot/start?startapp=kentId1034241175",
  },
  { id: 12, name: "Major", img: null, url: "" },
  {
    id: 13,
    name: "Catizen",
    img: null,
    url: "https://t.me/catizenbot/gameapp?startapp=r_752_7521331",
  },
  { id: 14, name: "Banana", img: null, url: "" },
  {
    id: 15,
    name: "Arte Farm",
    img: arteImg,
    url: "https://t.me/artefarm_bot?start=KyQtUrCt",
  },
  {
    id: 16,
    name: "YesCoin",
    img: yesImg,
    url: "https://t.me/realyescoinbot/something?startapp=r_1034241175 ",
  },
  {
    id: 17,
    url: "http://t.me/catsgang_bot/join?startapp=axEnI3YjOC2Z7BZCa44DN",
    name: "Cats",
    img: null,
  },
  {
    id: 18,
    url: "https://t.me/duckscoop_bot/app?startapp=ocT5N3VpfC",
    name: "Ducks",
    img: null,
  },
  {
    id: 19,
    url: "http://t.me/token1win_bot/start?startapp=refId1034241175",
    name: "1win",
    img: null,
  },
];

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
