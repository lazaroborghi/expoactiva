import { StyleSheet } from 'react-native'
import Map from './components/map/Map.js'

export default function App () {
  return <Map/>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10
  },
  factContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 30,
    width: 250
  },
  midText: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  smallText: {
    fontSize: 16
  },
  image: {
    width: 325,
    height: 325
  }
})
