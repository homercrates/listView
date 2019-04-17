import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { connect } from 'react-redux';
import { addTodo } from '../actions';


class AddTodo extends Component {
    state = {
        text: '',
        note: '',
        amount: '',
        measure: '',
    }

    addTodo = (text, note, amount, measure) => {
        // redux store   remeber  dispatch(action type, value to pass)
        // this dispatch is  index.js addTodo action creator => (type: ADD_TODO  value text)
        // dispatch(addTodo(text))
        // dispatch() is how you tell the actions get grabbed by reducer. reducer grab this action and this state
        this.props.dispatch(addTodo(text, note, amount, measure));

        // this setState makes the input screen blank after submitting rather then contianing the last thing you typed
        this.setState({ text: '', note: '', amount: '', measure: ''})
        console.log(this.state);
    }

    render() {
        return (
            <View style={{flexDirection: 'row', marginHorizontal: 20 }}>
                <TextInput 
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}
                    placeholder="List Item"
                    style={{ 
                        borderWidth: 1, 
                        borderColor: '#f2f2e1', 
                        backgroundColor: '#eaeaea', 
                        borderRadius: 10,
                        height: 50, 
                        flex: 3, 
                        padding: 5 }}
                />
                <TextInput 
                    onChangeText={(note) => this.setState({note})}
                    value={this.state.note}
                    placeholder="Item notes"
                    style={{ 
                        borderWidth: 1, 
                        borderColor: '#f2f2e1', 
                        backgroundColor: '#eaeaea', 
                        borderRadius: 10,
                        height: 50, 
                        flex: 4, 
                        padding: 5 }}
                />
                <TextInput 
                    onChangeText={(amount) => this.setState({amount})}
                    value={this.state.amount}
                    placeholder="#"
                    style={{ 
                        borderWidth: 1, 
                        borderColor: '#f2f2e1', 
                        backgroundColor: '#eaeaea', 
                        borderRadius: 10,
                        height: 50, 
                        flex: 1, 
                        padding: 5 }}
                />
                <TextInput 
                    onChangeText={(measure) => this.setState({measure})}
                    value={this.state.measure}
                    placeholder="lbs"
                    style={{ 
                        borderWidth: 1, 
                        borderColor: '#f2f2e1', 
                        backgroundColor: '#eaeaea', 
                        borderRadius: 10,
                        height: 50, 
                        flex: 1, 
                        padding: 5 }}
                />

                <TouchableOpacity onPress={() => this.addTodo(
                    this.state.text, 
                    this.state.note, 
                    this.state.amount, 
                    this.state.measure
                )}>
                    <View style={{ 
                        height: 50, 
                        backgroundColor: '#eaeaea',
                        alignItems: 'center',
                        borderRadius: 10,
                        jusitfyContent: 'center' }}
                    >
                        <Ionicons 
                            name="md-add" 
                            size={30} 
                            style={{color: '#de9595', padding: 10 }} 
                        />
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

export default connect()(AddTodo);

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });