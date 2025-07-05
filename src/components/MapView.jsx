



import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import ',/Mapview.css';




function RecenterMap({ lat, lng }) {
  const map = useMap();
  map.setView([lat, lng], 13);
  return null;
}

export default function MapView({ location }) {
  if (!location) return null;

  const { lat, lng, city, region } = location;

  return (
    <div className="map-container">
      <MapContainer center={[lat, lng]} zoom={13} scrollWheelZoom={true} className="leaflet-map">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[lat, lng]}>
          <Popup>
            {city}, {region}
          </Popup>
        </Marker>
        <RecenterMap lat={lat} lng={lng} />
      </MapContainer>
    </div>
  );
}