import { StyleSheet } from 'react-native'
import MapView from 'react-native-maps';
import MapPolygons from './map-items/MapPolygons';
import MapWays from './map-items/MapWays';
import MapMarkers from './map-items/MapMarkers';
import mapData from '../../assets/expoactiva.js'


// Obtengo las features del mapa para pasar a los children
const features = mapData.features

export default function Map () {
    // Componente Map, se renderiza el mapa con todos los elementos children
    return (
        <MapView
        style={styles.map}
        initialRegion={{
            latitude: -33.4467119,
            longitude: -57.8964425,
            latitudeDelta: 0.002,
            longitudeDelta: 0.002,
        }}
        minZoomLevel={8} // nivel mínimo de zoom
        maxZoomLevel={18} // nivel máximo de zoom
        provider="google"
        >
            <MapPolygons features={features}/>
            <MapWays features={features}/>
            <MapMarkers features={features}/>
        </MapView>
    )
}

const styles = StyleSheet.create({
    map: {
      flex: 1,
      width: '100%',
      height: '100%',
    }
  })