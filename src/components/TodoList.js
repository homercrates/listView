import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button, ScrollView, FlatList } from 'react-native';
import Swipeout  from 'react-native-swipeout'

import { Ionicons } from '@expo/vector-icons';


const TodoList = ({todos, toggleTodo, toggleGot, deleteTodo}) => (
    <ScrollView style={{ padding: 20, flexDirection: 'column' }}>
        {todos.map(todo =>
            <TouchableOpacity key={todo.id} onPress={() => toggleTodo(todo.id)}>
                <View style={{flexDirection: 'row', flex: 3, justifyContent: 'space-between', flexWrap: 'wrap'}}>
                    <TouchableOpacity key={todo.id} onPress={() => toggleGot(todo.id)}>
                        <Ionicons 
                            name="md-checkmark" 
                            size={12} 
                            style={{color: '#de9595', padding: 10}} 
                        />
                    </TouchableOpacity>
                    <Text style={{
                        fontSize: 24,
                        backgroundColor: 'rgba(0,0,0, .02)',
                        borderRadius: 10,
                        color: todo.got ? '#EEE' : '#000',
                    }}>
                        {todo.text}  {' '}
                    </Text>
                    <Text style={{
                        fontSize: 14,
                        textAlignVertical: 'center',
                        color: todo.got ? '#EEE' : '#000',
                    }}>
                        {todo.amount}
                        {todo.measure}
                    </Text>
                    <View>
                        <TouchableOpacity 
                            key={todo.id} 

                            style={{alignItems: 'flex-end', flex: 1, right: 0}}
                            onPress={() => deleteTodo(todo.id)}
                        >
                            <Text style={{color: 'red'}}>X</Text>
                        </TouchableOpacity>
                   </View>
                </View>
                
                <Text style={{
                    fontSize: 14,
                    backgroundColor: 'rgba(0,0,0, .02)',
                    borderRadius: (10,0,0,10),
                }}>
                    {
                        todo.completed ? todo.note : null
                    }
                </Text> 
            </TouchableOpacity>
            
        )}
    </ScrollView>

)


export default TodoList;


const styles = StyleSheet.create({
    listBtnRight: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    }
  });
