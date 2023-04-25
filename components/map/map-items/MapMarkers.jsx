import { Marker } from 'react-native-maps';
import { MaterialIcons } from '@expo/vector-icons';

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

        const isBathroom = feature.properties.Name === 'Baño';
        const isFoodPark = feature.properties.Name === 'Comidas';

        return (
          <Marker key={index}
            coordinate={coordinates}
            title={feature.properties.Name}
            description={feature.properties.description} 
          >
            <MaterialIcons name="location-on" size={30} color="darkgreen" />
            {isBathroom && (
              <MaterialIcons name="wc" size={20} color="blue" />
            )}
            {isFoodPark && (
              <MaterialIcons name="restaurant" size={20} color="orange" />
            )}
          </Marker>
        );
    });
};