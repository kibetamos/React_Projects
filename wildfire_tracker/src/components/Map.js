import React from "react";
import GoogleMapReact from 'google-map-react'

export default function Map({ center, zoom }){

    return(
        <div className="map"> 
        <GoogleMapReact
        bootstrapURLKeys={{key:
            ''}}
            defaultCenter={center}
            defaultZoom={zoom}

            >

        </GoogleMapReact>

        </div>
    )
}

Map.defaultProps = {
    center:{
        lat: 42.3265,
        lng: -122.8756
    },
    zoom: 6
}