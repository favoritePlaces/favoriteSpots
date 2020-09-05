import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';

const FriendGroups = (props) => {

    return(
        <SafeAreaView>
          <View>
            <Text>All friend groups list</Text>
          </View>
        </SafeAreaView>
      );
}

const mapStateToProps = ({ placeResponse }) => {
    const { list } = placeResponse;
    return { list };
};

export default connect(mapStateToProps, {})(FriendGroups);
