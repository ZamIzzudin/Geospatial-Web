import { useMap, useMapEvent, Rectangle, MapContainer, TileLayer } from "react-leaflet"
import { useCallback, useState, useMemo } from "react"
import { useEventHandlers } from '@react-leaflet/core'

// Classes used by Leaflet to position controls
const POSITION_CLASSES = {
    bottomleft: 'leaflet-bottom leaflet-left',
    bottomright: 'leaflet-bottom leaflet-right',
    topleft: 'leaflet-top leaflet-left',
    topright: 'leaflet-top leaflet-right',
  }
  
  const BOUNDS_STYLE = { weight: 1 }
  
  function MinimapBounds({ parentMap, zoom }) {
    const minimap = useMap()
  
    // Clicking a point on the minimap sets the parent's map center
    const onClick = useCallback(
      (e) => {
        parentMap.setView(e.latlng, parentMap.getZoom())
      },
      [parentMap]
    )
    useMapEvent('click', onClick)
  
    // Keep track of bounds in state to trigger renders
    const [bounds, setBounds] = useState(parentMap.getBounds())
    const onChange = useCallback(() => {
      setBounds(parentMap.getBounds())
      // Update the minimap's view to match the parent map's center and zoom
      minimap.setView(parentMap.getCenter(), zoom)
    }, [minimap, parentMap, zoom])
  
    // Listen to events on the parent map
    const handlers = useMemo(() => ({ move: onChange, zoom: onChange }), [onChange])
    useEventHandlers({ instance: parentMap }, handlers)
  
    return <Rectangle bounds={bounds} pathOptions={BOUNDS_STYLE} />
  }
  
  function MinimapControl({ position, zoom }) {
    const parentMap = useMap()
    const mapZoom = zoom || 0
  
    return (
      <div className={POSITION_CLASSES[position]}>
        <div className="leaflet-control leaflet-bar" style={{ zIndex: 999 }}>
          <MapContainer
            style={{ height: 150, width: 150 }}
            center={parentMap.getCenter()}
            zoom={mapZoom}
            dragging={false}
            doubleClickZoom={false}
            scrollWheelZoom={false}
            attributionControl={false}
            zoomControl={false}
          >
            <TileLayer url={'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'} />
            <MinimapBounds parentMap={parentMap} zoom={mapZoom} />
          </MapContainer>
        </div>
      </div>
    )
  }

  export default MinimapControl