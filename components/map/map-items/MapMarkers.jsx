import { Marker } from 'react-native-maps';
import { MaterialIcons } from '@expo/vector-icons';
import { View, Text } from 'react-native';

function getMarkerIcon(markerName) {
  switch (markerName) {
    case 'Baño':
      return <MaterialIcons name="wc" size={20} color="blue" />;
    case 'Comidas':
      return <MaterialIcons name="restaurant" size={20} color="orange" />;
    default:
      return null;
  }
}

function calculateMarkerOpacity(zoomLevel) {
  const minZoom = 8;
  const maxZoom = 18;
  const zoomRange = maxZoom - minZoom;
  const currentZoomRange = zoomLevel - minZoom;

  return currentZoomRange / zoomRange;
}

/*
  Filtro todas las features en expoactiva.js que sean 'Point' (Marcador).
  Mapeo cada feature a un componente Marker con sus coordenadas.
  Renderizo cada marcador en el mapa
*/
export default function Markers ({ features, zoomLevel }) {

    const markerOpacity = calculateMarkerOpacity(zoomLevel);

    return features
      .filter((feature) => feature.geometry.type === 'Point')
      .map((feature, index) => {
        const coordinates = {
          latitude: feature.geometry.coordinates[1],
          longitude: feature.geometry.coordinates[0],
        };

        const markerName = feature.properties.Name;
        const markerIcon = getMarkerIcon(markerName);
      
        return (
          <Marker key={index}
            coordinate={coordinates}
            title={markerName}
            description={feature.properties.description}
          >
            <View style={{ alignItems: 'center', opacity: markerOpacity }}>
              {markerIcon || <MaterialIcons name="location-on" size={30} color="darkgreen" />}
              <Text>{markerName}</Text>
            </View>
          </Marker>
        );
    });
};