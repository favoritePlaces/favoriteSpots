import React from 'react';
import { Text, View, TextInput, Dimensions } from 'react-native';
import { colors } from '../style';

const { width, height } = Dimensions.get('window')

const Input = (props) => (
    <TextInput
        placeholder={props.placeholder}
        secureTextEntry={props.secureTextEntry}
        keyboardType={props.keyboardType}
        multiline={props.multiline}
        value={props.value}
        autoFocus={props.autoFocus}
        onChangeText={(value) => props.onChangeText(value)}
        style={[{
            padding: 5,
            height: '60%',
            color: '#424242',
            borderBottomColor: colors.line,
            borderBottomWidth: 1
        }, props.style]}
    />
);

export { Input };

