import { useMemo } from 'react';
import { Throne } from '@components/Marker/types/Throne';
import OverlayView from '@components/Map/OverlayView';

interface CustomMarkerProps {
  throne: Throne;
  map?: google.maps.Map;
}

export default function CustomMarker({
  throne,
  map,
}: CustomMarkerProps): JSX.Element {
//   const price = useMemo(() => {
//     return `$ ${throne.ratesSummary.minPrice.replace(/\.(.*?\d*)/g, '')}`;
//   }, [throne]);

  return (
    <>
      {map && (
        <OverlayView
          position={{
            lat: throne.location.latitude as number,
            lng: throne.location.longitude as number,
          }}
          map={map}
        //   styles={{
        //     backgorundColor: 'DarkGray',
        //     color: 'white',
        //   }}
        >
          {/* use a button as the marker */}
          {/* <button onClick={handleClick}>{price}</button> */}
        </OverlayView>
      )}
    </>
  );
}
