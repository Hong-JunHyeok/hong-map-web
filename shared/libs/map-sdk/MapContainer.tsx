"use client";

import {
  MapContainer as LeafletMapContainer,
  MapContainerProps,
  TileLayer,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
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
      zoomAnimation
      zoomSnap={1}
      zoomControl={false}
      style={{ width: "100%", height: props.height, position: "fixed" }}
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
