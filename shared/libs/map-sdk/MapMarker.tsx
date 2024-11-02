"use client";

import { icon } from "leaflet";
import { PropsWithChildren } from "react";
import { Marker, MarkerProps } from "react-leaflet";

type Props = {
  donut: 1 | 2 | 3 | 4;
} & MarkerProps;

export default function MapMarker({
  donut,
  position,
  children,
  ...props
}: PropsWithChildren<Props>) {
  const getIcon = (donut: number) => {
    switch (donut) {
      case 1:
        return "https://github.com/user-attachments/assets/17d162d5-1f44-44f0-a717-a1560aecd1b2";
      case 2:
        return "https://github.com/user-attachments/assets/522d3d2e-3d1d-441e-ae08-5cc4c1145d16";
      case 3:
        return "https://github.com/user-attachments/assets/780776d6-7daa-4c9f-8133-ae405a3f0e2c";
      default:
        return "https://github.com/user-attachments/assets/17d162d5-1f44-44f0-a717-a1560aecd1b2";
    }
  };

  return (
    <Marker
      position={position}
      icon={icon({
        iconUrl: getIcon(donut),
        iconSize: [40, 50], // 아이콘 크기 조정
        iconAnchor: [20, 40], // 아이콘의 중심을 지정
        popupAnchor: [0, -40], // 팝업 위치 조정
      })}
      {...props}
    >
      {children}
    </Marker>
  );
}
