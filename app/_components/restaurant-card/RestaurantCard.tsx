import Heading from "@/shared/components/heading";
import Text from "@/shared/components/text";
import PinIcon from "@/assets/icons/pin.svg";
import WhiteDonutIcon from "@/assets/icons/white-donut.svg";
import DummyRestaurantImage from "@/assets/images/dummy-restaurant-image.png";
import Image from "next/image";

export interface RestaurantCardProps {
  donut: 1 | 2 | 3 | 4;
  restaurant_thumbnail: string;
  restaurant_name: string;
  restaurant_position: string;
  restaurant_link: string;
  latitude: number;
  longitude: number;
  restaurant_info: Record<string, string>[];
}

export default function RestaurantCard(props: RestaurantCardProps) {
  const { donut, restaurant_name, restaurant_position } = props;

  return (
    <div className="flex flex-col rounded-3xl w-full h-[520px] shadow-xl p-4 relative">
      <div className="flex items-center justify-center px-3 py-1 rounded-full bg-primary text-white absolute top-8 left-8 text-lg">
        <span className="font-bold mr-1">{donut}</span>
        <Image src={WhiteDonutIcon} alt="도넛 아이콘" width={18} height={16} />
      </div>

      <Image
        width={0}
        height={0}
        className="w-full h-48 sm:h-56 md:h-64 lg:h-72 rounded-3xl object-cover"
        src={DummyRestaurantImage}
        alt={restaurant_name}
      />

      <Heading level={4}>{restaurant_name}</Heading>
      <Text variant="span" className="flex mt-2 items-center">
        <Image
          src={PinIcon}
          alt="핀 아이콘"
          width={15}
          height={18}
          className="mr-2"
        />
        {restaurant_position}
      </Text>

      <div className="group text-secondary transition duration-300 mt-auto hover:font-bold cursor-pointer">
        자세히보기
        <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-secondary" />
      </div>
    </div>
  );
}
