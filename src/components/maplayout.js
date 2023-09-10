// Library
import { MapContainer, TileLayer } from "react-leaflet";
import { useSelector } from 'react-redux';

import { useEffect, useState } from "react";

// Components
import Mark from './marker'

// Style
import style from '../style/MapLayout.module.css'

export default function MapLayout() {
    const [pre, setPre] = useState(0)

    const { marks, scrollable } = useSelector((state) => state.setup.setup);
    const { center, zoom } = useSelector(state => state.setup)

    useEffect(() => {
        // Rerender Map
        setPre(pre + 1)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [center, zoom])

    return (
        <MapContainer key={pre} MapContainer center={center} zoom={zoom} scrollWheelZoom={scrollable} className={style.map} >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {
                marks.map((mark, index) =>
                    <Mark name={mark.name} lot={mark.lot} lat={mark.lat} key={index} />
                )
            }
        </MapContainer>
    )
}