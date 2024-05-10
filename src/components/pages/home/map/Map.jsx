
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Map = () => {
  return (
    <MapContainer
      center={[22.684130689183934, 90.3555723534122]}
      zoom={13}
      style={{ height: '200px', width: '100%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[22.684130689183934, 90.3555723534122]}>
        <Popup>
          Your Hotel Name: RestY <br /> Address: Sadar Road, Barishal
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
