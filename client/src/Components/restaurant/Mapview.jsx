import React from 'react';
import { RiDirectionLine } from "react-icons/ri";
import { IoMdCopy } from "react-icons/io"
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const MapView = (props) => {
    return (
        <>
            <div>
                    <h4 className="text-xl font-medium">Call</h4>
                    <h5 className="text-zomato-400 font-medium">
                        {props.phno}
                    </h5>
                    </div>
                    <div>
                        <h4 className="text-xl font-medium my-4">Direction</h4>
                    <div className="w-full h-48">
                    <MapContainer center={props.mapLocation} zoom={13} scrollWheelZoom={false}>
                        <TileLayer
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                    <Marker position={props.mapLocation}>
                        <Popup>
                            {props.title}
                        </Popup>
                        </Marker>
                    </MapContainer>
                    </div>
                    
                    </div>
                    <p>
                       {props.address}
                    </p>
                   <div className="flex items-center gap-2 ">
                   <button className="text-gray-700 border border-gray-400 flex items-center gap-1 rounded-lg px-3 py-1">
                        <IoMdCopy /> Copy
                    </button>
                    <button className="text-gray-700 border border-gray-400 flex items-center gap-1 rounded-lg px-3 py-1">
                      <RiDirectionLine 
                      className="text-zomato-400"/> Direction
                    </button>
                   </div>
        </>
    )
}

export default MapView;
