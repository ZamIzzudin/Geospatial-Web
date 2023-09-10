// Library
import { MapContainer, TileLayer, GeoJSON, Polygon } from "react-leaflet";
import { useSelector } from 'react-redux';

import { useEffect, useState } from "react";

// Components
import Mark from './marker'

// Utils
import bondary from '../utils/cinereBondary.json'

// Style
import style from '../style/MapLayout.module.css'

export default function MapLayout() {
    const overlayStyle = {
        color: 'red',
        weight: 3,
        fill: false,
    }

    const insideBoundaryCoords = changeFormat(bondary.coordinates[0][0])

    const outsideBoundaryCoords = [
        [90, -180], [90, 180], [-90, 180], [-90, -180], [90, -180]
    ];

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
            {/* Peta Citra dari Openstreet */}
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {/* Mark untuk setiap titik alfamart */}
            {
                marks.map((mark, index) =>
                    <Mark name={mark.name} lot={mark.lot} lat={mark.lat} key={index} />
                )
            }
            {/* Bondary Regional Cinere */}
            {/* With GeoJSON */}
            <GeoJSON data={bondary} style={() => (overlayStyle)} />

            {/* With Polygon Vector */}
            <Polygon positions={[outsideBoundaryCoords, insideBoundaryCoords]} pathOptions={{ color: "black" }} />
        </MapContainer>
    )
}

// Flip Lot and Lat
function changeFormat(cordinates) {
    const newCordinates = cordinates.map(cordinate => [cordinate[1], cordinate[0]])

    return [newCordinates]
}