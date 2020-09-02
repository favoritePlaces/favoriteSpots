import React from 'react';
import { Text, View, TextInput, Dimensions } from 'react-native';
import { colors } from '../style';

const { width, height } = Dimensions.get('window')

const Input = (props) => (
    <TextInput
        placeholder={props.placeholder}
        placeholderTextColor={'grey'}
        secureTextEntry={props.secureTextEntry}
        keyboardType={props.keyboardType}
        multiline={props.multiline}
        value={props.value}
        autoFocus={props.autoFocus}
        onChangeText={(value) => props.onChangeText(value)}
        style={[{
            width:'80%',
            height:50,
            padding:8,
            marginBottom:'5%',
           borderWidth:0.2,
           borderColor:'#bb7cd6',
            color: '#424242',
            borderLeftWidth:5,
            borderRadius:12,
           
        }, props.style]}
    />
);

export { Input };

