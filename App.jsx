import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StyleSheet } from 'react-native'
import Map from './components/map/Map.jsx'
import Modal from './components/Modal.jsx'


function App () {
  return (
      <GestureHandlerRootView style={styles.container}>
        <Map/>
        <Modal/>
      </GestureHandlerRootView>    
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

export default App