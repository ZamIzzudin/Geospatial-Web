import { LayersControl, TileLayer } from "react-leaflet";
export default function MapLayerControl() {
    return (
        <LayersControl position="topleft">
            <LayersControl.BaseLayer checked name="Default">
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
            </LayersControl.BaseLayer>
            <LayersControl.BaseLayer name="CyclOSM">
                <TileLayer
                    url="https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png"
                />
            </LayersControl.BaseLayer>
            <LayersControl.BaseLayer name="Esri World Street Map">
                <TileLayer
                    url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}"
                    minZoom={0}
                    maxZoom={20}
                />
            </LayersControl.BaseLayer>
            <LayersControl.BaseLayer name="Esri World Imagery">
                <TileLayer
                    url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                    minZoom={0}
                    maxZoom={20}
                />
            </LayersControl.BaseLayer>
            <LayersControl.BaseLayer name="Esri Nat Geo World Map">
                <TileLayer
                    url="https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}"
                    minZoom={0}
                    maxZoom={16}
                />
            </LayersControl.BaseLayer>
        </LayersControl>
    )
}