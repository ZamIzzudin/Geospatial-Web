import { Marker, Popup } from "react-leaflet";

export default function Mark({ name, lot, lat, }) {
    return (
        <Marker position={[lot, lat]}>
            <Popup>
                {name}
            </Popup>
        </Marker>
    )
}