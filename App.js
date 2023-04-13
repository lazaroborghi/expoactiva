import { StatusBar } from 'expo-status-bar';
import { Button, Pressable, StyleSheet, Text, View, Alert } from 'react-native';
import { useState } from 'react';

const buttonMessage = () => {
  return (Alert.alert('Hola'))
}

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <View style={styles.container}>
      <Button style={styles.button} title='Hola' onPress={buttonMessage}/>
      <View style={styles.bottomNavigationBar}>
        <Button style={styles.button} title='1' onPress={buttonMessage}/>
        <Button style={styles.button} title='2' onPress={buttonMessage}/>
        <Button style={styles.button} title='3' onPress={buttonMessage}/>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20
  },
  button: {
  },
  bottomNavigationBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center'
  }
});
