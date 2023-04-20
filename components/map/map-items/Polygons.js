import mapData from '../../../assets/expoactiva.js'
import { Polygon } from 'react-native-maps';

export default function Polygons () {
    return mapData.features
      .filter((feature) => feature.geometry.type === 'Polygon')
      .map((feature, index) => {
        const coordinates = feature.geometry.coordinates[0].map((coord) => ({
          latitude: coord[1],
          longitude: coord[0],
        }));
        return (
          <Polygon key={index} coordinates={coordinates} fillColor="rgba(100, 200, 200, 0.5)" strokeWidth={2} strokeColor="rgba(0, 0, 255, 0.5)" />
        );
      });
  };