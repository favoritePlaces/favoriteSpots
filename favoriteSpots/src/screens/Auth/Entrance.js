import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, Platform } from 'react-native';
import { connect } from 'react-redux';
import { Icon } from 'native-base'
import { Button } from '../../components'

import { colors, fonts } from '../../style';

const Entrance = (props) => {
    useEffect(() => {
     
    }, []);
    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '' }}>

            <View style={{ flex: 1, backgroundColor: '', width: '100%', alignItems: 'center', justifyContent: 'center' }}>
           
            </View>

            <View style={{ flex: 8, backgroundColor: '', width: '80%', alignItems: 'center', justifyContent: 'center' }}>

                <Text style={{ 
                    fontWeight: 'bold', 
                    fontSize: fonts.main, 
                    width: '100%', 
                    marginBottom: 20, 
                    textAlign: 'left', 
                    padding: 10, 
                    }}>Find your favorite spots</Text>

                <Button
                    text={'Challenge accepted! Create an account'}
                    onPress={() => {
                        props.navigation.navigate('SignUp')
                    }}
                />
            </View>

            <View style={{ flex: 1, width: '70%', backgroundColor: '' }}>
                <Text style={{ fontSize: fonts.small }}> Already have an account? 
                <Text style={{ color: colors.main }} onPress={() => { props.navigation.navigate('SignIn') }}> Come In</Text></Text>
            </View>
        </SafeAreaView>
            )

}

const mapStateToProps = ({ authResponse }) => {
    const { loading } = authResponse;
    return { loading };
};

export default connect(mapStateToProps, {})(Entrance);