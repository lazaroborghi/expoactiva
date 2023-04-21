import { Marker } from 'react-native-maps';

/*
  Filtro todas las features en expoactiva.js que sean 'Point' (Marcador).
  Mapeo cada feature a un componente Marker con sus coordenadas.
  Renderizo cada marcador en el mapa
*/
export default function Markers ({ features }) {
    return features
      .filter((feature) => feature.geometry.type === 'Point')
      .map((feature, index) => {
        const coordinates = {
          latitude: feature.geometry.coordinates[1],
          longitude: feature.geometry.coordinates[0],
        };
        return (
          <Marker key={index}
            coordinate={coordinates}
            title={feature.properties.Name}
            description={feature.properties.description} 
          />
        );
    });
};