// Library
import { MapContainer, TileLayer } from "react-leaflet";

// Components
import Mark from './marker'

// Style
import style from '../style/MapLayout.module.css'

export default function MapLayout({ setup }) {
    // Setup data from JSON
    const { middle, zoom_default, marks, scrollable } = setup

    return (
        < MapContainer MapContainer center={middle.cordinate} zoom={zoom_default} scrollWheelZoom={scrollable} className={style.map} >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {
                marks.map((mark, index) =>
                    <Mark name={mark.name} lot={mark.lot} lat={mark.lat} key={index} />
                )
            }
        </ MapContainer>
    )
}