import React from 'react'
import { MapContainer, Marker, Popup, TileLayer, /* useMap */ } from 'react-leaflet'
// import 'leaflet/dist/leaflet.css'

const Maps = ({ position, zoom, markers }) => {
  return (
    <MapContainer id="map" center={position} zoom={zoom}>
        <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

          {markers.map((marker, index) => (
            <Marker key={index} position={marker.position}>
              <Popup>{marker.name}</Popup>
            </Marker>
          ))}

    </MapContainer>
  )
}

export default Maps