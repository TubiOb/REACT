import React, { useState, useEffect, useMemo } from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import MarkerClusterGroup from 'react-leaflet-cluster'
// import Maps from './Maps'
// import TrackingInfo from './TrackingInfo';
import '../index.css'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet';
import { collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore';
import { auth, firestore } from '../firebase.js';
import { onAuthStateChanged } from 'firebase/auth';

const LiveTracker = () => {

  const [userLocation, setUserLocation] = useState(null);
  const [mapReady, setMapReady] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(null);



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



  useEffect(() => {
    const checkUserSchedule = async () => {
      onAuthStateChanged(auth, async (user) => {
        if (user) {
          const userId = user.uid;

          // Check for user's schedule details
          const scheduleDetailsCollectionRef = collection(firestore, 'Schedule Details');
          const userQuery = query(scheduleDetailsCollectionRef, where('staffId', '==', userId));
          const scheduleDetailsQuerySnapshot = await getDocs(userQuery);

          if (!scheduleDetailsQuerySnapshot.empty) {
            // User has schedule details
            // You can extract and set the selected location here if needed
            const { selectedLocation } = scheduleDetailsQuerySnapshot.docs[0].data();
            setSelectedLocation(selectedLocation);
          }

          // Continue with the rest of the code...
          const staffDocRef = doc(firestore, 'Staff', userId);
          const scheduleSnapshot = await getDoc(staffDocRef);

          if (scheduleSnapshot.exists()) {
            // User has schedule details
            const { selectedLocation } = scheduleSnapshot.data();
            setSelectedLocation(selectedLocation);
            const updateLocation = () => {
                if ("geolocation" in navigator) {
                  navigator.geolocation.watchPosition(
                    (position) => {
                      const { latitude, longitude } = position.coords;
                      setUserLocation([latitude, longitude]);
                      setMapReady(true);

                      // console.log('User Location (Updated):', userLocation);
                    },
                    (error) => {
                      console.error(error);
                    }
                  );
                } else {
                  console.error("Geolocation is not available in this browser.");
                }
              };


              const locationMarkers = locations.find((location) => location.name === selectedLocation);
              if (locationMarkers) {
                const { geocode } = locationMarkers;
                console.log(geocode);
              }

            // Updating the user's location when the component mounts
            updateLocation();
            console.log('User Location:', userLocation);
          } else {
            // No schedule details found, default to the user's current location
            console.log('REACHING FOUL')
              const updateLocation = () => {
                if ("geolocation" in navigator) {
                  navigator.geolocation.watchPosition(
                    (position) => {
                      const { latitude, longitude } = position.coords;
                      setUserLocation([latitude, longitude]);
                      setMapReady(true);

                      // console.log('Us+er Location (Updated):', userLocation);
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
                
              }
            }
        });
    };

    checkUserSchedule();
    console.log('User Location:', userLocation);
  }, [userLocation, locations]);






  

  const zoom = 13;



  // Function to update the user's location
  // useEffect(() => {
  //   const updateLocation = () => {
  //     if ("geolocation" in navigator) {
  //       navigator.geolocation.watchPosition(
  //         (position) => {
  //           const { latitude, longitude } = position.coords;
  //           setUserLocation([latitude, longitude]);
  //           setMapReady(true);

  //           console.log('User Location (Updated):', userLocation);
  //         },
  //         (error) => {
  //           console.error(error);
  //         }
  //       );
  //     } else {
  //       console.error("Geolocation is not available in this browser.");
  //     }
  //   };

  //   // Updating the user's location when the component mounts
  //   updateLocation();
  //   console.log('User Location:', userLocation);
  //   // console.log('Locations:', locations);
  // }, [userLocation, locations]);



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
     
      console.log('Selected Location Coordinates:', selectedLocationCoordinates.position);

        return [userMarker, selectedLocationCoordinates].filter((marker) => marker);
      } 
      else {
        return [userMarker].filter((marker) => marker);
      }
    }, [locations, selectedLocation, userLocation]);



  return (
    <div className='flex flex-col w-[95%] items-center mx-auto mt-4 p-2 gap-4 drop-shadow-2xl bg-inherit h-[650px] text-black'>
        <div className='flex w-full font-bold items-start justify-start'>
            <h3 className='pl-3 md:p1-2'>Live Tracker</h3>
        </div>
        <div className='flex p-2 w-full h-[500px] items-center justify-center box-border'>
          {userLocation && mapReady && (
            // <Maps zoom={zoom} position={userLocation} markers={markers} className='relative w-full h-full' />
               <MapContainer id='map' center={userLocation} markers={markers} zoom={zoom} scrollWheelZoom={true}>
                <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

                <MarkerClusterGroup chunkedLoading>
                  
                  
                  {markers.map((marker, index) => (
                    <Marker key={index} center={marker.userLocation}>
                      <Popup>
                        {marker.name}
                      </Popup>
                    </Marker>
                  ))}
                </MarkerClusterGroup>
                
              </MapContainer>
          )}
        </div>
        {/* <TrackingInfo /> */}
        <button className='mx-auto text-white px-2 py-2 rounded-xl w-[45%] md:w-[25%] bg-neutral-900 font-semibold shadow-neutral-800 shadow-2xl transition duration-300 hover:bg-white hover:text-neutral-900 hover:shadow-md hover:font-semibold hover:border hover:border-neutral-300 hover:shadow-neutral-300 text-sm md:text-lg flex items-center justify-center'><a href="/pickupSchedule">Schedule Pick-up</a></button>

        {/* <SchedulingForm onLocationSelect={handleLocationSelect} /> */}
    </div>
  )
}

export default LiveTracker









// import React, { useState, useEffect, useMemo } from 'react';
// import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
// import MarkerClusterGroup from 'react-leaflet-cluster'
// import Maps from './Maps';
// import 'leaflet/dist/leaflet.css';
// import '../index.css'
// import TrackingInfo from './TrackingInfo';
// import L from 'leaflet';

// const LiveTracker = ({ selectedLocation }) => {
//   // const [mapCenter, setMapCenter] = useState({
//   //   geocode: [6.4541, 3.3947],
//   // });

//   const [userLocation, setUserLocation] = useState(null);

//   const locations = useMemo(() => [
//     {
//       name: 'Alausa-Secretariat',
//       geocode: [6.612320, 3.363310],
//     },
//     {
//       name: 'Allen',
//       geocode: [6.502749, 3.293216],
//     },
//     {
//       name: 'Egbeda',
//       geocode: [6.597720, 3.293490],
//     },
//     {
//       name: 'Iyana Ipaja',
//       geocode: [6.614120, 3.263660],
//     },
//     {
//       name: 'Ogba',
//       geocode: [6.625800, 3.334580],
//     },
//     {
//       name: 'Oshodi',
//       geocode: [6.514193, 3.308678],
//     },
//   ], []);

//   const zoom = 13;

//   // useEffect(() => {
//   //   if (selectedLocation) {
//   //     const matchingLocation = locations.find((loc) => loc.name === selectedLocation);
//   //     if (matchingLocation) {
//   //       setMapCenter({
//   //         geocode: matchingLocation.geocode,
//   //       });
//   //     }
//   //   }
//   // }, [selectedLocation, locations]);




//    // Function to update the user's location
//   useEffect(() => {
//     const updateLocation = () => {
//       if ("geolocation" in navigator) {
//         navigator.geolocation.watchPosition(
//           (position) => {
//             const { latitude, longitude } = position.coords;
//             setUserLocation([latitude, longitude]);

//             console.log('User Location (Updated):', userLocation);
//           },
//           (error) => {
//             console.error(error);
//           }
//         );
//       } else {
//         console.error("Geolocation is not available in this browser.");
//       }
//     };

//     // Updating the user's location when the component mounts
//     updateLocation();
//     console.log('User Location:', userLocation);
//     // console.log('Locations:', locations);
//   }, [userLocation, locations]);





//   // const markers = useMemo(() => {
//   //   const centerMarker = {
//   //     name: 'Center',
//   //     position: L.latLng(mapCenter.geocode[0], mapCenter.geocode[1]),
//   //     iconUrl: '/path-to-mapCenter-icon.png', // Use the src attribute directly
//   //     iconSize: [25, 41],
//   //     iconAnchor: [12, 41],
//   //     popupAnchor: [1, -34],
//   //   };

//   //   const locationMarkers = locations.map(location => ({
//   //     name: location.name,
//   //     position: L.latLng(location.geocode[0], location.geocode[1]),
//   //     iconUrl: '/path-to-location-icon.png', // Use the src attribute directly
//   //     iconSize: [25, 41],
//   //     iconAnchor: [12, 41],
//   //     popupAnchor: [1, -34],
//   //   }));

//   //   return [centerMarker, ...locationMarkers];
//   // }, [locations, mapCenter]);









//   // Array of marker objects for both mapCenter and locations
//   const markers = useMemo(() => {
//     const userMarker = userLocation 
//     ? {
//         name: 'User',
//         position: L.latLng(userLocation[0], userLocation[1]),
//         icon: L.icon({
//           iconUrl: require('../assets/markers/google-maps (2).png'),
//           iconSize: [38, 38],
//           // iconAnchor: [12, 41],
//           // popupAnchor: [1, -34],
//         }),
//       } 
//     : null;




//     const locationMarkers = locations.find((location) => location.name === selectedLocation);
//       if (locationMarkers) {
//         // Extracting the coordinates of the selected location
//         const { geocode } = locationMarkers;
//         const selectedLocationCoordinates = {
//           name: selectedLocation,
//           position: L.latLng(geocode[0], geocode[1]),
//           icon: L.icon({
//             iconUrl: require('../assets/markers/pin_5871229 (2).png'),
//             iconSize: [38, 38],
//           }),
//         };
     

//         return [userMarker, selectedLocationCoordinates];
//       } else {
//         return [userMarker];
//       }
//     }, [locations, selectedLocation, userLocation]);









//   return (
//     <div className='flex flex-col w-[95%] items-center mx-auto mt-4 p-2 gap-4 drop-shadow-2xl bg-inherit h-[650px] text-black'>
//       <div className='flex w-full font-bold items-start justify-start'>
//         <h3 className='pl-3 md:p1-2'>Live Tracker</h3>
//       </div>
//       <div className='flex p-2 w-full h-[500px] items-center justify-center box-border'>
//         { userLocation && (
//           // <Maps center={userLocation} zoom={zoom} markers={markers} className='relative w-full h-full' />
//           <MapContainer id='map' center={userLocation} zoom={zoom} scrollWheelZoom={true}>
//             <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

//             <MarkerClusterGroup chunkedLoading>
//               {markers.map((marker, index) => (
//                 <Marker key={index} center={marker.userLocation}>
//                   <Popup>
//                     {marker.name}
//                   </Popup>
//                 </Marker>
//               ))}
//             </MarkerClusterGroup>
            
//           </MapContainer>
//         )}
        
//       </div>
//       <TrackingInfo />
//       <button className='mx-auto text-white px-2 py-2 rounded-xl w-[40%] md:w-[20%] bg-neutral-900 font-semibold shadow-neutral-800 shadow-2xl transition duration-300 hover:bg-white hover:text-neutral-900 hover:shadow-md hover:font-semibold hover:border hover:border-neutral-300 hover:shadow-neutral-300 text-sm md:text-lg flex items-center justify-center'><a href="/pickupSchedule">Schedule Pick-up</a></button>
//     </div>
//   );
// };

// export default LiveTracker;
