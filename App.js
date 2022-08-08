import {StatusBar} from 'expo-status-bar';
import {FlatList, StyleSheet, Text, ToastAndroid, TouchableOpacity, View} from 'react-native';
import {useState} from "react";
import Header from "./component/header";
import TodoItem from "./component/TodoItem";
import AddTodo from "./component/addTodo";

export default function App() {

    const [todo, setTodo] = useState([{text: 'buy coffee', key: '1'}, {
        text: 'create app ',
        key: '2'
    }, {text: 'play on the laptop ', key: '3'}])


    const filter = (key) => {
        setTodo((preTodo) => {
            return preTodo.filter(todo => todo.key != key)
        })
    }


    const submitHandler = (text) => {
        setTodo((preTodo) => {
            return [{text: text, key: Math.random().toString()}, ...preTodo]
        })
    }


    return (<View style={styles.container}>
        {/*header*/}
        <Header/>
        <View style={styles.content}>
            {/*to form*/}
            <AddTodo submitHandler={submitHandler}/>
            <View style={styles.list}>
                <FlatList data={todo} renderItem={({item}) => (
                    <TouchableOpacity>
                        <TodoItem item={item} filter={filter}/>
                    </TouchableOpacity>

                    // ToastAndroid.show(item.text, ToastAndroid.SHORT)
                )}
                />
            </View>
        </View>

    </View>);
}

const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: '#fff',
    }, content: {
        padding: 40
    }, list: {
        marginTop: 20,
    },
    text: {
        padding: 10,
        backgroundColor: 'blue'
    }
});
