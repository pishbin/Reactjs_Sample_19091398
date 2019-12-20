import React,{useState} from 'react'
//import React,{useState} from 'react';
import ReactMapGL from 'react-map-gl';



const Map = () => {
  const [viewport, setViewport] = useState({
    width: '100vw',
    height: '100vh',
    latitude: 35.6892,
    longitude: 51.3890,
    zoom: 10

  })
  return (
    <ReactMapGL
      {...viewport}
      onViewportChange={(viewport) => setViewport(viewport)}
      mapboxApiAccessToken="pk.eyJ1IjoibnBiOTgiLCJhIjoiY2s0YjVjNWNjMGE0dzNlcXFkNW45NWwwbSJ9.X2z-GTmU_fEQcKWBHAaqLA"
    />
  )
}

export default Map;