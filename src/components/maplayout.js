// Library
import { MapContainer, GeoJSON, Polygon, Popup } from "react-leaflet";
import { useSelector, useDispatch } from 'react-redux';
import { setCenter, setZoom } from '../store/setupSlice';
import { setDataSelected } from "../store/selectedDataSlice";

import { useEffect, useState } from "react";

// Components
import Mark from './marker'

// Utils
import bondary from '../utils/cinereBondary.json'
import streets from '../utils/jalanRaya.json'
import river from '../utils/kali.json'
// import highway from '../utils/tol.json'
import MapLayerControl from "./mapLayerControl"
import MinimapControl from "./minimap"
import MouseCoordinates from "./mouseCoordinate";

// Style
import style from '../style/MapLayout.module.css'

export default function MapLayout() {
    const overlayStyle = {
        color: 'var(--orange)',
        weight: 4,
        fill: false,
    }

    const streetStyle = {
        color: 'rgba(64,64,64,1)',
        weight: 4,
        fill: false,
    }

    const riverStyle = {
        color: 'rgba(0,102,204,0.5)',
        weight: 4,
        fill: false,
    }

    // const highwayStyle = {
    //     color: 'green',
    //     weight: 4,
    //     fill: false,
    // }


    const insideBoundaryCoords = changeFormat(bondary.coordinates[0][0])

    const outsideBoundaryCoords = [
        [90, -180], [90, 180], [-90, 180], [-90, -180], [90, -180]
    ];

    const [map, setMap] = useState(null)
    const dispatch = useDispatch();

    const { marks, scrollable } = useSelector((state) => state.setup.setup);
    const { center, zoom } = useSelector(state => state.setup)

    function getSelected(value) {
        dispatch(setDataSelected(value));
        dispatch(setCenter([value.lot, value.lat]));
        dispatch(setZoom(18));
    }

    useEffect(() => {
        // Re-center Map
        if (map) {
            map?.setView(center, zoom)
        }
    }, [center, zoom, map])


    return (
        <MapContainer
            // key={pre} 
            MapContainer
            center={center}
            zoom={zoom}
            scrollWheelZoom={scrollable}
            className={style.map}
            ref={setMap}
        >
            {/* Show Coordinate alongside cursor */}
            <div className="leaflet-bottom leaflet-left"> 
                <MouseCoordinates />
            </div>

            {/* Kontrol TileLayer Map */}
            <MapLayerControl />

            {/* Kontrol Minimap */}
            <MinimapControl position="bottomright" zoom={zoom} />

            {/* Mark untuk setiap titik alfamart */}
            {marks.map((mark, index) =>
                <Mark data={mark} key={index} getSelected={getSelected}  />
            )}

            {/* Bondary Regional Cinere */}

            {/* With Polygon Vector */}
            <Polygon positions={[outsideBoundaryCoords, insideBoundaryCoords]} pathOptions={{ color: "black" }} />

            {/* GeoJSON Bondary */}
            <GeoJSON data={bondary} style={() => (overlayStyle)} />

            {/* Big Street */}
            {streets.map(street => (
                <GeoJSON data={street} style={() => (streetStyle)}>
                    <Popup>
                        {street.name}
                    </Popup>
                </GeoJSON>
            ))}

            {/* River */}
            <GeoJSON data={river} style={() => (riverStyle)} >
                <Popup>
                    {river.name}
                </Popup>
            </GeoJSON>

            {/* Highway */}
            {/* <GeoJSON data={highway}> style={() => (highwayStyle)}
                <Popup>
                    {highway.name}
                </Popup>
            </GeoJSON> */}
        </MapContainer>
    )
}

// Flip Lot and Lat
function changeFormat(cordinates) {
    const newCordinates = cordinates.map(cordinate => [cordinate[1], cordinate[0]])

    return [newCordinates]
}