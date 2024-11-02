import { SiNaver } from "react-icons/si";
import { RiKakaoTalkFill } from "react-icons/ri";
import Link from "next/link";
import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

function ExtenalButton({
  url,
  children,
  type,
}: PropsWithChildren<{ url: string; type: "naver" | "kakao" }>) {
  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={twMerge(
        "px-4 rounded-md transition flex gap-2 text-content font-bold text-sm h-[36px] items-center",
        type === "naver" && "border border-green-500",
        type === "kakao" && "border border-yellow-500"
      )}
    >
      {children}
    </Link>
  );
}

type Props = {
  restaurantName: string;
};

export default function ExternalMapLinks({ restaurantName }: Props) {
  const naverMapUrl = `https://map.naver.com/p/search/${encodeURIComponent(
    restaurantName
  )}`;
  const kakaoMapUrl = `https://map.kakao.com/link/search/${encodeURIComponent(
    restaurantName
  )}`;

  return (
    <div className="mt-4 text-center flex mx-auto gap items-center justify-center gap-2">
      <ExtenalButton url={naverMapUrl} type="naver">
        <SiNaver size={20} />
        네이버 맵으로 보기
      </ExtenalButton>
      <ExtenalButton url={kakaoMapUrl} type="kakao">
        <RiKakaoTalkFill size={25} />
        카카오 맵으로 보기
      </ExtenalButton>
    </div>
  );
}
