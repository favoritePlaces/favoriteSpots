import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';

const PlaceList = (props) => {

    return(
        <SafeAreaView>
          <View>
            <Text>How to add user, so there should be user search and add button, 
                group naming can be any.but there should be unique id which will be come from firebase</Text>
          </View>
        </SafeAreaView>
      );
}

const mapStateToProps = ({ placeResponse }) => {
    const { list } = placeResponse;
    return { list };
};

export default connect(mapStateToProps, {})(PlaceList);
