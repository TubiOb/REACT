// import React, { useEffect } from 'react'
// import { MapContainer, Marker, Popup, TileLayer, /* useMap */ } from 'react-leaflet'
// import MarkerClusterGroup from 'react-leaflet-cluster'
// import '../index.css'
// import 'leaflet/dist/leaflet.css'


// const Maps = ({ position, zoom, markers }) => {

//   useEffect(() => {
//     console.log('Center:', position);
//     console.log('Zoom:', zoom);
//     console.log('Markers:', markers);
//   }, [position, zoom, markers]);

//   return (
//     <MapContainer id='map' position={position} zoom={zoom} scrollWheelZoom={true}>
//         <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
//         <MarkerClusterGroup chunkedLoading>
//             {markers.map((marker, index) => (
//               <Marker key={index} position={marker.position}>
//                 <Popup>{marker.name}</Popup>
//               </Marker>
//             ))}
//         </MarkerClusterGroup>

//     </MapContainer>
//   )
// }

// export default Maps











import React, { useEffect } from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import MarkerClusterGroup from 'react-leaflet-cluster'
import '../index.css'
import 'leaflet/dist/leaflet.css'

const Maps = ({ center, zoom, markers }) => {

  useEffect(() => {
    console.log('Center:', center);
    console.log('Zoom:', zoom);
    console.log('Markers:', markers);
  }, [center, zoom, markers]);

  return (
    <MapContainer id='map' center={center} zoom={zoom} scrollWheelZoom={true}>
      <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      <MarkerClusterGroup chunkedLoading>
        {markers.map((marker, index) => (
          <Marker key={index} center={marker.center}>
            <Popup>
              {marker.name}
            </Popup>
          </Marker>
        ))}
      </MarkerClusterGroup>
      
    </MapContainer>
  )
}

export default Maps
