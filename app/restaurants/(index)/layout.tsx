import { MapProvider } from "@/shared/libs/map-sdk";
import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return <MapProvider>{children}</MapProvider>;
}
