import { RestaurantCardProps } from "@/app/_components/restaurant-card/RestaurantCard";

export const SIMPLE_RESTAURANTS_LIST: RestaurantCardProps[] = [
  {
    donut: 3,
    restaurant_thumbnail: "https://example.com/restaurant1.jpg",
    restaurant_name: "레스토랑 1",
    restaurant_position: "서울 강남구",
    restaurant_link: "https://example.com/restaurant1",
    latitude: 37.498095,
    longitude: 127.02761,
    restaurant_info: [
      { 전화번호: "02-1234-5678" },
      { 영업시간: "10:00 - 22:00" },
      { 추천메뉴: "스테이크" },
    ],
  },
  {
    donut: 2,
    restaurant_thumbnail: "https://example.com/restaurant2.jpg",
    restaurant_name: "레스토랑 2",
    restaurant_position: "서울 마포구",
    restaurant_link: "https://example.com/restaurant2",
    latitude: 37.5502,
    longitude: 126.903,
    restaurant_info: [
      { 전화번호: "02-2345-6789" },
      { 영업시간: "11:00 - 23:00" },
      { 추천메뉴: "파스타" },
    ],
  },
  {
    donut: 4,
    restaurant_thumbnail: "https://example.com/restaurant3.jpg",
    restaurant_name: "레스토랑 3",
    restaurant_position: "부산 해운대구",
    restaurant_link: "https://example.com/restaurant3",
    latitude: 35.1587,
    longitude: 129.1609,
    restaurant_info: [
      { 전화번호: "051-345-6789" },
      { 영업시간: "09:00 - 21:00" },
      { 추천메뉴: "초밥" },
    ],
  },
];
