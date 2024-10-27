"use client";

import { Map } from "leaflet";
import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useState,
  FC,
} from "react";

type MapType = Map | null;

const MapStateContext = createContext<MapType | undefined>(undefined);
const MapDispatchContext = createContext<
  Dispatch<SetStateAction<MapType>> | undefined
>(undefined);

export const MapProvider: FC<PropsWithChildren> = ({ children }) => {
  const [map, setMap] = useState<MapType>(null);

  return (
    <MapStateContext.Provider value={map}>
      <MapDispatchContext.Provider value={setMap}>
        {children}
      </MapDispatchContext.Provider>
    </MapStateContext.Provider>
  );
};

export const useMapValue = () => {
  const state = useContext(MapStateContext);
  if (state === undefined) {
    throw new Error("useMapState는 MapProvider 내부에서 사용해야 합니다.");
  }
  return state;
};

export const useMapDispatch = () => {
  const dispatch = useContext(MapDispatchContext);
  if (dispatch === undefined) {
    throw new Error("useMapDispatch는 MapProvider 내부에서 사용해야 합니다.");
  }
  return dispatch;
};

export const useMap = () => {
  const state = useMapValue();
  const dispatch = useMapDispatch();

  return [state, dispatch];
};
