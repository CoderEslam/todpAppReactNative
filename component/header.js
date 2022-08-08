import {StatusBar} from 'expo-status-bar';
import {FlatList, StyleSheet, Text, ToastAndroid, TouchableOpacity, View} from 'react-native';
import {useState} from "react";


export default function Header() {
    return (
        <View>
            <View style={styles.topHeader}>

            </View>
            <View style={styles.header}>
                <Text style={styles.title}>
                    my Todos
                </Text>
            </View>
        </View>

    )
}


const styles = StyleSheet.create({

    topHeader: {
        height: 22,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: 'pink'
    },
    header: {
        height: 50,
        backgroundColor: 'coral'
    },
    title: {
        padding: 10,
        textAlign: 'center',
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        justifyContent: 'center'
    }
});