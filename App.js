import { StyleSheet, View } from 'react-native'
import Map from './components/map/Map.js'

export default function App () {

  return (
    <View style={styles.container}>
      <Map/>
      <View style={{ height: 75 }} />
    </View>
  )
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
})
