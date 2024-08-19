import Image from "next/image";
import qrImg from "../../public/assets/qr.png";
import { useEffect } from "react";
import { useLaunchParams } from "@telegram-apps/sdk-react";

export function ErrorPage({
  error,
  reset,
}: {
  error?: Error & { digest?: string };
  reset?: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black">
      <span className="text-white text-4xl mb-4">Play on your mobile!</span>
      <Image src={qrImg} className="w-60" alt="" />
      <span className="text-white text-4xl my-4">XList</span>
    </div>
  );
}
