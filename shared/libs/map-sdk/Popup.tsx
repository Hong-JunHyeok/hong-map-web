"use client";

import { Popup as LeafletPopup } from "react-leaflet";
import "./index.css";
import { PropsWithChildren } from "react";

export default function Popup({ children }: PropsWithChildren) {
  return <LeafletPopup>{children}</LeafletPopup>;
}
