import Link from "next/link";
import Image from "next/image";
import ArrowRightIcon from "@/assets/icons/arrow-right.svg";

export default async function HomeBanner() {
  return (
    <section className="w-full h-[580px] bg-[url(../assets/images/banner-image.png)] bg-cover bg-center relative">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-content pt-16 pl-16">
          <p className="text-3xl font-bold">
            입만 산 미식가
            <br />
            홍준혁과 김령담의
          </p>
          <span className="text-[98px] font-bold">맛집 리스트</span>
        </div>

        <Link
          className="flex items-center border-2 px-8 py-2 border-white rounded-full text-white text-xl font-bold w-fit gap-2 absolute bottom-9 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          href="/restaurants"
        >
          지도로 보기
          <Image
            src={ArrowRightIcon}
            alt="지도로 보기 아이콘"
            width={10}
            height={10}
          />
        </Link>
      </div>
    </section>
  );
}
