import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';

const SignIn = (props) => {
return(
    <View>
        <Text>SignIn</Text>
    </View>
)
}

const mapStateToProps = ({ authResponse }) => {
    const { loading } = authResponse;
    return { loading };
};

export default connect(mapStateToProps, {})(SignIn);