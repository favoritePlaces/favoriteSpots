import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';

const PlaceList = (props) => {

    return(
        <SafeAreaView>
          <View>
            <Text>All places list in your friends groups and yours, search bar for tag search or place real name search</Text>
          </View>
        </SafeAreaView>
      );
}

const mapStateToProps = ({ placeResponse }) => {
    const { list } = placeResponse;
    return { list };
};

export default connect(mapStateToProps, {})(PlaceList);
