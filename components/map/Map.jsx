import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import MapView from 'react-native-maps'
//import MapMarkers from './map-items/MapMarkers'
import mapData from '../../assets/expoactiva.js'

// Obtengo las features del mapa para pasar a los children
const features = mapData.features

export default function Map () {
   
    // Componente Map, se renderiza el mapa con todos los elementos children

    const [zoomLevel, setZoomLevel] = useState(18);

    const handleRegionChange = (region) => {
        const zoom = Math.round(Math.log(360 / region.longitudeDelta) / Math.LN2);
        if (zoom !== zoomLevel) {
            setZoomLevel(zoom);
        }
    };
    

    return (
        <MapView
        showsPointsOfInterest={false}
        showsTraffic={false} showsBuildings={false} showsIndoors={false}
        style={styles.map}
        initialRegion={{
            latitude: -33.4467119,
            longitude: -57.8964425,
            latitudeDelta: 0.002,
            longitudeDelta: 0.002,
        }}
        minZoomLevel={8} // nivel mínimo de zoom
        maxZoomLevel={18} // nivel máximo de zoom
        showsUserLocation={true} // muestra la ubicación del usuario
        onRegionChangeComplete={handleRegionChange}
        >
        </MapView>
    )
}

const styles = StyleSheet.create({
    map: {
      flex: 1,
      width: '100%',
      height: '90%',
    }
  })