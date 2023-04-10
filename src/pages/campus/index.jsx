import './Campus.css'
import Button from '../../components/button'
import React, { useState, useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import haversine from 'haversine-distance';

function RoutingMachine({ origin, destination }) {
  const map = useMap();

  useEffect(() => {
    if (origin && destination) {
      const routingControl = L.Routing.control({
        waypoints: [
          L.latLng(origin[0], origin[1]),
          L.latLng(destination[0], destination[1]),
        ],
        lineOptions: {
          styles: [{color: 'blue', opacity: 0, weight: 9}],
          show: false,
        },
        routeWhileDragging: false,
        addWaypoints: false,
        draggableWaypoints: false,
        showAlternatives: false,
        show: false,
      }).addTo(map);
      map.fitBounds(L.latLngBounds([origin, destination]));

      return () => {
        map.removeControl(routingControl);
      };
    }
  }, [map, origin, destination]);

  return null;
}

function CampusPage() {

  const locations = {
    "SEC A": [14.63830, 121.07774],
    "SEC B": [14.63788, 121.07727],
    "SEC C": [14.63794, 121.07685],
    "PLDT CTC": [14.63816, 121.07642],
    "SOM Building": [14.63841, 121.07626],
    "Matteo Ricci Study Hall": [14.63752, 121.07695],
    "JSEC": [14.63772, 121.07643],
    "Blue Eagle Gym": [14.63525, 121.07552],
    "Gate 2.5": [14.63684, 121.07463],
    "Gonzaga": [14.63899, 121.07800],
    "Kostka Hall": [14.63969, 121.07805],
    "Berchmans Hall": [14.63943, 121.07855],
    "Xavier Hall": [14.63993, 121.07846],
    "Faber Hall": [14.64029, 121.07784],
    "MVP": [14.63962, 121.07746],
    "Faura Hall": [14.63958, 121.07673],
    "Dela Costa Hall": [14.63992, 121.07676],
    "SOSS Building": [14.64056, 121.07682],
    "Old Rizal Library": [14.64018, 121.07752],
    "New Rizal Library": [14.63996, 121.07608],
    "Leong Hall": [14.64064, 121.07621],
    "Gate 3.5": [14.64110, 121.07486],
    "Arete": [14.64139, 121.07587],
    "Bellarmine Hall": [14.64160, 121.07971],
    "ISO Canteen": [14.64200, 121.07833],
    "Church of Gesu": [14.64018, 121.07985],
    "LS Covered Courts": [14.63693, 121.07886]
  };

  const [origin, setOrigin] = useState([14.63894, 121.07722]);
  const [destination, setDestination] = useState([14.63894, 121.07722]);
  const [distance, setDistance] = useState(0);
  const [duration, setDuration] = useState(0);


  const handleGoButtonClick = async () => {
    const locationSelect = document.getElementById('location-select');
    const destinationSelect = document.getElementById('destination-select');
  
    if (locationSelect.value && destinationSelect.value) {
      const newOrigin = locations[locationSelect.value];
      const newDestination = locations[destinationSelect.value];
      setOrigin(newOrigin);
      setDestination(newDestination);
    }
  };

  useEffect(() => {
    if (origin && destination) {
      const totalDistance = Math.round(haversine([origin[0], origin[1]], [destination[0], destination[1]]));
      const totalTime = Math.ceil(totalDistance / 1.4 / 60); // Convert meters to minutes at average walking speed
      setDistance(totalDistance);
      setDuration(totalTime);
    }
  }, [origin, destination]);

  return (
    <>
      <div className='campus-map-wrapper'>
        <div className="campus-text">
          <h1>Campus Map</h1>
          <h2>Ateneo de Manila University</h2>
          <h3>I am at...</h3>
          <input type="text" id="location-select" list="locations" placeholder="Select current location" required />
          <datalist id="locations">
            <option value="SEC A"></option>
            <option value="SEC B"></option>
            <option value="SEC C"></option>
            <option value="PLDT CTC"></option>
            <option value="SOM Building"></option>
            <option value="Matteo Ricci Study Hall"></option>
            <option value="JSEC"></option>
            <option value="Blue Eagle Gym"></option>
            <option value="Gate 2.5"></option>
            <option value="Gonzaga"></option>
            <option value="Kostka Hall"></option>
            <option value="Berchmans Hall"></option>
            <option value="Xavier Hall"></option>
            <option value="Faber Hall"></option>
            <option value="MVP"></option>
            <option value="Faura Hall"></option>
            <option value="Dela Costa Hall"></option>
            <option value="SOSS Building"></option>
            <option value="Old Rizal Library"></option>
            <option value="New Rizal Library"></option>
            <option value="Leong Hall"></option>
            <option value="Gate 3.5"></option>
            <option value="Arete"></option>
            <option value="Bellarmine Hall"></option>
            <option value="ISO Canteen"></option>
            <option value="Church of Gesu"></option>
            <option value="LS Covered Courts"></option>
          </datalist>
          <h3>I want to go to...</h3>
          <input type="text" id="destination-select" list="locations" placeholder="Select destination" required />
          <datalist id="locations">
            <option value="SEC A"></option>
            <option value="SEC B"></option>
            <option value="SEC C"></option>
            <option value="PLDT CTC"></option>
            <option value="SOM Building"></option>
            <option value="Matteo Ricci Study Hall"></option>
            <option value="JSEC"></option>
            <option value="Blue Eagle Gym"></option>
            <option value="Gate 2.5"></option>
            <option value="Gonzaga"></option>
            <option value="Kostka Hall"></option>
            <option value="Berchmans Hall"></option>
            <option value="Xavier Hall"></option>
            <option value="Faber Hall"></option>
            <option value="MVP"></option>
            <option value="Faura Hall"></option>
            <option value="Dela Costa Hall"></option>
            <option value="SOSS Building"></option>
            <option value="Old Rizal Library"></option>
            <option value="New Rizal Library"></option>
            <option value="Leong Hall"></option>
            <option value="Gate 3.5"></option>
            <option value="Arete"></option>
            <option value="Bellarmine Hall"></option>
            <option value="ISO Canteen"></option>
            <option value="Church of Gesu"></option>
            <option value="LS Covered Courts"></option>
          </datalist>
          <div className='button-div'>
            <Button text="Go" isFilled={true} size="regular" color="#0084F7" onClickEvent={handleGoButtonClick} />
          </div>
          <h2>Distance: {distance} meter/s</h2>
          <h2>Estimated Time: {duration} minute/s</h2>
        </div>
        <MapContainer className="map-container" center={origin} zoom={100} scrollWheelZoom={false}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
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
          {/* <RoutePolyline origin={origin} destination={destination} /> */}
          <RoutingMachine origin={origin} destination={destination} />
        </MapContainer>


      </div>

    </>

  )
}

export default CampusPage
