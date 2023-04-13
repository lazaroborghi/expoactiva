import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';
import { useEffect, useState } from 'react';

const CAT_RANDOM_FACT_ENDPOINT = `https://catfact.ninja/fact`

export default function App() {
  const [fact, setFact] = useState()
  const [imageUrl,setImageUrl] = useState()

  useEffect(() => {
    fetch(CAT_RANDOM_FACT_ENDPOINT)
      .then(res => res.json())
      .then(data => {
        const { fact } = data
        setFact(fact)
      })
  },[])

  useEffect(() => {
    if (!fact) return

    const firstWord = fact.split(' ',1).join(' ')
    console.log(firstWord)

    fetch(`https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`)
      .then(res => res.json())
      .then(response => {
        const { url } = response
        setImageUrl(`https://cataas.com${url}`)
      })
  },[fact])

  console.log(imageUrl)

  return (
    <View style={styles.container}>
      <View style={styles.factContainer}>
        <Text style={styles.midText}>Cat random fact</Text>
        {fact && <Text style={styles.smallText}>{fact}</Text>}
        {imageUrl && <Image alt='Imagen random de gato obtenida de cataas.com' style={styles.image} source={{uri:`${imageUrl}`}} />}
      </View>
      <StatusBar style="auto" />
    </View>
  );
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
});
