import { Marker, Popup } from "react-leaflet"
import markerIconPng from "../assets/mark.png"
import CardPlace from './cardplace'
import { Icon } from 'leaflet'

// state
import { useSelector } from 'react-redux'

export default function Mark({ data, getSelected }) {
    const { dataSelected } = useSelector(state => state.selectedData)
    const { lot, lat } = data
    return (
        <Marker position={[lot, lat]} icon={new Icon({ iconUrl: markerIconPng, iconSize: [41, 41], iconAnchor: [12, 41] })}>
            <Popup>
                { dataSelected ? <CardPlace data={data} getSelected={getSelected} popup={true} /> : <CardPlace data={data} getSelected={getSelected} /> }
                
            </Popup>
        </Marker>
    )
}