import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import './Map.css';

const Map = ({ origin, destination }) => {
  const [distance, setDistance] = useState(null);
  const [duration, setDuration] = useState(null);
  const [coordinates, setCoordinates] = useState([]);

  useEffect(() => {
    // Add a check to make sure origin and destination are not undefined
    if (origin && destination && origin.length >= 2 && destination.length >= 2) {
      const url = `https://api.openrouteservice.org/v2/directions/${'walking'}/geojson?api_key=${'your_api_key'}&start=${origin[1]},${origin[0]}&end=${destination[1]},${destination[0]}`;

      fetch(url)
        .then(response => response.json())
        .then(data => {
          const { features } = data;
          const distance = features[0].properties.segments[0].distance;
          const duration = features[0].properties.segments[0].duration;
          const coordinates = features[0].geometry.coordinates.map(coordinate => [coordinate[1], coordinate[0]]);
          setDistance(distance);
          setDuration(duration);
          setCoordinates(coordinates);
        })
        .catch(error => {
          console.error(error);
        });
    }
  }, [origin, destination]);

  return (
    <MapContainer className="map-container" center={origin} zoom={100} scrollWheelZoom={false}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {coordinates.length > 0 && <Polyline positions={coordinates} />}
      <Marker position={origin}>
        <Popup>
          Starting Point
        </Popup>
      </Marker>
      <Marker position={destination}>
        <Popup>
          Ending Point
        </Popup>
      </Marker>
      {distance && <p>Distance: {distance} meters</p>}
      {duration && <p>Duration: {duration} seconds</p>}
    </MapContainer>
  );
};

export default Map;
