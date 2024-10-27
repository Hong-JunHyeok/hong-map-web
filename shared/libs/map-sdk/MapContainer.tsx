"use client";

import {
  MapContainer as LeafletMapContainer,
  MapContainerProps,
  TileLayer,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import type { LatLngExpression } from "leaflet";
import { useMapDispatch } from "./MapProvider";

interface Props extends Omit<MapContainerProps, "center" | "zoom"> {
  center: LatLngExpression;
  zoom: number;
  height: string;
  children: React.ReactNode;
}

export default function MapContainer(props: Props) {
  const setMap = useMapDispatch();

  return (
    <LeafletMapContainer
      scrollWheelZoom
      fadeAnimation
      zoomControl={false}
      style={{ width: "100%", height: props.height }}
      ref={setMap}
      {...props}
    >
      <TileLayer
        attribution="홍슐랭 Map SDK"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {props.children}
    </LeafletMapContainer>
  );
}
