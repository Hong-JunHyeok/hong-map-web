import Image from "next/image";
import Link from "next/link";
import LogoIcon from "@/assets/icons/logo.svg";
import MapIcon from "@/assets/icons/map.svg";
import MenusIcon from "@/assets/icons/menus.svg";

export default async function NavigationBar() {
  return (
    <nav className="bg-white fixed w-full z-[9999] h-[80px]">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto h-full">
        <div className="flex items-center">
          <Image width={48} height={48} alt="홍슐랭" src={LogoIcon} />
          <h1 className="ml-3 text-3xl">홍준혁의 발견</h1>
        </div>

        <ul className="flex gap-6 items-center">
          <li className="group">
            <Link href="/restaurants">
              <Image
                width={28}
                height={28}
                alt="레스토랑 리스트"
                src={MapIcon}
              />
            </Link>
          </li>

          <li className="group">
            <Image width={28} height={28} alt="메뉴" src={MenusIcon} />
          </li>
        </ul>
      </div>
    </nav>
  );
}
