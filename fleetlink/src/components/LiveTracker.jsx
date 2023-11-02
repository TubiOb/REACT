import React, { useState, useEffect, useMemo } from 'react'
import Maps from './Maps'
// import TrackingInfo from './TrackingInfo';
import '../index.css'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet';

const LiveTracker = ({ selectedLocation }) => {

  const [userLocation, setUserLocation] = useState(null);

  const locations = useMemo(() => [
      {
          name: 'Alausa-Secretariat',
          geocode: [6.612320, 3.363310],
      },
      {
          name: 'Allen',
          geocode: [6.502749, 3.293216],
      },
      {
          name: 'Egbeda',
          geocode: [6.597720, 3.293490],
      },
      {
          name: 'Iyana Ipaja',
          geocode: [6.614120, 3.263660],
      },
      {
          name: 'Ogba',
          geocode: [6.625800, 3.334580],
      },
      {
          name: 'Oshodi',
          geocode: [6.514193, 3.308678],
      },
  ], []);

  const zoom = 13;



  // Function to update the user's location
  useEffect(() => {
    const updateLocation = () => {
      if ("geolocation" in navigator) {
        navigator.geolocation.watchPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            setUserLocation([latitude, longitude]);

            console.log('User Location (Updated):', userLocation);
          },
          (error) => {
            console.error(error);
          }
        );
      } else {
        console.error("Geolocation is not available in this browser.");
      }
    };

    // Updating the user's location when the component mounts
    updateLocation();
    console.log('User Location:', userLocation);
    // console.log('Locations:', locations);
  }, [userLocation, locations]);




  // Array of marker objects for both mapCenter and locations
  const markers = useMemo(() => {
    const userMarker = userLocation 
    ? {
        name: 'User',
        position: L.latLng(userLocation[0], userLocation[1]),
        icon: L.icon({
          iconUrl: require('../assets/markers/google-maps (2).png'),
          iconSize: [38, 38],
          // iconAnchor: [12, 41],
          // popupAnchor: [1, -34],
        }),
      } 
    : null;




    const locationMarkers = locations.find((location) => location.name === selectedLocation);
      if (locationMarkers) {
        // Extracting the coordinates of the selected location
      const { geocode } = locationMarkers;
      const selectedLocationCoordinates = {
        name: selectedLocation,
        position: L.latLng(geocode[0], geocode[1]),
        icon: L.icon({
          iconUrl: require('../assets/markers/pin_5871229 (2).png'),
          iconSize: [38, 38],
        }),
      };
     

        return [userMarker, selectedLocationCoordinates];
      } else {
        return [userMarker];
      }
    }, [locations, selectedLocation, userLocation]);



  return (
    <div className='flex flex-col w-[95%] items-center mx-auto mt-4 p-2 gap-4 drop-shadow-2xl bg-inherit h-[650px] text-black'>
        <div className='flex w-full font-bold items-start justify-start'>
            <h3 className='pl-3 md:p1-2'>Live Tracker</h3>
        </div>
        <div className='flex p-2 w-full h-[500px] items-center justify-center box-border'>
          {userLocation && (
            <Maps zoom={zoom} position={userLocation} markers={markers} className='relative w-full h-full' />
          )}
        </div>
        {/* <TrackingInfo /> */}
        <button className='mx-auto text-white px-2 py-2 rounded-xl w-[45%] md:w-[25%] bg-neutral-900 font-semibold shadow-neutral-800 shadow-2xl transition duration-300 hover:bg-white hover:text-neutral-900 hover:shadow-md hover:font-semibold hover:border hover:border-neutral-300 hover:shadow-neutral-300 text-sm md:text-lg flex items-center justify-center'><a href="/pickupSchedule">Schedule Pick-up</a></button>

        {/* <SchedulingForm onLocationSelect={handleLocationSelect} /> */}
    </div>
  )
}

export default LiveTracker