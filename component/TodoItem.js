import {StatusBar} from 'expo-status-bar';
import {FlatList, StyleSheet, Text, ToastAndroid, TouchableOpacity, View} from 'react-native';
import {useState} from "react";


export default function TodoItem({item, filter}) {

    const toast = (item) => {
        ToastAndroid.show(item, ToastAndroid.SHORT)
    }
    return (<TouchableOpacity onPress={() => {
        filter(item.key)
        toast(item.text)
    }}>
        <Text style={styles.item}>{item.text}</Text>

    </TouchableOpacity>)

}

const styles = StyleSheet.create({

    item: {
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10
    }

})

