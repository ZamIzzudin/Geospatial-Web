import { Marker, Popup } from "react-leaflet";
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import { Icon } from 'leaflet'

export default function Mark({ name, lot, lat, }) {
    return (
        <Marker position={[lot, lat]} icon={new Icon({ iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41] })}>
            <Popup>
                {name}
            </Popup>
        </Marker>
    )
}