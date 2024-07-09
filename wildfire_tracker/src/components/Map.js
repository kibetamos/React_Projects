import React from "react";
import GoogleMapReact from 'google-map-react'

export default function Map({ center, zoom }){

    return(
        <div className="map"> 
        <GoogleMapReact>
            
        </GoogleMapReact>

        </div>
    )
}