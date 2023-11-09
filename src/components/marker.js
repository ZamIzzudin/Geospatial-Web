import { Marker, Popup } from "react-leaflet"
import markerIconPng from "../assets/mark.png"
import CardPlace from './cardplace'
import { Icon } from 'leaflet'

export default function Mark({ data }) {
    const { lot, lat } = data
    return (
        <Marker position={[lot, lat]} icon={new Icon({ iconUrl: markerIconPng, iconSize: [41, 41], iconAnchor: [12, 41] })}>
            <Popup>
                <CardPlace data={data} popup />
            </Popup>
        </Marker>
    )
}