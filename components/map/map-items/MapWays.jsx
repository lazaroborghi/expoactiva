import { Polyline } from 'react-native-maps'

/*
  Filtro todas las features en expoactiva.js que sean 'LineString' (Caminos).
  Mapeo cada feature a un componente Polyline con sus coordenadas.
  Renderizo cada Calle en el mapa
*/
export default function Ways ({ features }) {
    return features
      .filter((feature) => feature.geometry.type === 'LineString')
      .map((feature, index) => {
        const coordinates = feature.geometry.coordinates.map((coord) => ({
          latitude: coord[1],
          longitude: coord[0],
        }))
        return <Polyline key={index} coordinates={coordinates} strokeWidth={3} strokeColor="grey" />
      })
  }