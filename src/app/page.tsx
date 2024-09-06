"use client";

import {
  MouseEvent,
  MouseEventHandler,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
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
import { isDayPassed } from "@/utils";
import Item from "@/components/Item";

export default function InitDataPage() {
  const initData = useInitData();
  const cloudStorage = initCloudStorage();
  const router = useRouter();

  const [storageData, setStorageData] = useState<any[]>([]);
  const [favs, setFavs] = useState<number[]>([]);

  const userRows = useMemo<User | undefined>(() => {
    return initData && initData.user ? initData.user : undefined;
  }, [initData]);

  const setStorage = (id: number, url: string) => {
    const data = localStorage.getItem("ids");
    let newIds = [];

    if (data) newIds = JSON.parse(data);

    newIds.push({ date: new Date(), id });
    localStorage.setItem("ids", JSON.stringify(newIds));
    setStorageData(newIds);
    router.push(url, { scroll: false });
  };

  const addToFav = (event: any, id: number): void => {
    event.stopPropagation();
    setFavs((prevFavs) => {
      if (prevFavs.includes(id)) return prevFavs.filter((fav) => fav !== id);
      else return [...prevFavs, id];
    });
    console.log(favs);
  };

  const data = useMemo(() => {
    const favsArr: any[] = [];
    const noFavs: any[] = [];
    items.forEach((i: any) => {
      if (favs.includes(i.id)) favsArr.push(i);
      else noFavs.push(i);
    });
    return { favsArr, noFavs };
  }, [favs, items]);

  useEffect(() => {
    if (favs.length > 0) localStorage.setItem("favs", JSON.stringify(favs));
  }, [favs]);

  useEffect(() => {
    const data = localStorage.getItem("ids");
    if (data) {
      const ids = JSON.parse(data);
      const currentDate = new Date();

      const filteredIds = ids.filter((item: any) => {
        const itemDate = new Date(item.date);
        return !isDayPassed(itemDate, currentDate);
      });

      localStorage.setItem("ids", JSON.stringify(filteredIds));
      setStorageData(filteredIds);
    }
  }, []);

  useEffect(() => {
    const data = localStorage.getItem("favs");
    if (data) {
      const ids = JSON.parse(data);
      setFavs(ids);
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
        {data.favsArr.map((i: any) => (
          <Item item={i} isFav={true} addToFav={addToFav} key={i.id} />
        ))}

        {data.noFavs.map((item) => (
          <Item item={item} addToFav={addToFav} key={item.id} />
        ))}
      </div>
    </div>
  );
}
