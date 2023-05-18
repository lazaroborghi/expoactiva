import 'react-native-gesture-handler'
import React, { useLayoutEffect, useRef } from 'react'
import { BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet'
import { StyleSheet, View } from 'react-native'
import Map from './components/map/Map.jsx'
import Exhibitors from './components/map/Exhibitors.jsx'

function App () {
  
  const bottomSheetModalRef = useRef(null)

  useLayoutEffect(() => {
    bottomSheetModalRef.current?.present()  
  }, [])

  const snapPoints = [
    '8.9%', '50%', '90%'
  ]

  return (
    <View style={styles.container}>
      <Map/>
      <BottomSheetModalProvider>
        <BottomSheetModal
          ref={bottomSheetModalRef}
          snapPoints={snapPoints}
          enablePanDownToClose={false}
          keyboardBehavior="extend"
          keyboardBlurBehavior="restore"
          backgroundStyle={{
            borderRadius: 30,
          }}
        >
          <Exhibitors/>
        </BottomSheetModal>
      </BottomSheetModalProvider>
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

export default App