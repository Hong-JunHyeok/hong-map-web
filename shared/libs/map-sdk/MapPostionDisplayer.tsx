"use client";

import { useCallback, useEffect, useState } from "react";
import { useMapValue } from "./MapProvider";
import { POSITION_CLASSES } from "./constants";

type Props = {
  mapPosition: keyof typeof POSITION_CLASSES;
};

export default function MapPositionDisplayer({ mapPosition }: Props) {
  const map = useMapValue();

  if (!map) return null;

  const [position, setPosition] = useState(() => map.getCenter());

  const onMove = useCallback(() => {
    setPosition(map.getCenter());
  }, [map]);

  useEffect(() => {
    map.on("move", onMove);
    return () => {
      map.off("move", onMove);
    };
  }, [map, onMove]);

  const positionClass =
    (mapPosition && POSITION_CLASSES[mapPosition]) || POSITION_CLASSES.topright;

  return (
    <div className={positionClass}>
      위도: {position.lat.toFixed(4)}, 경도: {position.lng.toFixed(4)}
    </div>
  );
}
