import MapView from 'react-native-maps';
import Polygons from './map-items/Polygons';
import Ways from './map-items/Ways';
import Markers from './map-items/Markers';

export default function Map () {
    return (
        <MapView
        style={{ flex: 1 }}
        initialRegion={{
            latitude: -33.4467119,
            longitude: -57.8964425,
            latitudeDelta: 0.002,
            longitudeDelta: 0.002,
        }}
        provider="google"
        >
            <Polygons/>
            <Ways/>
            <Markers/>
        </MapView>
    )
}