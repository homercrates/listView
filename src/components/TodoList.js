import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button, ScrollView } from 'react-native';

import { Ionicons } from '@expo/vector-icons';


const TodoList = ({todos, toggleTodo, toggleGot}) => (
    <ScrollView style={{ padding: 20, flexDirection: 'column' }}>
        {todos.map(todo => 
            <TouchableOpacity key={todo.id} onPress={() => toggleTodo(todo.id)}>
                <View style={{flexDirection: 'row'}}>
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
                    <TouchableOpacity key={todo.id} onPress={() => toggleGot(todo.id)}>
                        <Ionicons 
                            name="md-checkmark" 
                            size={12} 
                            style={{color: '#de9595', padding: 10 }} 
                        />
                    </TouchableOpacity>
                    
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