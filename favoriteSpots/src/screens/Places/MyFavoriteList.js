import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';

const MyFavoriteList = (props) => {

    return(
        <SafeAreaView>
          <View>
            <Text>Your list. there will be personal records and the ones you chose from your friend groups' lists</Text>
          </View>
        </SafeAreaView>
      );
}

const mapStateToProps = ({ placeResponse }) => {
    const { list } = placeResponse;
    return { list };
};

export default connect(mapStateToProps, {})(MyFavoriteList);
