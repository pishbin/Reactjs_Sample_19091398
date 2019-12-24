
import React,{useState} from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import * as MetroInstations from './MetroInstations.json';
import { FaMapMarker } from 'react-icons/fa';



const Map = () => {
  const [viewport, setViewport] = useState({
    width: '100vw',
    height: '100vh',
    latitude: 35.6892,
    longitude: 51.3890,
    zoom: 10

  })
  const showInf = (MetroInstation) => (
    alert(MetroInstation.title)
    
  )

  

  return (
    <ReactMapGL
      {...viewport}
      onViewportChange={(viewport) => setViewport(viewport)}
      mapboxApiAccessToken="pk.eyJ1IjoibnBiOTgiLCJhIjoiY2s0YjVjNWNjMGE0dzNlcXFkNW45NWwwbSJ9.X2z-GTmU_fEQcKWBHAaqLA"
    >
      {
        MetroInstations.Records.map((MetroInstation) => (
          <Marker
            key={MetroInstation.id}
            latitude={Number(MetroInstation.latitude)}
            longitude={Number(MetroInstation.longitude)}
          >
            <FaMapMarker color="blue" size="35" onClick={()=>showInf(MetroInstation)} />
          </Marker>
        ))
      }
    </ReactMapGL>
  )
}

export default Map;