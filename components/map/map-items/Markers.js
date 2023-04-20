import mapData from '../../../assets/expoactiva.js'
import { Marker } from 'react-native-maps';

export default function Markers () {
    return mapData.features
      .filter((feature) => feature.geometry.type === 'Point')
      .map((feature, index) => {
        const coordinates = {
          latitude: feature.geometry.coordinates[1],
          longitude: feature.geometry.coordinates[0],
        };
        return (
          <Marker key={index} coordinate={coordinates} title={feature.properties.Name} description={feature.properties.description} />
        );
    });
};