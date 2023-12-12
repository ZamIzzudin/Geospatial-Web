import React from 'react';
import { useMapEvents } from 'react-leaflet';

function round(number, precision = 0) {
  return (
    Math.round(number * Math.pow(10, precision) + Number.EPSILON) /
    Math.pow(10, precision)
  );
}

function formatLatitude(latitude) {
  const direction = latitude > 0 ? 'N' : 'S';
  return `${round(Math.abs(latitude), 6)}° ${direction}`;
}

function formatLongitude(longitude) {
  const direction = longitude > 0 ? 'E' : 'W';
  return `${round(Math.abs(longitude), 6)}° ${direction}`;
}

function MouseCoordinates() {
  const [mousePoint, setMousePoint] = React.useState(null);

  const formattedCoordinates =
    mousePoint === null
      ? ''
      : `${formatLatitude(mousePoint.lat)}, ${formatLongitude(mousePoint.lng)}`;

  React.useEffect(
    function copyToClipboard() {
      function handleCtrlCKeydown(event) {
        if (
          event.key === 'c' &&
          event.ctrlKey &&
          formattedCoordinates.length > 0 &&
          navigator.clipboard
        ) {
          navigator.clipboard.writeText(formattedCoordinates);
        }
      }

      document.addEventListener('keydown', handleCtrlCKeydown);

      return function cleanup() {
        document.removeEventListener('keydown', handleCtrlCKeydown);
      };
    },
    [formattedCoordinates]
  );

  useMapEvents({
    mousemove(event) {
      setMousePoint(event.latlng);
    },
    mouseout() {
      setMousePoint(null);
    },
  });

  if (formattedCoordinates.length === 0) return null;

  return (
    <div className="leaflet-control-attribution leaflet-control"> 
      {formattedCoordinates}
    </div>
  );
}

export default MouseCoordinates;