import { Marker, Popup } from "react-leaflet";
import markerIconPng from "../assets/mark.png"
import { Icon } from 'leaflet'

export default function Mark({ name, lot, lat, }) {
    return (
        <Marker position={[lot, lat]} icon={new Icon({ iconUrl: markerIconPng, iconSize: [41, 41], iconAnchor: [12, 41] })}>
            <Popup>
                {name}
            </Popup>
        </Marker>
    )
}