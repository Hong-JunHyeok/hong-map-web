"use client";

import { useCallback, useEffect, useState } from "react";
import { useMapValue } from "./MapProvider";
import { POSITION_CLASSES } from "./constants";

type Props = {
  mapPosition: keyof typeof POSITION_CLASSES;
};

export default function MapPositionDisplayer({ mapPosition }: Props) {
  const map = useMapValue();

  const [position, setPosition] = useState(() => map?.getCenter());

  const onMove = useCallback(() => {
    setPosition(map?.getCenter());
  }, [map]);

  useEffect(() => {
    map?.on("move", onMove);
    return () => {
      map?.off("move", onMove);
    };
  }, [map, onMove]);

  const positionClass =
    (mapPosition && POSITION_CLASSES[mapPosition]) || POSITION_CLASSES.topright;

  return (
    <div className={`${positionClass} flex flex-col items-center p-4`}>
      <h3 className="text-lg font-semibold mb-2">위치 정보</h3>
      <div className="flex items-center space-x-2">
        <span className="text-sm font-medium">위도:</span>
        <span className="text-lg">{position?.lat.toFixed(4)}</span>
      </div>
      <div className="flex items-center space-x-2 mt-1">
        <span className="text-sm font-medium">경도:</span>
        <span className="text-lg">{position?.lng.toFixed(4)}</span>
      </div>
    </div>
  );
}
