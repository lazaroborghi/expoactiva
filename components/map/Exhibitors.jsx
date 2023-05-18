import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { BottomSheetTextInput } from '@gorhom/bottom-sheet'
import { MaterialIcons } from '@expo/vector-icons'; 
import { expositores } from "../../assets/expositores";
import { FlatList } from "react-native-gesture-handler";
import fairStand from "../../assets/fair-stand.png";
import ExhibitorItem from "./ExhibitorItem";

export default function Exhibitors() {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Expositores</Text>
            <View style={styles.search}>
                <BottomSheetTextInput 
                    style={styles.searchInput} 
                    placeholder="Buscar">
                </BottomSheetTextInput>
            </View>
            <FlatList
                style={styles.list}
                data={expositores.expositores}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => <ExhibitorItem item={item} fairStand={ fairStand} />}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'flex-start',
      paddingVertical: 10
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 15,
        paddingHorizontal: 20,
        alignSelf: 'center'
    },
    search: {
        width: '100%',
        height: 50,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginBottom: 15,
        paddingHorizontal: 20
    },
    searchInput: {
        marginVertical: 5,
        backgroundColor: '#e8e8e8',
        width: '100%',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 15
    },
    list: {
        flex: 1
    }
  })