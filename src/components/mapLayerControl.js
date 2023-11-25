import { LayersControl, TileLayer } from "react-leaflet";
export default function MapLayerControl() {
    return (
        <LayersControl position="topright">
            <LayersControl.BaseLayer checked name="Default">
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
            </LayersControl.BaseLayer>
            <LayersControl.BaseLayer name="Stadia Smooth">
                <TileLayer
                    url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
                    minZoom={0}
                    maxZoom={20}
                />
            </LayersControl.BaseLayer>
            <LayersControl.BaseLayer name="Stadia Smooth Dark">
                <TileLayer
                    url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
                    minZoom={0}
                    maxZoom={20}
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
        </LayersControl>
    )
}