import React, {Component} from 'react'
import { View, Text, StyleSheet, ImageBackground } from "react-native"

import AddTodo from './containers/AddTodo';
import VisibleTodos from './containers/VisibleTodos';
import BackGround from '../assets/rainbackground.jpg';

class TodoApp extends Component {

    render() {
        return (
            <View style={styles.container}>
            <ImageBackground source={BackGround} style={{width: '100%', height: '100%'}}>
                <AddTodo />

                <View>
                    <VisibleTodos />
                </View>
            </ImageBackground>
            </View>
        );
    }

}
export default TodoApp;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 40,
    },
  });