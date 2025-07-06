import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import './Mapview.css';

import garfieldPointer from '../assets/design/garfieldPointer.png';

const garfieldIcon = new L.Icon({
  iconUrl: garfieldPointer,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40],
});

function RecenterMap({ lat, lng }) {
  const map = useMap();
  map.setView([lat, lng], 13);
  return null;
}

export default function MapView() {
  const location = { lat: 40.7128, lng: -74.0060, city: "New York", region: "NY" };

  const { lat, lng, city, region } = location;

  return (
    <div className="map-container" style={{ height: "400px" }}>
      <MapContainer center={[lat, lng]} zoom={13} scrollWheelZoom={true} className="leaflet-map" style={{ height: "100%", width: "100%" }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[lat, lng]} icon={garfieldIcon}>
          <Popup>
            {city}, {region}
          </Popup>
        </Marker>
        <RecenterMap lat={lat} lng={lng} />
      </MapContainer>
    </div>
  );
}