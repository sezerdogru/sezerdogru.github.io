import Image from "next/image";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";

const Item = ({
  isFav = false,
  item,
  addToFav,
}: {
  item: any;
  isFav?: boolean;
  addToFav: (...args: any) => void;
}) => {
  const [storageData, setStorageData] = useState<any[]>([]);
  const [favs, setFavs] = useState<number[]>([]);

  const router = useRouter();

  const setStorage = (id: number, url: string) => {
    const data = localStorage.getItem("ids");
    let newIds = [];

    if (data) newIds = JSON.parse(data);

    newIds.push({ date: new Date(), id });
    localStorage.setItem("ids", JSON.stringify(newIds));
    setStorageData(newIds);
    router.push(url, { scroll: false });
  };

  const isInclude = useMemo(
    () => storageData.find((i: any) => item.id === i.id),
    [storageData]
  );

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
              src={item?.img ?? "https://web.telegram.org/z/icon-192x192.png"}
              alt=""
              width={47}
              height={47}
              className="mr-2 rounded-full"
            />
            <span className="text-xl font-semibold text-gray-900">
              {item.name}
            </span>
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

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            onClick={(event: any) => addToFav(event, item.id)}
            stroke="currentColor"
            className={`size-10 mx-4 ${isFav ? "text-yellow-500" : ""}`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Item;
