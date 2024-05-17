import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Mappp = () => {
  const position = [51.505, -0.09]; // Initial position for the map

  return (
    <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{ height: '400px', width: '100%' }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Mappp;
