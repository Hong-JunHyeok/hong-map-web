import { MapProvider, MapContainer } from "@/shared/libs/map-sdk";
import MapPositionDisplayer from "@/shared/libs/map-sdk/MapPostionDisplayer";

export default function Page() {
  return (
    <MapProvider>
      <MapContainer center={[36.4721, 127.8864]} zoom={8} height="90vh">
        <MapPositionDisplayer mapPosition="topleft" />
      </MapContainer>
    </MapProvider>
  );
}
