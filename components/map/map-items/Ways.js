import mapData from '../../../assets/expoactiva.js'
import { Polyline } from 'react-native-maps';

export default function Ways () {
    return mapData.features
      .filter((feature) => feature.geometry.type === 'LineString')
      .map((feature, index) => {
        const coordinates = feature.geometry.coordinates.map((coord) => ({
          latitude: coord[1],
          longitude: coord[0],
        }));
        return <Polyline key={index} coordinates={coordinates} strokeWidth={2} strokeColor="rgba(0, 0, 255, 0.5)" />;
      });
  };