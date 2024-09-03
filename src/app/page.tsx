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
    name: "Tomarket",
    img: null,
    url: "https://t.me/Tomarket_ai_bot/app?startapp=0000qtKx"
  },
  {
    id: 2,
    name: "Fintopio",
    img: null,
    url: "https://fintop.io/2s8YzRz3WH"
  },
  {
    id: 3,
    name: "Blum",
    img: null,
    url: "https://t.me/blum/app?startapp=ref_0y0yjy5hLN"
  },
  {
    id: 4,
    name: "Hot Wallet",
    img: null,
    url: "https://t.me/herewalletbot/app?startapp=10419750"
  },
  {
    id: 5,
    name: "Village",
    img: null,
    url: "https://t.me/herewalletbot/app?startapp=10419750-village-178850"
  },
  {
    id: 6,
    name: "Dogs",
    img: null,
    url: "https://t.me/dogshouse_bot/join?startapp=bkvmadi2SOeJ71pYim1UBg"
  },
  {
    id: 7,
    name: "Bird Ton",
    img: null,
    url: "https://t.me/BIRDTonBot/app?startapp=1034241175"
  },
  {
    id: 8,
    name: "Okx Racer",
    img: null,
    url: "https://t.me/OKX_official_bot/OKX_Racer?startapp=linkCode_95594511"
  },
  {
    id: 9,
    name: "Bitget",
    img: null,
    url: "https://t.me/BitgetOfficialBot/Bitget?startapp=JwnaGhlngUX3oFNY1AWUBopuj7SF6JZ"
  },
  {
    id: 10,
    name: "Major",
    img: null,
    url: "https://t.me/major/start?startapp=1034241175"
  },
  {
    id: 11,
    name: "Spell Wallet",
    img: null,
    url: "https://t.me/spell_wallet_bot/wallet?startapp=referral=sei1r7qrl7kt4lkek74cwhfg20854wg7tylmtxyu4t"
  },
  {
    id: 12,
    name: "Seed App",
    img: null,
    url: "t.me/seed_coin_bot/app?startapp=1034241175"
  },
  {
    id: 13,
    name: "Time Farm",
    img: null,
    url: "https://t.me/TimeFarmCryptoBot?start=L62IE9FFjft2u9dX"
  },
  {
    id: 14,
    name: "Vertus",
    img: null,
    url: "https://t.me/vertus_app_bot/app?startapp=1034241175"
  },
  {
    id: 15,
    name: "Cyber Finance",
    img: null,
    url: "https://t.me/CyberFinanceBot/game?startapp=cj1raENlaENub2MyZlgmdT1yZWY"
  },
  {
    id: 16,
    name: "Cex.io",
    img: null,
    url: "https://t.me/cexio_tap_bot?start=1716712060363033"
  },
  {
    id: 17,
    name: "Second Live",
    img: null,
    url: "https://t.me/Secondlive_bot/app?startapp=armnessh"
  },
  {
    id: 18,
    name: "PocketFi",
    img: null,
    url: "https://t.me/pocketfi_bot/Mining?startapp=1034241175"
  },
  {
    id: 19,
    name: "Pixie",
    img: null,
    url: "https://t.me/pixie_project_bot?start=1034241175"
  },
  {
    id: 20,
    name: "Arena Games",
    img: null,
    url: "https://t.me/Arenavsbot?start=ref_nXztFZAqv39a8b9zhqQhx7"
  },
  {
    id: 21,
    name: "Zavod Wallet",
    img: null,
    url: "https://t.me/Mdaowalletbot?start=1034241175"
  },
  {
    id: 22,
    name: "Drum game",
    img: null,
    url: "https://t.me/drumtap_bot?start=1716917987487359"
  },
  {
    id: 23,
    name: "Ton Fish",
    img: null,
    url: "https://t.me/TONPET_premining_bot?start=Aeroaki"
  },
  {
    id: 24,
    name: "Iceberg",
    img: null,
    url: "https://t.me/IcebergAppBot?start=referral_1034241175"
  },
  {
    id: 25,
    name: "Dragonz Land",
    img: null,
    url: "https://t.me/dragonz_land_bot/app?startapp=ref-667c2156e2069e47c98dd938"
  },
  {
    id: 26,
    name: "City Holder",
    img: null,
    url: "https://t.me/cityholder/game?startapp=1034241175"
  },
  {
    id: 27,
    name: "Memefi",
    img: null,
    url: "https://t.me/memefi_coin_bot?start=r_e6819b1bac"
  },
  {
    id: 28,
    name: "Bounty Bay",
    img: null,
    url: "https://t.me/bountybay_bot/deals?startapp=invite-3da54497"
  },
  {
    id: 29,
    name: "Hexn",
    img: null,
    url: "https://t.me/hexn_bot/app?startapp=9bd213c4-073f-49a3-b9cc-8eb67f4b3b09"
  },
  {
    id: 30,
    name: "Spinner Coin",
    img: null,
    url: "https://t.me/SpinnerCoin_bot/app?startapp=r_215458"
  },
  {
    id: 31,
    name: "Musk Empire",
    img: null,
    url: "https://t.me/empirebot/game?startapp=hero1034241175"
  },
  {
    id: 32,
    name: "Rocky Rabbit",
    img: null,
    url: "https://t.me/rocky_rabbit_bot/play?startapp=frId1034241175"
  },
  {
    id: 33,
    name: "Chick Coop",
    img: null,
    url: "https://t.me/chickcoopofficial_bot/chickcoop?startapp=ref_1034241175"
  },
  {
    id: 34,
    name: "Cats",
    img: null,
    url: "http://t.me/catsgang_bot/join?startapp=axEnI3YjOC2Z7BZCa44DN"
  },
  {
    id: 35,
    name: "Tabizoo",
    img: null,
    url: "https://t.me/tabizoobot/tabizoo?startapp=2aPksQ"
  },
  {
    id: 36,
    name: "Crypto Rank",
    img: null,
    url: "https://t.me/cryptorank_app_bot/points?startapp=ref_1034241175_"
  },
  {
    id: 37,
    name: "YesCoin",
    img: null,
    url: "https://t.me/theYescoin_bot/Yescoin?startapp=lQbHm8"
  },
  {
    id: 38,
    name: "Yescoin 2",
    img: null,
    url: "https://t.me/realyescoinbot/something?startapp=r_1034241175"
  },
  {
    id: 39,
    name: "Yescoin 3 (yumify)",
    img: null,
    url: "https://t.me/Yumify_Bot?start=1034241175"
  },
  {
    id: 40,
    name: "Dotcoin",
    img: null,
    url: "https://t.me/dotcoin_bot?start=r_1034241175"
  },
  {
    id: 41,
    name

: "Hold Coin",
    img: null,
    url: "https://t.me/theHoldCoinBot/app?startapp=ref_1gCFFiBn"
  },
  {
    id: 42,
    name: "Pixelverse",
    img: null,
    url: "https://t.me/pixelversexyzbot?start=1034241175"
  },
  {
    id: 43,
    name: "MozoAI",
    img: null,
    url: "https://t.me/MozoAI_bot?start=XaafU7Bv"
  },
  {
    id: 44,
    name: "Treasure Tapper",
    img: null,
    url: "https://t.me/treasure_tapper_bot/start?startapp=invite-1034241175-1724328465969-invite"
  },
  {
    id: 45,
    name: "W coin",
    img: null,
    url: "https://t.me/wcoin_tapbot?start=MTAzNDI0MTE3NQ"
  },
  {
    id: 46,
    name: "Bump",
    img: null,
    url: "https://t.me/MMproBump_bot?start=ref_1034241175"
  },
  {
    id: 47,
    name: "Onus",
    img: null,
    url: "https://t.me/onus_tap_tap_tap_bot/join?startapp=1721741410493"
  },
  {
    id: 48,
    name: "Match Quest",
    img: null,
    url: "https://t.me/MatchQuestBot/start?startapp=0c378c83a599fa465409f7ee08d87d85"
  },
  {
    id: 49,
    name: "OrbitonX",
    img: null,
    url: "https://t.me/orbitonx_bot/orbitonx?startapp=friendId1034241175"
  },
  {
    id: 50,
    name: "Hold Wallet",
    img: null,
    url: "(Suspended)"
  },
  {
    id: 51,
    name: "Gemz",
    img: null,
    url: "https://t.me/gemzcoin_bOt/tap?startapp=17zZNH-UMDI5MW24KYouQWlE"
  },
  {
    id: 52,
    name: "Memeland",
    img: null,
    url: "https://t.me/metaland_bot/click?startapp=1034241175"
  },
  {
    id: 53,
    name: "Xkucoin",
    img: null,
    url: "https://t.me/xkucoinbot/kucoinminiapp?startapp=cm91dGU9JTJGdGFwLWdhbWUlM0ZpbnZpdGVyVXNlcklkJTNEMTAzNDI0MTE3NSUyNnJjb2RlJTNE"
  },
  {
    id: 54,
    name: "Dormint",
    img: null,
    url: "https://t.me/dormint_bot/dormint_bot?startapp=ref_R3X2Z6UGB6LUJJJ5AAC6"
  },
  {
    id: 55,
    name: "Banana",
    img: null,
    url: "https://t.me/OfficialBananaBot/banana?startapp=referral=N4HAQU"
  },
  {
    id: 56,
    name: "Swopin",
    img: null,
    url: "https://t.me/swopin_bot/swopin?startapp=1034241175"
  },
  {
    id: 57,
    name: "Gamee",
    img: null,
    url: "https://t.me/gamee/start?startapp=ref_1034241175"
  },
  {
    id: 58,
    name: "Oxygen Miner",
    img: null,
    url: "https://t.me/oxygenminerbot/app?startapp=1034241175"
  },
  {
    id: 59,
    name: "Empire",
    img: null,
    url: "https://t.me/empire_gamebot/app?startapp=ref_86600279684e11efa9520242ac1b0002cd7a9c"
  },
  {
    id: 60,
    name: "Agent 301",
    img: null,
    url: "https://t.me/Agent301Bot/app?startapp=onetime1034241175"
  },
  {
    id: 61,
    name: "Grand Combat",
    img: null,
    url: "https://t.me/grandcombat_bot/start?startapp=pTvk54pfOC"
  },
  {
    id: 62,
    name: "Lost Dogs",
    img: null,
    url: "https://t.me/lost_dogs_bot/lodoapp?startapp=ref-u_1034241175__s_664035"
  },
  {
    id: 63,
    name: "Olycoin",
    img: null,
    url: "https://t.me/OLYCoinBot/OLYCoin?startapp=FS26EA5"
  },
  {
    id: 64,
    name: "Ducks",
    img: null,
    url: "https://t.me/duckscoop_bot/app?startapp=ocT5N3VpfC"
  },
  {
    id: 65,
    name: "Pigs",
    img: null,
    url: "https://t.me/PigshouseBot?start=1034241175"
  },
  {
    id: 66,
    name: "Graph Dex",
    img: null,
    url: "https://t.me/graph_dex_bot?start=1034241175"
  },
  {
    id: 67,
    name: "Coub",
    img: null,
    url: "https://t.me/coub/app?startapp=coub__marker_18276156"
  },
  {
    id: 68,
    name: "Birds",
    img: null,
    url: "https://t.me/birdx2_bot/birdx?startapp=1034241175"
  },
  {
    id: 69,
    name: "Cedex",
    img: null,
    url: "https://t.me/cedex_tap_bot?start=1717782182139537"
  },
  {
    id: 70,
    name: "Meta Racing",
    img: null,
    url: "https://t.me/metaracinggame_bot/app?startapp=bonus_jia73q5i9e"
  },
  {
    id: 71,
    name: "W3BFLIX",
    img: null,
    url: "https://t.me/W3BFLIXBot?start=iv521de3808a"
  },
  {
    id: 72,
    name: "Sphynx",
    img: null,
    url: "t.me/sphynxmeme_bot/bless?startapp=wHv4JR2W"
  },
  {
    id: 73,
    name: "Decode Seed",
    img: null,
    url: "https://t.me/DecodeSeedBot?start=JU67L4O4"
  },
  {
    id: 74,
    name: "Eggo Quest",
    img: null,
    url: "https://t.me/eggo_quest_bot?start=1034241175"
  },
  {
    id: 75,
    name: "Maneki Neko",
    img: null,
    url: "https://t.me/MNK_Inc_bot/mnk?startapp=invite_Aeroaki"
  },
  {
    id: 76,
    name: "Egg Drop",
    img: null,
    url: "https://t.me/EggDrop_GombleBot/app?startapp=5552c667b87a41c78d47ae25c15ce591"
  },
  {
    id: 77,
    name: "Gm.ai",
    img: null,
    url: "https://t.me/gmdotaibot?profile"
  },
  {
    id: 78,
    name: "Gain",
    img: null,
    url: "https://t.me/The_Gain_Bot?start=SbqQ6pGR"
  },
  {
    id: 79,
    name: "Gala Music Miner",
    img: null,
    url: "https://t.me/GalaMusicMinerEarnTREZBot/start?startapp=invite-1034241175-1725212927679"
  },
  {
    id: 80,
    name: "Akedo Games",
    img: null,
    url: "https://t.me/Akedo_Bot/AkedogGenerator?startapp=42975442776663_1034241175"
  },
  {
    id: 81,
    name: "Steamify",
    img: null,
    url: "https://t.me/steamify_bot/app?startapp=4KBr4G"
  },
  {
    id: 82,
    name: "Ton Kombat",
    img: null,
    url: "https://t.me/Ton_kombat_bot/app?startapp=1034241175"
  },
  {
    id: 83,
    name: "B",
    img: null,
    url: "t.me/b_usersbot/join?startapp=ref-5JRub6JCVcDMUYEcqWGyKk"
  },
  {
    id: 84,
    name: "Moonberg",
    img: null,
    url: "https://t.me/moonbergai_bot/join?startapp=LeOkPZIWSb"
  },
  {
    id: 85,
    name: "Clayton",
    img: null,
    url: "https://t.me/claytoncoinbot/game?startapp=1034241175"
  },
  {
    id: 86,
    name: "Zencoin",
    img: null,
    url: "https://t.me/theZencoin_bot/zencoin?startapp=r=1034241175"
  },
  {
    id: 87,
    name: "Hash Cats",
    img: null,
    url: "https://t.me/hash_cats_bot?start=mSRJomspyW"
  },
  {
    id: 88,
    name: "Moon land",
    img: null,
    url: "https://t.me/moon_land_bot/to_the_moon?startapp=SS7IW14"
  },
  {
    id: 89,
    name: "After Land",
    img: null,
    url: "https://t.me/Afterland_Bot/app?startapp=aladn9"
  },
  {
    id: 90,
    name: "Bunny Blitz",
    img: null,
    url: "https://t.me/BunnyBlitz_bot?start=r_1034241175"
  },
  {
    id: 91,
    name: "Acki Nacki",
    img: null,
    url: "https://t.me/ackinacki_bot/ackinacki_app?startapp=eyJyZWZlcnJlciI6ImFlcm9ha2kifQ"
  },
  {
    id: 92,
    name: "Kuroro Ranch",
    img: null,
    url: "https://t.me/KuroroRanchBot/ranch?startapp=ref-5AA88554"
  },
  {
    id: 93,
    name: "Victoria R",
    img: null,
    url: "https://t.me/VRtapBot?start=Oh8BwsoFfc1KZv45"
  },
  {
    id: 94,
    name: "Wizzwoods",
    img: null,
    url: "https://t.me/WizzwoodsBot/app?startapp=rp_1086972"
  },
  {
    id: 95,
    name: "Sauces World",
    img: null,
    url: "https://sauces.world/@akimoto"
  },
  {
    id: 96,
    name: "Fanton Football",
    img: null,
    url: "https://t.me/FanTonGameBot/app?startapp=play_utm-ref_MYHGl2nTOwRS_o1nHJSizr8k"
  },
  {
    id: 97,
    name: "SideKick Fans",
    img: null,
    url: "https://t.me/sidekick_fans_bot?start=1034241175"
  }
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
