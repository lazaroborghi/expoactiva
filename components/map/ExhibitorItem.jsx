import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { MaterialIcons } from '@expo/vector-icons'

export default function ExhibitorItem({item, fairStand}) {
    return (
    <TouchableOpacity style={styles.exhibitor}>
        <View style={styles.imageContainer}>
            <Image 
            source={fairStand}
            style={{width: 40, height: 40, tintColor: '#0a521c'}}
            />
        </View>
        <View style={styles.itemContainer}>
            <Text style={styles.title}>{item.nombre}</Text>
            <Text>{item.descripcion}</Text>
        </View>
        <View style={styles.iconContainer}>
            <TouchableOpacity>
                <MaterialIcons name="location-on" size={35} color="darkgreen" />
            </TouchableOpacity>
        </View>
    </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    exhibitor : {
        flexDirection: 'row',
        paddingVertical: 15,
        paddingHorizontal: 15
    },
    imageContainer : {
        paddingRight: 10
    },
    itemContainer : {
        flex: 1
    },
    title : {
        fontWeight: 'bold',
        fontSize: 16
    }
})