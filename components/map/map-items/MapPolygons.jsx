import { Polygon } from 'react-native-maps'

/*
  Filtro todas las features en expoactiva.js que sean 'Polygon' (Cuadrados).
  Mapeo cada feature a un componente Polygon con sus coordenadas.
  Renderizo cada Polygon en el mapa
*/
export default function Polygons ({ features }) {
    return features
      .filter((feature) => feature.geometry.type === 'Polygon')
      .map((feature, index) => {
        const coordinates = feature.geometry.coordinates[0].map((coord) => ({
          latitude: coord[1],
          longitude: coord[0],
        }));
        return (
          <Polygon key={index} coordinates={coordinates} fillColor="white" strokeWidth={2} strokeColor="grey" />
        )
      })
  }