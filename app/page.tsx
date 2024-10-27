import List from "@/shared/components/list";
import HomeBanner from "./_components/home-banner";
import Heading from "@/shared/components/heading";
import RestaurantCard from "./_components/restaurant-card";
import { type RestaurantCardProps } from "./_components/restaurant-card/RestaurantCard";
import { SIMPLE_RESTAURANTS_LIST } from "@/assets/dummy";

export default function Home() {
  return (
    <div>
      <HomeBanner />

      <section className="max-w-[1200px] mx-auto">
        <Heading level={2} className="mt-24 mb-4">
          맛집 리스트
        </Heading>

        <List<RestaurantCardProps>
          values={SIMPLE_RESTAURANTS_LIST}
          renderItem={(value) => <RestaurantCard {...value} />}
          getKey={(value) => value.restaurant_name}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        />
      </section>
    </div>
  );
}
