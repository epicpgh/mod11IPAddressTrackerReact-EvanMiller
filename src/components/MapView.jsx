



import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

export default function MapView({ location }) {
    if(!location) {
        return <div>Loading map...</div>;
    }

    return (
        <MapContainer center={[location.lat, location.lng]} zoom={13} style={{ height: "400px", width: "100%" }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={[location.lat, location.lng]}>
                <Popup>
                    Location: {location.lat}, {location.lng}
                </Popup>
            </Marker>
        </MapContainer>
    );
}