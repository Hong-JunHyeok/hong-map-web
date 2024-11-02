"use client";

import { SIMPLE_RESTAURANTS_LIST } from "@/assets/dummy";
import { MapContainer } from "@/shared/libs/map-sdk";
import MapMarker from "@/shared/libs/map-sdk/MapMarker";
import { RestaurantCardProps } from "@/app/_components/restaurant-card/RestaurantCard";
import MapPositionDisplayer from "@/shared/libs/map-sdk/MapPostionDisplayer";
import SideBar from "./_components/side-bar";
import { useState } from "react";
import RestaurantInfo from "./_components/restaurant-info";

export default function Page() {
  const [selectedRestaurant, setSelectedRestaurant] =
    useState<RestaurantCardProps | null>(null);

  return (
    <>
      <SideBar>
        <RestaurantInfo restaurant={selectedRestaurant} />
      </SideBar>

      <MapContainer
        center={[36.5, 127.8]}
        zoom={7}
        maxBounds={[
          [33.0, 124.0],
          [39.5, 132.0],
        ]}
        height={`calc(100vh - 80px)`}
        minZoom={7}
        maxBoundsViscosity={1}
      >
        <MapPositionDisplayer mapPosition="topright" />
        {SIMPLE_RESTAURANTS_LIST.map((restaurant) => (
          <MapMarker
            key={restaurant.restaurant_name}
            eventHandlers={{
              click: () => setSelectedRestaurant(restaurant),
            }}
            donut={restaurant.donut}
            position={[restaurant.latitude, restaurant.longitude]}
          />
        ))}
      </MapContainer>
    </>
  );
}
