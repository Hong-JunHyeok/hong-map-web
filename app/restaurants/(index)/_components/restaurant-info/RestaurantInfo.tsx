import Image from "next/image";
import { type RestaurantCardProps } from "@/app/_components/restaurant-card/RestaurantCard";
import DummyRestaurantImage from "@/assets/images/dummy-restaurant-image.png";
import ExternalMapLinks from "../external-map-links";
import Badge from "@/shared/components/badge";
import CommentCard from "../comment-card";

type Props = {
  restaurant: RestaurantCardProps | null;
};

export default function RestaurantInfo({ restaurant }: Props) {
  if (!restaurant) {
    return (
      <div className="flex justify-center items-center h-full w-full">
        <p className="text-secondary">
          핀을 클릭하여 레스토랑 정보를 확인해보세요.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full">
      <Image
        width={0}
        height={0}
        className="w-full h-80 object-cover"
        src={DummyRestaurantImage}
        alt={restaurant?.restaurant_name || "레스토랑 이미지"}
      />
      <div className="flex items-center gap-1 max-w-[90%] mx-auto mt-4">
        <h2 className="font-bold text-2xl">{restaurant.restaurant_name}</h2>
        <Badge>{restaurant.donut} 도넛</Badge>
      </div>
      <ExternalMapLinks restaurantName={restaurant.restaurant_name} />
      <div className="my-2" />
      <CommentCard author="홍준혁" comment="아 개맛있네 진짜 ㅋㅋ" />
      <CommentCard author="김령담" comment="아 개맛있네 진짜 ㅋㅋ" />

      <div className="p-4 flex items-center flex-col mt-4 bg-secondary/10">
        <span className="text-lg font-semibold text-content">가게 정보</span>
        <ul>
          {restaurant?.restaurant_info
            ?.map((info) => Object.entries(info))
            ?.map(([key, value]) => (
              <li className="text-content">
                {key} : {value}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
